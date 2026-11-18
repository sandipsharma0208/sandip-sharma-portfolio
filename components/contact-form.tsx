"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, LoaderCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { contactSchema } from "@/lib/contact-schema";
import type { z } from "zod";

type ContactValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [status, setStatus] = useState<{ kind: "idle" | "success" | "error"; message: string }>({ kind: "idle", message: "" });
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ContactValues>({ resolver: zodResolver(contactSchema) });

  async function onSubmit(values: ContactValues) {
    setStatus({ kind: "idle", message: "Sending your message…" });
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const result = await response.json() as { message?: string };
      if (!response.ok) throw new Error(result.message || "Your message could not be sent. Please try again later.");
      setStatus({ kind: "success", message: "Your message was sent. Thank you for reaching out." });
      reset();
    } catch (error) {
      setStatus({ kind: "error", message: error instanceof Error ? error.message : "Unable to send your message right now." });
    }
  }

  return (
    <form className="contact-form grid grid-cols-1 gap-4 xs:grid-cols-2" onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="form-field">
        <label htmlFor="contact-name">Name</label>
        <input className="form-control" id="contact-name" autoComplete="name" placeholder="Your name" aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined} {...register("name")} />
        {errors.name && <span className="field-error" id="name-error">{errors.name.message}</span>}
      </div>
      <div className="form-field">
        <label htmlFor="contact-email">Email</label>
        <input className="form-control" id="contact-email" type="email" autoComplete="email" placeholder="you@example.com" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} {...register("email")} />
        {errors.email && <span className="field-error" id="email-error">{errors.email.message}</span>}
      </div>
      <div className="form-field form-field-wide">
        <label htmlFor="contact-subject">Subject</label>
        <input className="form-control" id="contact-subject" placeholder="What would you like to discuss?" aria-invalid={Boolean(errors.subject)} aria-describedby={errors.subject ? "subject-error" : undefined} {...register("subject")} />
        {errors.subject && <span className="field-error" id="subject-error">{errors.subject.message}</span>}
      </div>
      <div className="form-field form-field-wide">
        <label htmlFor="contact-message">Message</label>
        <textarea className="form-control" id="contact-message" placeholder="A few details about your project or opportunity…" aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "message-error" : undefined} {...register("message")} />
        {errors.message && <span className="field-error" id="message-error">{errors.message.message}</span>}
      </div>
      <div className="form-footer flex flex-col items-start justify-between gap-3 xs:flex-row xs:items-center xs:gap-4">
        <p className="form-status" data-state={status.kind} role="status" aria-live="polite">{status.message}</p>
        <button className="button-primary" type="submit" disabled={isSubmitting}>
          {isSubmitting ? <><LoaderCircle size={16} className="animate-spin" aria-hidden="true" /> Sending</> : <>Send message <ArrowRight size={16} aria-hidden="true" /></>}
        </button>
      </div>
    </form>
  );
}