"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Compass, Sparkles, MessageSquare, Layers, BookOpen, Briefcase } from "lucide-react";
import { TiltCard } from "@/components/ui/tilt-card";
import { Reveal } from "@/components/ui/reveal";

const features = [
  {
    icon: BookOpen,
    title: "Technology Guides",
    description: "Practical, code-first guides across frontend, backend, cloud, AI, and more.",
    href: "/technologies",
    color: "#3a45f0",
  },
  {
    icon: Sparkles,
    title: "AI Tool Reviews",
    description: "Honest reviews with real pricing, pros, cons, and active alternatives.",
    href: "/ai-tools",
    color: "#e9603e",
  },
  {
    icon: Compass,
    title: "Learning Roadmaps",
    description: "Ordered, stage-by-stage paths that take you from zero to job-ready.",
    href: "/roadmaps",
    color: "#0f9d63",
  },
  {
    icon: MessageSquare,
    title: "Interview Prep",
    description: "Worked answers to real questions, filterable by topic and difficulty.",
    href: "/interviews",
    color: "#5b4fe9",
  },
  {
    icon: Layers,
    title: "Project Case Studies",
    description: "System-design breakdowns of real products — architecture and trade-offs.",
    href: "/projects",
    color: "#c2790b",
  },
  {
    icon: Briefcase,
    title: "Career Paths",
    description: "Roles, realistic salary ranges, and the skills each one actually needs.",
    href: "/careers",
    color: "#2f6df0",
  },
];

export function FeaturesSection() {
  return (
    <section className="relative section-padding bg-[var(--background-secondary)] border-y border-[var(--border)]">
      <div className="container-wide">
        <Reveal className="max-w-2xl mb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--primary)] mb-3">
            Everything in one place
          </p>
          <h2 className="font-display text-4xl sm:text-5xl text-[var(--foreground)] text-balance">
            More than a knowledge base
          </h2>
          <p className="mt-4 text-lg text-[var(--foreground-muted)] text-pretty">
            Six connected ways to learn — each one written to be genuinely useful, not padded.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, index) => (
            <Reveal key={feature.title} delay={(index % 3) * 0.08}>
              <Link href={feature.href} className="block group h-full">
                <TiltCard
                  max={6}
                  className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-lg)] hover:border-[var(--border-hover)] overflow-hidden"
                >
                  <div
                    className="absolute -top-16 -right-16 w-40 h-40 rounded-full blur-[70px] opacity-0 group-hover:opacity-25 transition-opacity duration-500"
                    style={{ backgroundColor: feature.color }}
                  />
                  <div className="tilt-layer relative">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                      style={{ backgroundColor: `${feature.color}16`, color: feature.color }}
                    >
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-[var(--foreground-muted)] mt-2 leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="mt-5 flex items-center gap-1 text-sm font-medium text-[var(--primary)]">
                      Explore
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </TiltCard>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
