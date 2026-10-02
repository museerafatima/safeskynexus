from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    database_url: str
    frontend_origin: str = "http://localhost:3000"

    # ---- Email notifications (contact form) ----
    # smtp_username/smtp_password are the Gmail account that SENDS the
    # notification. smtp_password must be a 16-character Gmail "app
    # password" (Google Account -> Security -> App passwords), never the
    # real account password.
    smtp_host: str = "smtp.gmail.com"
    smtp_port: int = 587
    smtp_username: str
    smtp_password: str

    # The inbox that should RECEIVE contact-form notifications. Often the
    # same address as smtp_username, but kept separate in case the sending
    # account and the inbox the team actually checks ever differ.
    contact_notify_email: str

    class Config:
        env_file = ".env"

settings = Settings()