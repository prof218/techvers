import React from "react";
import Link from "next/link";
import { Compass, MessageSquare, Hammer, Briefcase, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

const steps = [
  {
    icon: Compass,
    step: "01",
    title: "Learn",
    description: "Follow interactive roadmaps and in-depth guides — from fundamentals to AI engineering.",
    href: "/roadmaps",
    cta: "Start a roadmap",
    color: "#3a45f0",
  },
  {
    icon: MessageSquare,
    step: "02",
    title: "Practice",
    description: "Sharpen up with real interview questions and worked answers, filtered by topic.",
    href: "/interviews",
    cta: "Practice interviews",
    color: "#5b4fe9",
  },
  {
    icon: Hammer,
    step: "03",
    title: "Build",
    description: "Study real project architectures and build a portfolio that proves you're ready.",
    href: "/projects",
    cta: "Explore projects",
    color: "#0f9d63",
  },
  {
    icon: Briefcase,
    step: "04",
    title: "Get hired",
    description: "Apply to curated, source-verified AI training & evaluation jobs — remote-friendly.",
    href: "/ai-training-jobs",
    cta: "Browse AI jobs",
    color: "#e9603e",
  },
];

export function PathSection() {
  return (
    <section className="relative section-padding">
      <div className="container-wide">
        <Reveal className="max-w-2xl mb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--primary)] mb-3">
            Your path
          </p>
          <h2 className="font-display text-4xl sm:text-5xl text-[var(--foreground)] text-balance">
            From zero to hired, in one place
          </h2>
          <p className="mt-4 text-lg text-[var(--foreground-muted)] text-pretty">
            Built for AI engineers and freshers — a clear, practical path from your first
            line of code to a paid role. No guesswork.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((s, index) => (
            <Reveal key={s.step} delay={(index % 4) * 0.08}>
              <div className="relative h-full">
                <Link
                  href={s.href}
                  className="flex flex-col h-full p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-sm)] card-hover group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${s.color}16`, color: s.color }}
                    >
                      <s.icon className="w-6 h-6" />
                    </span>
                    <span className="font-display text-3xl text-[var(--border-hover)] group-hover:text-[var(--primary)]/40 transition-colors">
                      {s.step}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-sm text-[var(--foreground-muted)] mt-2 leading-relaxed flex-1">
                    {s.description}
                  </p>
                  <div className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-[var(--primary)]">
                    {s.cta}
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
                {/* connector arrow (desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-3 z-10 -translate-y-1/2 w-6 h-6 rounded-full bg-[var(--background)] border border-[var(--border)] items-center justify-center">
                    <ArrowRight className="w-3 h-3 text-[var(--foreground-subtle)]" />
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
