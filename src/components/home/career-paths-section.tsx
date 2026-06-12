"use client";

import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import Link from "next/link";
import { ArrowRight, TrendingUp, DollarSign } from "lucide-react";
import { careerPaths } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";

export function CareerPathsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative section-padding">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)] via-[var(--background-secondary)] to-[var(--background)]" />

      <div className="relative container-wide">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4"
        >
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)]">
              Chart your{" "}
              <span className="gradient-text">career path</span>
            </h2>
            <p className="mt-3 text-[var(--foreground-muted)] text-lg max-w-xl">
              Explore 11 in-demand career paths with salary data, skills, and roadmaps
            </p>
          </div>
          <Link
            href="/careers"
            className="flex items-center gap-2 text-sm font-medium text-[var(--primary)] hover:text-[var(--primary-hover)] transition-colors group"
          >
            All career paths
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {careerPaths.slice(0, 8).map((career, index) => (
            <motion.div
              key={career.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.05, duration: 0.4 }}
            >
              <Link
                href={`/careers/${career.slug}`}
                className="group block p-5 rounded-2xl border border-[var(--border)] bg-[var(--surface)] hover:bg-[var(--surface-hover)] transition-all duration-300 card-hover"
              >
                {/* Icon & Growth */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl">{career.icon}</span>
                  <Badge
                    variant={career.growth === "Very High" ? "success" : "info"}
                    className="text-[10px] flex items-center gap-1"
                  >
                    <TrendingUp className="w-3 h-3" />
                    {career.growth}
                  </Badge>
                </div>

                {/* Title */}
                <h3 className="text-base font-semibold text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors">
                  {career.title}
                </h3>

                {/* Salary */}
                <div className="flex items-center gap-1.5 mt-2 text-sm text-[var(--foreground-muted)]">
                  <DollarSign className="w-3.5 h-3.5 text-[var(--success)]" />
                  {career.salaryRange}
                </div>

                {/* Arrow */}
                <div className="mt-3 flex items-center gap-1 text-xs text-[var(--primary)] opacity-0 group-hover:opacity-100 transition-opacity">
                  Explore path
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
