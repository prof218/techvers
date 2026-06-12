"use client";

import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import Link from "next/link";
import { ArrowRight, Search, Sparkles } from "lucide-react";
import { technologyCategories } from "@/lib/constants";

export function TechnologiesPageClient() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--background-secondary)] to-[var(--background)]" />
        <div className="absolute inset-0 grid-pattern opacity-40" />

        {/* Orbs */}
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-[#6366f1]/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#8b5cf6]/10 rounded-full blur-[100px]" />

        <div className="relative container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--primary)]/30 bg-[var(--primary)]/5 text-sm text-[var(--primary)] mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              100+ Technologies
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="text-[var(--foreground)]">Technology </span>
              <span className="gradient-text">Hub</span>
            </h1>
            <p className="mt-4 text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto">
              Explore comprehensive guides across 10 essential categories.
              From frontend frameworks to AI systems — everything you need to master modern tech.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories Grid */}
      <section ref={ref} className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {technologyCategories.map((category, index) => (
              <motion.div
                key={category.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.05, duration: 0.4 }}
              >
                <Link
                  href={`/technologies/${category.slug}`}
                  className="group block p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] hover:bg-[var(--surface-hover)] transition-all duration-300 card-hover h-full relative overflow-hidden"
                >
                  {/* Gradient hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(135deg, ${category.color}08, ${category.color}18)`,
                    }}
                  />

                  <div className="relative">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl">{category.icon}</span>
                      <span
                        className="text-xs font-medium px-2.5 py-1 rounded-full"
                        style={{
                          backgroundColor: `${category.color}15`,
                          color: category.color,
                        }}
                      >
                        {category.count} topics
                      </span>
                    </div>

                    <h2 className="text-lg font-bold text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors">
                      {category.name}
                    </h2>

                    <p className="text-sm text-[var(--foreground-muted)] mt-2 leading-relaxed">
                      {category.description}
                    </p>

                    <div className="mt-4 flex items-center gap-1.5 text-sm text-[var(--primary)] font-medium">
                      Explore category
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
