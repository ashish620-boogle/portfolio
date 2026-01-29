"use client";

import { useState } from "react";

type FieldErrors = {
  name?: string;
  email?: string;
  message?: string;
  form?: string;
};

const isEmail = (value: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const validate = () => {
    const next: FieldErrors = {};
    if (name.trim().length < 2) {
      next.name = "Please enter your name.";
    }
    if (!isEmail(email.trim())) {
      next.email = "Please enter a valid email.";
    }
    if (message.trim().length < 10) {
      next.message = "Message should be at least 10 characters.";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    setErrors({});

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      const data = await response.json();
      if (!response.ok) {
        setErrors({ form: data?.error || "Submission failed." });
        setStatus("idle");
        return;
      }
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setErrors({ form: "Something went wrong. Please try again." });
      setStatus("idle");
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div>
        <label className="text-sm font-semibold text-ink">Name</label>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="mt-2 w-full rounded-2xl border border-line bg-mist px-4 py-3 text-ink outline-none focus:ring-2 focus:ring-accent"
          placeholder="Your name"
        />
        {errors.name ? (
          <p className="text-xs text-red-500 mt-2">{errors.name}</p>
        ) : null}
      </div>
      <div>
        <label className="text-sm font-semibold text-ink">Email</label>
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="mt-2 w-full rounded-2xl border border-line bg-mist px-4 py-3 text-ink outline-none focus:ring-2 focus:ring-accent"
          placeholder="you@email.com"
        />
        {errors.email ? (
          <p className="text-xs text-red-500 mt-2">{errors.email}</p>
        ) : null}
      </div>
      <div>
        <label className="text-sm font-semibold text-ink">Message</label>
        <textarea
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className="mt-2 w-full rounded-2xl border border-line bg-mist px-4 py-3 text-ink outline-none focus:ring-2 focus:ring-accent min-h-[140px]"
          placeholder="Tell me about your project..."
        />
        {errors.message ? (
          <p className="text-xs text-red-500 mt-2">{errors.message}</p>
        ) : null}
      </div>
      {errors.form ? (
        <p className="text-xs text-red-500">{errors.form}</p>
      ) : null}
      {status === "success" ? (
        <p className="text-sm text-emerald-600">Thanks! Your message was sent.</p>
      ) : null}
      <button type="submit" className="btn-primary" disabled={status === "loading"}>
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
