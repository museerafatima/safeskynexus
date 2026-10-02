import logging
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from typing import Optional

from app.core.config import settings

logger = logging.getLogger(__name__)


def send_contact_notification(
    name: str,
    email: str,
    message: str,
    phone: Optional[str] = None,
) -> None:
    """
    Sends an email to the company inbox whenever the contact form is
    submitted. Uses Gmail's SMTP server over STARTTLS with an app password
    (see Settings.smtp_password).

    IMPORTANT: this function raises on failure. The caller (contact.py)
    is responsible for deciding whether an email failure should also fail
    the request — see the try/except there. We don't swallow errors here
    so they're never silently lost; we just don't let them block the
    contact submission itself from succeeding.
    """
    subject = f"New contact form submission from {name}"

    phone_line = f"Phone: {phone}\n" if phone else ""
    body = (
        f"You have a new message from the SafeSky Nexus website contact form.\n\n"
        f"Name: {name}\n"
        f"Email: {email}\n"
        f"{phone_line}"
        f"\nMessage:\n{message}\n"
    )

    msg = MIMEMultipart()
    msg["From"] = settings.smtp_username
    msg["To"] = settings.contact_notify_email
    msg["Subject"] = subject
    # Lets whoever reads this in Gmail just hit "Reply" and it goes
    # straight to the person who filled out the form, not back to
    # the company's own sending address.
    msg["Reply-To"] = email

    msg.attach(MIMEText(body, "plain"))

    with smtplib.SMTP(settings.smtp_host, settings.smtp_port) as server:
        server.starttls()
        server.login(settings.smtp_username, settings.smtp_password)
        server.send_message(msg)

    logger.info("Contact notification email sent for submission from %s", email)