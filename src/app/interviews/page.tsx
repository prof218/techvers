import React from "react";
import { interviews } from "#site/content";
import { Metadata } from "next";
import { MessageSquare } from "lucide-react";
import InterviewsHubClient from "./page-client";

export const metadata: Metadata = {
  title: "Interview Hub — Prepare with 500+ Questions | TechVerse",
  description:
    "Ace your next technical interview with 500+ questions across frontend, backend, system design, DevOps, AI, cybersecurity, and cloud. Detailed solutions included.",
};

export default function InterviewsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 sm:py-28 overflow-hidden border-b border-[var(--border)]">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--background-secondary)] to-[var(--background)]" />
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-[#f59e0b]/10 rounded-full blur-[100px]" />

        <div className="relative container-wide text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--warning)]/30 bg-[var(--warning)]/5 text-sm text-[var(--warning)] mb-6">
            <MessageSquare className="w-3.5 h-3.5" />
            {interviews.length} Questions Available
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="text-[var(--foreground)]">Interview </span>
            <span className="gradient-text">Hub</span>
          </h1>
          <p className="mt-4 text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto leading-relaxed">
            Practice with curated, high-quality interview questions. Filter by category or difficulty, check detailed explanations, and review core concepts.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="section-padding">
        <div className="container-wide max-w-4xl">
          <InterviewsHubClient allQuestions={interviews} />
        </div>
      </section>
    </div>
  );
}
