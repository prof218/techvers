"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Cookie, X } from "lucide-react";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem("cookie_consent");
      if (!consent) {
        // Show after a brief delay so page loads first
        const timer = setTimeout(() => setIsVisible(true), 1200);
        return () => clearTimeout(timer);
      }
    } catch {
      // localStorage disabled or SSR
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem("cookie_consent", "accepted");
    } catch {}
    setIsVisible(false);
  };

  const handleDecline = () => {
    try {
      localStorage.setItem("cookie_consent", "declined");
    } catch {}
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Cookie consent banner"
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-50 p-5 rounded-2xl border border-[var(--border)] bg-[var(--surface)]/95 backdrop-blur-md shadow-[var(--shadow-xl)] animate-in fade-in slide-in-from-bottom-5 duration-300"
    >
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-lg bg-[var(--primary)]/10 text-[var(--primary)] flex items-center justify-center shrink-0 mt-0.5">
          <Cookie className="w-4 h-4" />
        </div>
        <div className="flex-1 text-xs leading-relaxed text-[var(--foreground-muted)]">
          <p>
            We use cookies and third-party advertising (such as Google AdSense) to personalize content,
            analyze site traffic, and support our free learning platform. Learn more in our{" "}
            <Link href="/privacy" className="text-[var(--primary)] underline hover:opacity-80">
              Privacy Policy
            </Link>
            .
          </p>
          <div className="mt-3.5 flex items-center gap-2">
            <button
              onClick={handleAccept}
              type="button"
              className="px-3.5 py-1.5 rounded-lg bg-[var(--primary)] text-white text-xs font-medium hover:bg-[var(--primary-dark)] transition-colors cursor-pointer shadow-sm"
            >
              Accept All
            </button>
            <button
              onClick={handleDecline}
              type="button"
              className="px-3 py-1.5 rounded-lg border border-[var(--border)] text-[var(--foreground-muted)] text-xs font-medium hover:bg-[var(--surface-hover)] transition-colors cursor-pointer"
            >
              Essential Only
            </button>
          </div>
        </div>
        <button
          onClick={handleDecline}
          aria-label="Close cookie notice"
          className="text-[var(--foreground-subtle)] hover:text-[var(--foreground)] transition-colors p-1"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </aside>
  );
}
