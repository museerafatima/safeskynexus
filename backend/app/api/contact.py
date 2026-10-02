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
        raise HTTPException(status_code=500, detail="Something went wrong. Please try again.")

    # The submission is already safely saved at this point. If the email
    # notification fails (bad credentials, Gmail hiccup, network issue),
    # we log it but still return success to the person filling out the
    # form — their message was received either way, and it's already in
    # the database even if nobody got pinged about it.
    try:
        send_contact_notification(
            name=payload.name,
            email=payload.email,
            message=payload.message,
            phone=payload.phone,
        )
    except Exception:
        logger.exception(
            "Failed to send contact notification email for submission id=%s",
            submission.id,
        )

    return {"message": "Contact submission received successfully"}