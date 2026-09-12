from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.database.database import Base, engine
from app.models import contact  # noqa: F401 (needed so the table is registered)
from app.api import contact as contact_router
from app.api import drones as drones_router
from app.core.config import settings

Base.metadata.create_all(bind=engine)

app = FastAPI(title="SafeSky Nexus API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[settings.frontend_origin],
    allow_credentials=True,
    allow_methods=["GET", "POST"],
    allow_headers=["*"],
)

app.include_router(contact_router.router, prefix="/api")
app.include_router(drones_router.router, prefix="/api")

@app.get("/")
def root():
    return {"status": "SafeSky Nexus API is running"}