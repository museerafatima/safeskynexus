"use client";

import { useId, useState, type FormEvent } from "react";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";
import { submitContactForm } from "@/lib/api";

/* ==========================================================================
   CONTACT FORM
   Backend behaviour is UNCHANGED — it still posts through
   submitContactForm({ name, email, phone, message }) from @/lib/api.
   Everything added here is client-side UX:
     • Per-field validation with inline messages tied via aria-describedby
     • Distinct normal / hover / focus / error / disabled / success states
     • Errors clear as you type, so the form never scolds you twice
     • Success swaps the form for a confirmation panel with a way back
     • Inputs are 16px on mobile, which stops iOS Safari zooming on focus
   ========================================================================== */

type Status = "idle" | "loading" | "success" | "error";
type FieldErrors = Partial<Record<"name" | "email" | "message", string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export default function ContactForm() {
  const uid = useId();
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const loading = status === "loading";

  function update(field: keyof typeof values, value: string) {
    setValues((v) => ({ ...v, [field]: value }));
    if (errors[field as keyof FieldErrors]) {
      setErrors((e) => ({ ...e, [field]: undefined }));
    }
    if (status === "error") setStatus("idle");
  }

  function validate(): FieldErrors {
    const next: FieldErrors = {};
    if (!values.name.trim()) next.name = "Enter your name.";
    if (!values.email.trim()) next.email = "Enter your email address.";
    else if (!EMAIL_RE.test(values.email.trim()))
      next.email = "That email address doesn't look right.";
    if (!values.message.trim()) next.message = "Tell us what you need.";
    else if (values.message.trim().length < 10)
      next.message = "Add a little more detail — at least 10 characters.";
    return next;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (loading) return;

    const found = validate();
    if (Object.keys(found).length > 0) {
      setErrors(found);
      // Move focus to the first field that needs attention.
      const first = Object.keys(found)[0];
      document.getElementById(`${uid}-${first}`)?.focus();
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    try {
      await submitContactForm(values);
      setStatus("success");
      setValues({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error
          ? err.message
          : "We couldn't send that just now. Try again, or email us directly."
      );
    }
  }

  /* ---- Field styling -------------------------------------------------
     Inputs use the card radius, not a pill: pills are reserved for actions,
     so the eye can tell a control from a container. */
  const field = (invalid: boolean) =>
    [
      "w-full min-h-12 rounded-xl border bg-surface px-4 py-3",
      "text-base text-body placeholder:text-muted/60",
      "transition-[border-color,box-shadow,background-color] duration-200",
      "hover:border-navy/30",
      "focus:outline-none focus:border-orange focus:ring-4 focus:ring-orange/15",
      "disabled:cursor-not-allowed disabled:bg-surface-soft disabled:text-muted",
      invalid ? "border-danger ring-4 ring-danger/10" : "border-line",
    ].join(" ");

  const labelCls = "block text-sm font-semibold text-navy mb-1.5";

  /* ---- Success state ---- */
  if (status === "success") {
    return (
      <div className="rounded-panel border border-line bg-surface p-6 shadow-lift sm:p-8">
        <div
          role="status"
          className="flex flex-col items-start gap-4 text-left"
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-success/10 text-success">
            <CheckCircle2 size={24} aria-hidden="true" />
          </span>
          <div>
            <h2 className="type-h3 text-navy">Message sent</h2>
            <p className="type-body mt-2 text-muted">
              Thanks — we have your message and someone from the team will get
              back to you shortly.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="mt-1 inline-flex min-h-12 items-center rounded-full border border-navy/25 px-5 py-3 text-sm font-semibold text-navy transition-colors duration-200 hover:border-navy/50 hover:bg-navy/4"
          >
            Send another message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-panel border border-line bg-surface p-5 shadow-lift sm:p-8">
      <h2 className="type-h3 text-navy">Send us a message</h2>
      <p className="mt-1.5 text-sm text-muted">
        Fields marked with an asterisk are required.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-5" noValidate>
        {/* Name */}
        <div>
          <label htmlFor={`${uid}-name`} className={labelCls}>
            Name <span className="text-orange">*</span>
          </label>
          <input
            id={`${uid}-name`}
            name="name"
            type="text"
            autoComplete="name"
            required
            disabled={loading}
            value={values.name}
            onChange={(e) => update("name", e.target.value)}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? `${uid}-name-error` : undefined}
            className={field(!!errors.name)}
          />
          {errors.name && (
            <p
              id={`${uid}-name-error`}
              className="mt-1.5 flex items-center gap-1.5 text-sm text-danger"
            >
              <AlertCircle size={14} aria-hidden="true" />
              {errors.name}
            </p>
          )}
        </div>

        {/* Email + Phone share a row from sm up */}
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor={`${uid}-email`} className={labelCls}>
              Email <span className="text-orange">*</span>
            </label>
            <input
              id={`${uid}-email`}
              name="email"
              type="email"
              inputMode="email"
              autoComplete="email"
              required
              disabled={loading}
              value={values.email}
              onChange={(e) => update("email", e.target.value)}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? `${uid}-email-error` : undefined}
              className={field(!!errors.email)}
            />
            {errors.email && (
              <p
                id={`${uid}-email-error`}
                className="mt-1.5 flex items-center gap-1.5 text-sm text-danger"
              >
                <AlertCircle size={14} aria-hidden="true" />
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label htmlFor={`${uid}-phone`} className={labelCls}>
              Phone{" "}
              <span className="font-normal text-muted">(optional)</span>
            </label>
            <input
              id={`${uid}-phone`}
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              disabled={loading}
              value={values.phone}
              onChange={(e) => update("phone", e.target.value)}
              className={field(false)}
            />
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor={`${uid}-message`} className={labelCls}>
            Message <span className="text-orange">*</span>
          </label>
          <textarea
            id={`${uid}-message`}
            name="message"
            rows={5}
            required
            disabled={loading}
            value={values.message}
            onChange={(e) => update("message", e.target.value)}
            aria-invalid={!!errors.message}
            aria-describedby={
              errors.message ? `${uid}-message-error` : undefined
            }
            className={`${field(!!errors.message)} resize-y min-h-32`}
          />
          {errors.message && (
            <p
              id={`${uid}-message-error`}
              className="mt-1.5 flex items-center gap-1.5 text-sm text-danger"
            >
              <AlertCircle size={14} aria-hidden="true" />
              {errors.message}
            </p>
          )}
        </div>

        {/* Submit */}
        <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center">
          <button
            type="submit"
            disabled={loading}
            className="group inline-flex min-h-12 w-full items-center justify-center gap-2.5 rounded-full bg-orange px-7 py-3.5 text-sm font-semibold text-white shadow-glow transition-[transform,background-color,box-shadow] duration-300 ease-soft hover:-translate-y-0.5 hover:bg-orange-600 active:translate-y-0 active:scale-[0.98] disabled:translate-y-0 disabled:cursor-not-allowed disabled:bg-orange/60 disabled:shadow-none sm:w-auto"
          >
            {loading ? (
              <>
                <Loader2 size={16} aria-hidden="true" className="animate-spin" />
                Sending
              </>
            ) : (
              <>
                Send message
                <Send
                  size={16}
                  aria-hidden="true"
                  className="transition-transform duration-300 ease-soft group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </>
            )}
          </button>
        </div>

        {status === "error" && (
          <p
            role="alert"
            className="flex items-start gap-2 rounded-xl border border-danger/25 bg-danger/6 px-4 py-3 text-sm text-danger"
          >
            <AlertCircle size={16} aria-hidden="true" className="mt-0.5 shrink-0" />
            {errorMsg}
          </p>
        )}
      </form>
    </div>
  );
}