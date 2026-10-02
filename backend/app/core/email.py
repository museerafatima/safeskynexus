import logging
import smtplib
from datetime import datetime
from email.message import EmailMessage
from html import escape
from typing import Optional

from app.core.config import settings

logger = logging.getLogger(__name__)


def _one_line(value: str, limit: int = 100) -> str:
    """Strip CR/LF so user input can never inject extra email headers."""
    return " ".join(value.split())[:limit]


def send_contact_notification(
    name: str,
    email: str,
    message: str,
    phone: Optional[str] = None,
    submission_id: Optional[int] = None,
    submitted_at: Optional[datetime] = None,
) -> bool:
    """
    Emails the company inbox when someone submits the contact form.

    Returns True if sent, False if email isn't configured (skipped).
    Raises on SMTP failure so the caller can log it — the caller decides
    that a failed email must not fail the form submission itself.
    """
    if not settings.email_configured:
        logger.warning(
            "Email notifications are not configured (SMTP_USERNAME / "
            "SMTP_PASSWORD / CONTACT_NOTIFY_EMAIL). Skipping."
        )
        return False

    safe_name = _one_line(name)
    when = (submitted_at or datetime.now()).strftime("%d %b %Y, %H:%M")
    ref = f"#{submission_id}" if submission_id is not None else ""

    # ---- plain-text version ----
    text = (
        "You have a new message from the SafeSky Nexus website contact form.\n\n"
        f"Name:  {safe_name}\n"
        f"Email: {email}\n"
        + (f"Phone: {phone}\n" if phone else "")
        + (f"Ref:   {ref}\n" if ref else "")
        + f"Time:  {when}\n\n"
        f"Message:\n{message}\n\n"
        "-- \nHit Reply to respond directly to the sender."
    )

    # ---- HTML version (everything user-supplied is escaped) ----
    rows = [("Name", escape(safe_name)), ("Email", f'<a href="mailto:{escape(email)}">{escape(email)}</a>')]
    if phone:
        rows.append(("Phone", escape(phone)))
    rows.append(("Received", escape(when)))
    if ref:
        rows.append(("Reference", escape(ref)))
    table = "".join(
        f'<tr><td style="padding:4px 16px 4px 0;color:#666">{k}</td><td style="padding:4px 0"><b>{v}</b></td></tr>'
        for k, v in rows
    )
    html = (
        '<div style="font-family:Arial,sans-serif;font-size:15px;color:#111;max-width:600px">'
        '<h2 style="margin:0 0 12px">New contact form message</h2>'
        f"<table>{table}</table>"
        '<div style="margin-top:16px;padding:14px 16px;background:#f5f6f8;border-left:4px solid #f97316;'
        f'white-space:pre-wrap">{escape(message)}</div>'
        '<p style="color:#888;font-size:13px;margin-top:16px">Hit <b>Reply</b> to respond directly to the sender.</p>'
        "</div>"
    )

    msg = EmailMessage()
    msg["From"] = settings.smtp_username
    msg["To"] = ", ".join(settings.notify_recipients)
    msg["Subject"] = f"New contact form message from {safe_name}"
    msg["Reply-To"] = email  # "Reply" goes straight to the visitor
    msg.set_content(text)
    msg.add_alternative(html, subtype="html")

    # Google shows app passwords as "abcd efgh ijkl mnop"; spaces aren't part of it.
    password = settings.smtp_password.replace(" ", "")

    with smtplib.SMTP(settings.smtp_host, settings.smtp_port, timeout=settings.smtp_timeout) as server:
        server.starttls()
        server.login(settings.smtp_username, password)
        server.send_message(msg)

    logger.info("Contact notification sent for submission %s from %s", ref or "(no id)", email)
    return True