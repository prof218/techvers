"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

export function CTASection() {
  return (
    <section className="relative section-padding">
      <div className="container-wide">
        <Reveal>
          <div className="relative rounded-[2rem] overflow-hidden bg-[var(--foreground)] px-8 py-14 sm:px-16 sm:py-20 text-center">
            {/* Decorative */}
            <div className="absolute inset-0 grid-pattern opacity-[0.15]" />
            <div className="absolute -top-24 -right-16 w-72 h-72 rounded-full bg-[var(--primary)]/40 blur-[110px]" />
            <div className="absolute -bottom-24 -left-16 w-72 h-72 rounded-full bg-[var(--accent)]/30 blur-[110px]" />

            <div className="relative">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--background)]/10 border border-[var(--background)]/20 text-sm text-[var(--background)]/90 mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                Start learning today
              </div>

              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[var(--background)] leading-[1.05] max-w-3xl mx-auto text-balance">
                Go deep on the tech that moves your career
              </h2>

              <p className="mt-5 text-lg text-[var(--background)]/70 max-w-xl mx-auto leading-relaxed text-pretty">
                Free to explore, no sign-up required. Pick a roadmap, follow a guide,
                and practice with real interview questions.
              </p>

              <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
                <Button size="xl" variant="gradient" asChild className="group rounded-full">
                  <Link href="/roadmaps">
                    Start a Roadmap
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="rounded-full border-[var(--background)]/25 text-[var(--background)] hover:bg-[var(--background)]/10 hover:border-[var(--background)]/40 hover:text-[var(--background)]"
                >
                  <Link href="/technologies">Browse Guides</Link>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
