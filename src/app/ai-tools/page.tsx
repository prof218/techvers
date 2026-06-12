import React from "react";
import { aiTools } from "#site/content";
import { Metadata } from "next";
import { Sparkles } from "lucide-react";
import AIToolsHubClient from "./page-client";

export const metadata: Metadata = {
  title: "AI Tool Discovery Hub — Compare 100+ AI Tools | TechVerse",
  description:
    "Discover, search, and compare 100+ top artificial intelligence tools for coding, writing, design, video editing, automation, research, and productivity.",
};

export default function AIToolsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 sm:py-28 overflow-hidden border-b border-[var(--border)]">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--background-secondary)] to-[var(--background)]" />
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="absolute top-1/3 -right-20 w-72 h-72 bg-[#06b6d4]/10 rounded-full blur-[100px]" />

        <div className="relative container-wide text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/5 text-sm text-[var(--accent)] mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            {aiTools.length} AI Tools Catalogued
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="text-[var(--foreground)]">AI Tool </span>
            <span className="gradient-text-accent">Discovery</span>
          </h1>
          <p className="mt-4 text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto leading-relaxed">
            Discover, review, and compare the best artificial intelligence tools to optimize your development, design, and automation workflows.
          </p>
        </div>
      </section>

      {/* Directory Section */}
      <section className="section-padding">
        <div className="container-wide">
          <AIToolsHubClient allTools={aiTools} />
        </div>
      </section>
    </div>
  );
}
