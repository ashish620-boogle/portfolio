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
    <form onSubmit={onSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="sr-only">Name</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="w-full rounded-lg border border-line bg-canvas px-4 py-3 text-ink outline-none focus:ring-2 focus:ring-accent"
          placeholder="Name"
        />
        {errors.name && <p className="text-xs text-red-500 mt-2">{errors.name}</p>}
      </div>
      <div>
        <label htmlFor="email" className="sr-only">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="w-full rounded-lg border border-line bg-canvas px-4 py-3 text-ink outline-none focus:ring-2 focus:ring-accent"
          placeholder="Email"
        />
        {errors.email && <p className="text-xs text-red-500 mt-2">{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="message" className="sr-only">Message</label>
        <textarea
          id="message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className="w-full rounded-lg border border-line bg-canvas px-4 py-3 text-ink outline-none focus:ring-2 focus:ring-accent min-h-[160px]"
          placeholder="Message"
        />
        {errors.message && <p className="text-xs text-red-500 mt-2">{errors.message}</p>}
      </div>
      {errors.form && <p className="text-xs text-red-500">{errors.form}</p>}
      {status === "success" && (
        <p className="text-sm text-emerald-600">Thanks! Your message was sent.</p>
      )}
      <button type="submit" className="btn-primary w-full" disabled={status === "loading"}>
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}

