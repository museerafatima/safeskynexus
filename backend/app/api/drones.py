from fastapi import APIRouter
from app.schemas.drone import Drone

router = APIRouter()

DUMMY_DRONES = [
    {
        "name": "SkyScout X1",
        "price": "$2,499",
        "specs": {"flight_time": "35 minutes", "range": "10 km", "camera": "4K"},
    },
    {
        "name": "SkyScout X2 Pro",
        "price": "$3,299",
        "specs": {"flight_time": "42 minutes", "range": "15 km", "camera": "6K"},
    },
    {
        "name": "SkyScout Mini",
        "price": "$1,199",
        "specs": {"flight_time": "22 minutes", "range": "5 km", "camera": "1080p"},
    },
]

@router.get("/drones", response_model=list[Drone])
def get_drones():
    return DUMMY_DRONES