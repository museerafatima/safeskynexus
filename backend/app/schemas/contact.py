from pydantic import BaseModel, EmailStr, Field
from typing import Optional

class ContactCreate(BaseModel):
    name: str = Field(min_length=1, max_length=100)
    email: EmailStr
    phone: Optional[str] = Field(default=None, max_length=30)
    message: str = Field(min_length=1, max_length=2000)

class ContactResponse(BaseModel):
    message: str