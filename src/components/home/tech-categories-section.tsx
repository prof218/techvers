"use client";

import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { technologyCategories } from "@/lib/constants";

export function TechCategoriesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative section-padding">
      <div className="container-wide">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4"
        >
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)]">
              Explore the{" "}
              <span className="gradient-text">Technology Hub</span>
            </h2>
            <p className="mt-3 text-[var(--foreground-muted)] text-lg max-w-xl">
              Deep-dive into 100+ technologies across 10 essential categories
            </p>
          </div>
          <Link
            href="/technologies"
            className="flex items-center gap-2 text-sm font-medium text-[var(--primary)] hover:text-[var(--primary-hover)] transition-colors group"
          >
            View all
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {technologyCategories.map((category, index) => (
            <motion.div
              key={category.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.05, duration: 0.4 }}
            >
              <Link
                href={`/technologies/${category.slug}`}
                className="group block p-5 rounded-2xl border border-[var(--border)] bg-[var(--surface)] hover:bg-[var(--surface-hover)] transition-all duration-300 card-hover relative overflow-hidden"
              >
                {/* Gradient hover effect */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${category.color}08, ${category.color}15)`,
                  }}
                />

                <div className="relative">
                  {/* Icon & Count */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl">{category.icon}</span>
                    <span
                      className="text-xs font-medium px-2 py-0.5 rounded-full"
                      style={{
                        backgroundColor: `${category.color}15`,
                        color: category.color,
                      }}
                    >
                      {category.count} topics
                    </span>
                  </div>

                  {/* Name */}
                  <h3 className="text-base font-semibold text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors">
                    {category.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[var(--foreground-muted)] mt-1 line-clamp-2">
                    {category.description}
                  </p>

                  {/* Arrow */}
                  <ArrowRight
                    className="w-4 h-4 mt-3 text-[var(--foreground-subtle)] group-hover:text-[var(--primary)] group-hover:translate-x-1 transition-all duration-200"
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
