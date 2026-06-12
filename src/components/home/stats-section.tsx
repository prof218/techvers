"use client";

import React from "react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import {
  Code2,
  Bot,
  Map,
  Building2,
  HelpCircle,
  TrendingUp,
} from "lucide-react";

const stats = [
  {
    icon: Code2,
    value: 100,
    suffix: "+",
    label: "Technologies",
    description: "In-depth guides across 10 categories",
    color: "#6366f1",
  },
  {
    icon: Bot,
    value: 100,
    suffix: "+",
    label: "AI Tools",
    description: "Searchable directory with reviews",
    color: "#06b6d4",
  },
  {
    icon: Map,
    value: 50,
    suffix: "+",
    label: "Roadmaps",
    description: "Interactive learning paths",
    color: "#8b5cf6",
  },
  {
    icon: Building2,
    value: 50,
    suffix: "+",
    label: "Case Studies",
    description: "Real-world project architectures",
    color: "#22c55e",
  },
  {
    icon: HelpCircle,
    value: 500,
    suffix: "+",
    label: "Questions",
    description: "Interview prep with answers",
    color: "#f59e0b",
  },
  {
    icon: TrendingUp,
    value: 11,
    suffix: "",
    label: "Career Paths",
    description: "With salary data & roadmaps",
    color: "#ec4899",
  },
];

export function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative section-padding overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)] via-[var(--background-secondary)] to-[var(--background)]" />

      <div className="relative container-wide">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)]">
            Everything you need to{" "}
            <span className="gradient-text">level up</span>
          </h2>
          <p className="mt-3 text-[var(--foreground-muted)] text-lg max-w-2xl mx-auto">
            A comprehensive ecosystem designed for modern tech professionals
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="group relative p-5 rounded-2xl border border-[var(--border)] bg-[var(--surface)] hover:bg-[var(--surface-hover)] hover:border-[var(--border-hover)] transition-all duration-300 card-hover text-center"
            >
              {/* Icon */}
              <div
                className="w-10 h-10 rounded-xl mx-auto flex items-center justify-center mb-3 transition-transform group-hover:scale-110 duration-300"
                style={{
                  backgroundColor: `${stat.color}15`,
                  color: stat.color,
                }}
              >
                <stat.icon className="w-5 h-5" />
              </div>

              {/* Counter */}
              <div className="text-2xl font-bold text-[var(--foreground)]">
                <AnimatedCounter
                  end={stat.value}
                  suffix={stat.suffix}
                  duration={2}
                />
              </div>

              {/* Label */}
              <div className="text-sm font-medium text-[var(--foreground)] mt-1">
                {stat.label}
              </div>

              {/* Description */}
              <div className="text-xs text-[var(--foreground-subtle)] mt-1 leading-relaxed">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
