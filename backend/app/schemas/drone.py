from pydantic import BaseModel

class DroneSpecs(BaseModel):
    flight_time: str
    range: str
    camera: str

class Drone(BaseModel):
    name: str
    price: str
    specs: DroneSpecs