import React from "react";
import { aiTools } from "#site/content";
import type { Metadata } from "next";
import { Sparkles } from "lucide-react";
import { siteConfig } from "@/lib/constants";
import AIToolsHubClient from "./page-client";

export const metadata: Metadata = {
  title: "AI Tools Directory — Reviews, Pricing & Alternatives",
  description:
    "Honest reviews of the best AI tools for coding, writing, design, video, automation, research, and productivity — with real pricing, pros, cons, and active alternatives.",
  alternates: { canonical: `${siteConfig.url}/ai-tools` },
};

export default function AIToolsPage() {
  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden border-b border-[var(--border)]">
        <div className="absolute inset-0 -z-10 grid-pattern" />
        <div className="absolute -top-20 -right-16 w-[26rem] h-[26rem] rounded-full bg-[var(--accent)]/10 blur-[120px] -z-10" />
        <div className="container-tight py-16 sm:py-24 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--border)] bg-[var(--surface)] text-sm text-[var(--foreground-muted)] shadow-[var(--shadow-sm)] mb-5">
            <Sparkles className="w-3.5 h-3.5 text-[var(--accent)]" />
            {aiTools.length} tools reviewed
          </div>
          <h1 className="font-display text-5xl sm:text-6xl text-[var(--foreground)] text-balance leading-[1.05]">
            The AI tools worth your time
          </h1>
          <p className="mt-5 text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto leading-relaxed text-pretty">
            Hands-on reviews with real pricing, genuine pros and cons, and currently-active
            alternatives — across coding, writing, design, video, automation, and more.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <AIToolsHubClient allTools={aiTools} />
        </div>
      </section>
    </div>
  );
}
