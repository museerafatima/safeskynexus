from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=".env", extra="ignore")

    database_url: str
    frontend_origin: str = "http://localhost:3000"

    # ---- Email notifications (contact form) ----
    # SMTP_USERNAME / SMTP_PASSWORD: the Gmail account that SENDS the alert.
    # SMTP_PASSWORD must be a 16-character Gmail "App password"
    # (Google Account -> Security -> 2-Step Verification -> App passwords),
    # never the real account password.
    #
    # All three default to empty so the API still boots (and still saves
    # form submissions) if email isn't configured yet. Notifications are
    # simply skipped, with a warning in the logs.
    smtp_host: str = "smtp.gmail.com"
    smtp_port: int = 587
    smtp_username: str = ""
    smtp_password: str = ""
    smtp_timeout: int = 10  # seconds; stops a slow SMTP server hanging the form

    # Inbox that RECEIVES the notifications. Can be several addresses,
    # comma-separated: "sales@company.com, founder@company.com"
    contact_notify_email: str = ""

    @property
    def notify_recipients(self) -> list[str]:
        return [e.strip() for e in self.contact_notify_email.split(",") if e.strip()]

    @property
    def email_configured(self) -> bool:
        return bool(self.smtp_username and self.smtp_password and self.notify_recipients)


settings = Settings()