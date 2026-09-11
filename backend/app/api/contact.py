from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database.database import get_db
from app.models.contact import ContactSubmission
from app.schemas.contact import ContactCreate, ContactResponse

router = APIRouter()

@router.post("/contact", response_model=ContactResponse, status_code=201)
def create_contact(payload: ContactCreate, db: Session = Depends(get_db)):
    try:
        submission = ContactSubmission(
            name=payload.name,
            email=payload.email,
            message=payload.message,
        )
        db.add(submission)
        db.commit()
        db.refresh(submission)
        return {"message": "Contact submission received successfully"}
    except Exception:
        db.rollback()
        raise HTTPException(status_code=500, detail="Something went wrong. Please try again.")