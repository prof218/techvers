"use client";

import React, { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/constants";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`TechVerse contact from ${name || "a visitor"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );
    // No backend required: open the visitor's mail client pre-filled.
    window.location.href = `mailto:${siteConfig.contactEmail}?subject=${subject}&body=${body}`;
  };

  const inputClass =
    "w-full h-11 px-4 rounded-lg bg-[var(--background)] border border-[var(--border)] text-sm text-[var(--foreground)] placeholder:text-[var(--foreground-subtle)] focus:outline-none focus:ring-2 focus:ring-[var(--ring)]";

  return (
    <form onSubmit={handleSubmit} className="space-y-4 not-prose">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label htmlFor="name" className="text-sm font-medium text-[var(--foreground)]">
            Name
          </label>
          <input
            id="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className={inputClass}
          />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="email" className="text-sm font-medium text-[var(--foreground)]">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className={inputClass}
          />
        </div>
      </div>
      <div className="space-y-1.5">
        <label htmlFor="message" className="text-sm font-medium text-[var(--foreground)]">
          Message
        </label>
        <textarea
          id="message"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="How can we help?"
          rows={6}
          className="w-full px-4 py-3 rounded-lg bg-[var(--background)] border border-[var(--border)] text-sm text-[var(--foreground)] placeholder:text-[var(--foreground-subtle)] focus:outline-none focus:ring-2 focus:ring-[var(--ring)] resize-y"
        />
      </div>
      <Button type="submit" variant="gradient" className="gap-2">
        <Send className="w-4 h-4" />
        Send Message
      </Button>
      <p className="text-xs text-[var(--foreground-subtle)]">
        This opens your email app pre-filled. Prefer email? Write to{" "}
        <a href={`mailto:${siteConfig.contactEmail}`} className="text-[var(--primary)]">
          {siteConfig.contactEmail}
        </a>
        .
      </p>
    </form>
  );
}
