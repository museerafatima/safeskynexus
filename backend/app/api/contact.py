import logging

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database.database import get_db
from app.models.contact import ContactSubmission
from app.schemas.contact import ContactCreate, ContactResponse
from app.core.email import send_contact_notification

logger = logging.getLogger(__name__)

router = APIRouter()


@router.post("/contact", response_model=ContactResponse, status_code=201)
def create_contact(payload: ContactCreate, db: Session = Depends(get_db)):
    try:
        submission = ContactSubmission(
            name=payload.name,
            email=payload.email,
            phone=payload.phone,
            message=payload.message,
        )
        db.add(submission)
        db.commit()
        db.refresh(submission)
    except Exception:
        db.rollback()
        logger.exception("Failed to save contact submission")
        raise HTTPException(status_code=500, detail="Something went wrong. Please try again.")

    # The submission is already safely saved. If the notification email fails
    # (bad app password, Gmail hiccup, network), log it but still tell the
    # visitor their message was received — it IS in the database.
    #
    # Kept synchronous on purpose: this app deploys to Vercel serverless
    # (see vercel.json), where work scheduled with BackgroundTasks after the
    # response is sent can be frozen before it finishes. The SMTP timeout in
    # settings keeps the worst case bounded.
    try:
        send_contact_notification(
            name=payload.name,
            email=payload.email,
            message=payload.message,
            phone=payload.phone,
            submission_id=submission.id,
            submitted_at=submission.created_at,
        )
    except Exception:
        logger.exception(
            "Failed to send contact notification email for submission id=%s",
            submission.id,
        )

    return {"message": "Contact submission received successfully"}