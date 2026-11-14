"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { technologyCategories } from "@/lib/constants";
import { technologies } from "#site/content";
import { CategoryIcon } from "@/components/ui/category-icon";
import { TiltCard } from "@/components/ui/tilt-card";
import { Reveal } from "@/components/ui/reveal";

const countByCategory = technologies.reduce<Record<string, number>>((acc, t) => {
  acc[t.category] = (acc[t.category] || 0) + 1;
  return acc;
}, {});

export function TechnologiesPageClient() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[var(--border)]">
        <div className="absolute inset-0 -z-10 grid-pattern" />
        <div className="absolute -top-24 right-0 w-[28rem] h-[28rem] rounded-full bg-[var(--primary)]/8 blur-[120px] -z-10" />
        <div className="container-tight hero-padding text-center">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--primary)] mb-4">
              Technology Hub
            </p>
            <h1 className="font-display text-4xl sm:text-6xl text-[var(--foreground)] text-balance leading-[1.05]">
              Go deep on the tools you build with
            </h1>
            <p className="mt-5 text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto text-pretty">
              Practical, code-first guides across ten disciplines — from frontend frameworks
              to AI systems. Pick a category and start learning.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {technologyCategories.map((category, index) => {
              const count = countByCategory[category.slug] || 0;
              return (
                <Reveal key={category.slug} delay={(index % 5) * 0.06}>
                  <Link href={`/technologies/${category.slug}`} className="block group h-full">
                    <TiltCard className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-lg)] hover:border-[var(--border-hover)] overflow-hidden">
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{ background: `radial-gradient(120% 120% at 0% 0%, ${category.color}14, transparent 60%)` }}
                      />
                      <div className="tilt-layer relative">
                        <div className="flex items-center justify-between mb-4">
                          <span
                            className="w-12 h-12 rounded-xl flex items-center justify-center"
                            style={{ backgroundColor: `${category.color}18`, color: category.color }}
                          >
                            <CategoryIcon slug={category.slug} className="w-6 h-6" />
                          </span>
                          {count > 0 && (
                            <span className="text-xs font-medium text-[var(--foreground-subtle)]">
                              {count} {count === 1 ? "guide" : "guides"}
                            </span>
                          )}
                        </div>
                        <h2 className="text-lg font-semibold text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors">
                          {category.name}
                        </h2>
                        <p className="text-sm text-[var(--foreground-muted)] mt-2 leading-relaxed line-clamp-2">
                          {category.description}
                        </p>
                        <ArrowUpRight className="w-4 h-4 mt-4 text-[var(--foreground-subtle)] group-hover:text-[var(--primary)] transition-colors" />
                      </div>
                    </TiltCard>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
