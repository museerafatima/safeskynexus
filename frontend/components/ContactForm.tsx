"use client";

import { useState, FormEvent } from "react";
import { submitContactForm } from "@/lib/api";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (status === "loading") return;

    setStatus("loading");
    setErrorMsg("");

    try {
      await submitContactForm({ name, email, phone, message });
      setStatus("success");
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  const inputClasses =
    "w-full min-h-11 border border-gray-300 rounded-full px-4 py-3 text-base text-body focus:outline-none focus:ring-2 focus:ring-orange focus:border-orange";

  return (
    <div className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 shadow-sm p-4 sm:p-6">
      <h2 className="text-navy text-xl sm:text-2xl md:text-3xl font-bold mb-1">
        Get In Touch
      </h2>
      <p className="text-muted text-sm mb-5 sm:mb-6">
        We would love to hear from you
      </p>

      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5" noValidate>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-navy mb-1">
            Name
          </label>
          <input
            id="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-navy mb-1">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-navy mb-1">
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-navy mb-1">
            Message
          </label>
          <textarea
            id="message"
            required
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full border border-gray-300 rounded-2xl px-4 py-3 text-base text-body focus:outline-none focus:ring-2 focus:ring-orange focus:border-orange resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full sm:w-auto min-h-11 bg-orange text-white font-medium px-8 py-3 rounded-full hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "loading" ? "Sending..." : "Send Message"}
        </button>

        {status === "success" && (
          <p role="status" className="text-green-600 text-sm font-medium">
            Thanks — your message has been received successfully.
          </p>
        )}

        {status === "error" && (
          <p role="alert" className="text-red-600 text-sm font-medium">
            {errorMsg}
          </p>
        )}
      </form>
    </div>
  );
}