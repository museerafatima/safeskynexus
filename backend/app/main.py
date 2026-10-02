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

# Everything lives under /api. On Vercel, requests to /api/... are routed to
# this service WITHOUT the prefix being stripped (see vercel.json), so the
# routes must really be mounted at /api/... Using the same prefix locally
# keeps development and production identical.
app.include_router(contact_router.router, prefix="/api")
app.include_router(drones_router.router, prefix="/api")


@app.get("/api")
@app.get("/api/")
def root():
    return {"status": "SafeSky Nexus API is running"}