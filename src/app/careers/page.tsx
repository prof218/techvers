"use client";

import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import Link from "next/link";
import { ArrowRight, DollarSign, TrendingUp, Sparkles, BookOpen, Award, Target } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { careerPaths } from "@/lib/constants";

export default function CareersPage() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--background-secondary)] to-[var(--background)]" />
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-[#22c55e]/10 rounded-full blur-[100px]" />

        <div className="relative container-wide text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--success)]/30 bg-[var(--success)]/5 text-sm text-[var(--success)] mb-6">
              <Target className="w-3.5 h-3.5" />
              11 Career Paths
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="text-[var(--foreground)]">Career </span>
              <span className="gradient-text">Center</span>
            </h1>
            <p className="mt-4 text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto">
              Explore in-demand tech career paths with salary data, skill requirements, certifications, and personalized learning roadmaps.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Career Paths Grid */}
      <section ref={ref} className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {careerPaths.map((career, index) => (
              <motion.div
                key={career.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.05, duration: 0.4 }}
              >
                <Link
                  href={`/careers/${career.slug}`}
                  className="group block p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] hover:bg-[var(--surface-hover)] transition-all duration-300 card-hover h-full"
                >
                  {/* Icon & Growth badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl">{career.icon}</span>
                    <Badge
                      variant={career.growth === "Very High" ? "success" : "info"}
                      className="flex items-center gap-1"
                    >
                      <TrendingUp className="w-3 h-3" />
                      {career.growth} Growth
                    </Badge>
                  </div>

                  {/* Title */}
                  <h2 className="text-lg font-bold text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors">
                    {career.title}
                  </h2>

                  {/* Salary */}
                  <div className="flex items-center gap-1.5 mt-3 text-sm text-[var(--foreground-muted)]">
                    <DollarSign className="w-4 h-4 text-[var(--success)]" />
                    <span className="font-medium">{career.salaryRange}</span>
                    <span className="text-xs text-[var(--foreground-subtle)]">/year</span>
                  </div>

                  {/* Quick stats */}
                  <div className="flex items-center gap-4 mt-4 pt-4 border-t border-[var(--border)]">
                    <div className="flex items-center gap-1.5 text-xs text-[var(--foreground-subtle)]">
                      <BookOpen className="w-3.5 h-3.5" />
                      Roadmap
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-[var(--foreground-subtle)]">
                      <Award className="w-3.5 h-3.5" />
                      Certifications
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-[var(--foreground-subtle)]">
                      <Target className="w-3.5 h-3.5" />
                      Skills
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="mt-4 flex items-center gap-1 text-sm text-[var(--primary)] font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Explore career path
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
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
