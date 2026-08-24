"use client";

import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const difficultyColors = { beginner: "#22c55e", intermediate: "#f59e0b", advanced: "#ef4444" };

export interface TechCard {
  slug: string;
  title: string;
  icon?: string;
  description: string;
  difficulty: string;
  tags: string[];
}

export function CategoryGrid({ category, technologies }: { category: string; technologies: TechCard[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  if (technologies.length === 0) {
    return (
      <p className="text-[var(--foreground-muted)]">
        Guides for this category are being written. Check back soon.
      </p>
    );
  }

  return (
    <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {technologies.map((tech, index) => (
        <motion.div
          key={tech.slug}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: index * 0.05, duration: 0.3 }}
        >
          <Link
            href={`/technologies/${category}/${tech.slug}`}
            className="group block p-5 rounded-2xl border border-[var(--border)] bg-[var(--surface)] hover:bg-[var(--surface-hover)] transition-all duration-300 card-hover h-full"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="w-11 h-11 rounded-xl bg-[var(--secondary)] flex items-center justify-center text-base font-bold text-[var(--primary)]">
                {tech.title[0]}
              </span>
              <Badge
                className="text-[10px] capitalize"
                style={{
                  backgroundColor: `${difficultyColors[tech.difficulty as keyof typeof difficultyColors]}15`,
                  color: difficultyColors[tech.difficulty as keyof typeof difficultyColors],
                  borderColor: "transparent",
                }}
              >
                {tech.difficulty}
              </Badge>
            </div>

            <h3 className="text-base font-semibold text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors">
              {tech.title}
            </h3>

            <p className="text-sm text-[var(--foreground-muted)] mt-1.5 line-clamp-2 leading-relaxed">
              {tech.description}
            </p>

            <div className="flex flex-wrap gap-1 mt-3">
              {tech.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded-md bg-[var(--background)] text-[10px] text-[var(--foreground-subtle)] border border-[var(--border)]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-3 flex items-center gap-1 text-xs text-[var(--primary)] font-medium opacity-0 group-hover:opacity-100 transition-opacity">
              Learn more
              <ArrowRight className="w-3 h-3" />
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
