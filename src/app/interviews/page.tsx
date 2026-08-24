import React from "react";
import { interviews } from "#site/content";
import type { Metadata } from "next";
import { MessageSquare } from "lucide-react";
import { siteConfig } from "@/lib/constants";
import InterviewsHubClient from "./page-client";

export const metadata: Metadata = {
  title: "Interview Questions — Worked Answers by Topic",
  description:
    "Practice real technical interview questions across frontend, backend, system design, DevOps, AI, cybersecurity, and cloud — each with a detailed, worked answer.",
  alternates: { canonical: `${siteConfig.url}/interviews` },
};

export default function InterviewsPage() {
  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden border-b border-[var(--border)]">
        <div className="absolute inset-0 -z-10 grid-pattern" />
        <div className="absolute -top-20 right-0 w-[26rem] h-[26rem] rounded-full bg-[var(--primary)]/8 blur-[120px] -z-10" />
        <div className="container-tight py-16 sm:py-24 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--border)] bg-[var(--surface)] text-sm text-[var(--foreground-muted)] shadow-[var(--shadow-sm)] mt-4 mb-1">
            <MessageSquare className="w-3.5 h-3.5 text-[var(--primary)]" />
            {interviews.length} questions with answers
          </div>
          <h1 className="font-display text-5xl sm:text-6xl text-[var(--foreground)] text-balance leading-[1.05]">
            Interview prep that sticks
          </h1>
          <p className="mt-5 text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto leading-relaxed text-pretty">
            Filter by topic and difficulty, reveal worked answers, and mark questions as known
            to track exactly what&apos;s left to review.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide max-w-4xl">
          <InterviewsHubClient allQuestions={interviews} />
        </div>
      </section>
    </div>
  );
}
