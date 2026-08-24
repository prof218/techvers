"use client";

import React from "react";
import Link from "next/link";
import { TrendingUp, BookOpen, Award, Target } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { careerPaths } from "@/lib/constants";
import { CategoryIcon } from "@/components/ui/category-icon";
import { BookmarkButton } from "@/components/ui/bookmark-button";
import { Reveal } from "@/components/ui/reveal";

export default function CareersPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[var(--border)]">
        <div className="absolute inset-0 -z-10 grid-pattern" />
        <div className="absolute -top-24 -left-16 w-[26rem] h-[26rem] rounded-full bg-[var(--primary)]/8 blur-[120px] -z-10" />
        <div className="container-tight py-16 sm:py-24 text-center">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--primary)] mb-4">
              Career Center
            </p>
            <h1 className="font-display text-5xl sm:text-6xl text-[var(--foreground)] text-balance leading-[1.05]">
              Find the role that fits you
            </h1>
            <p className="mt-5 text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto text-pretty">
              Eleven in-demand tech careers with realistic salary ranges, the skills each one
              needs, and a roadmap to get there.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Grid */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {careerPaths.map((career, index) => (
              <Reveal key={career.slug} delay={(index % 3) * 0.06} className="relative group h-full">
                <Link
                  href={`/careers/${career.slug}`}
                  className="block h-full p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-sm)] card-hover"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-12 h-12 rounded-xl bg-[var(--secondary)] flex items-center justify-center text-[var(--primary)]">
                      <CategoryIcon slug={career.slug} className="w-6 h-6" />
                    </span>
                    <Badge variant={career.growth === "Very High" ? "success" : "info"} className="flex items-center gap-1 mr-10">
                      <TrendingUp className="w-3 h-3" />
                      {career.growth}
                    </Badge>
                  </div>
                  <h2 className="text-lg font-semibold text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors">
                    {career.title}
                  </h2>
                  <div className="mt-2 text-sm font-medium text-[var(--foreground-muted)]">
                    {career.salaryRange} <span className="text-xs text-[var(--foreground-subtle)]">/ year</span>
                  </div>
                  <div className="flex items-center gap-4 mt-4 pt-4 border-t border-[var(--border)] text-xs text-[var(--foreground-subtle)]">
                    <span className="flex items-center gap-1.5"><BookOpen className="w-3.5 h-3.5" /> Roadmap</span>
                    <span className="flex items-center gap-1.5"><Award className="w-3.5 h-3.5" /> Skills</span>
                    <span className="flex items-center gap-1.5"><Target className="w-3.5 h-3.5" /> Salary</span>
                  </div>
                </Link>
                <div className="absolute top-5 right-5">
                  <BookmarkButton item={{ type: "career", slug: career.slug, title: career.title, url: `/careers/${career.slug}` }} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
