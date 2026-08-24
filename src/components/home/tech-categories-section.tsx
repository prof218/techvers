"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { technologyCategories } from "@/lib/constants";
import { technologies } from "#site/content";
import { CategoryIcon } from "@/components/ui/category-icon";
import { TiltCard } from "@/components/ui/tilt-card";
import { Reveal } from "@/components/ui/reveal";

const countByCategory = technologies.reduce<Record<string, number>>((acc, t) => {
  acc[t.category] = (acc[t.category] || 0) + 1;
  return acc;
}, {});

export function TechCategoriesSection() {
  return (
    <section className="relative section-padding">
      <div className="container-wide">
        <Reveal className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--primary)] mb-3">
              Technology Hub
            </p>
            <h2 className="font-display text-4xl sm:text-5xl text-[var(--foreground)] text-balance">
              Ten disciplines,
              <br className="hidden sm:block" /> one place to go deep
            </h2>
          </div>
          <Link
            href="/technologies"
            className="flex items-center gap-2 text-sm font-medium text-[var(--foreground)] hover:text-[var(--primary)] transition-colors group"
          >
            View all technologies
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {technologyCategories.map((category, index) => {
            const count = countByCategory[category.slug] || 0;
            return (
              <Reveal key={category.slug} delay={(index % 5) * 0.06}>
                <Link href={`/technologies/${category.slug}`} className="block group">
                  <TiltCard className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-lg)] hover:border-[var(--border-hover)] overflow-hidden">
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ background: `radial-gradient(120% 120% at 0% 0%, ${category.color}14, transparent 60%)` }}
                    />
                    <div className="tilt-layer relative">
                      <div className="flex items-center justify-between mb-4">
                        <span
                          className="w-11 h-11 rounded-xl flex items-center justify-center"
                          style={{ backgroundColor: `${category.color}18`, color: category.color }}
                        >
                          <CategoryIcon slug={category.slug} className="w-[22px] h-[22px]" />
                        </span>
                        {count > 0 && (
                          <span className="text-xs font-medium text-[var(--foreground-subtle)]">
                            {count} {count === 1 ? "guide" : "guides"}
                          </span>
                        )}
                      </div>
                      <h3 className="text-[1.05rem] font-semibold text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-sm text-[var(--foreground-muted)] mt-1.5 line-clamp-2 leading-relaxed">
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
  );
}
