"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { Eye, FileText, GitBranch, BarChart3, BookOpen, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const visualTypes = [
  { slug: "all", label: "All", icon: Eye },
  { slug: "infographics", label: "Infographics", icon: BarChart3 },
  { slug: "comparisons", label: "Comparisons", icon: GitBranch },
  { slug: "cheat-sheets", label: "Cheat Sheets", icon: FileText },
  { slug: "mind-maps", label: "Mind Maps", icon: GitBranch },
  { slug: "architecture", label: "Architecture", icon: BookOpen },
];

const sampleVisuals = [
  { slug: "react-vs-vue", title: "React vs Vue.js — Complete Comparison", type: "comparisons", color: "#6366f1", description: "Side-by-side comparison of React and Vue.js covering performance, ecosystem, learning curve, and use cases" },
  { slug: "git-cheatsheet", title: "Git Commands Cheat Sheet", type: "cheat-sheets", color: "#22c55e", description: "Essential Git commands organized by workflow: init, branch, merge, rebase, stash, and more" },
  { slug: "system-design-infographic", title: "System Design Fundamentals", type: "infographics", color: "#f59e0b", description: "Visual guide to load balancers, caching, databases, message queues, and CDNs" },
  { slug: "ml-algorithms-mindmap", title: "ML Algorithms Mind Map", type: "mind-maps", color: "#ec4899", description: "Comprehensive mind map of supervised, unsupervised, and reinforcement learning algorithms" },
  { slug: "microservices-architecture", title: "Microservices Architecture Patterns", type: "architecture", color: "#06b6d4", description: "Visual breakdown of API gateway, service mesh, event-driven, and saga patterns" },
  { slug: "sql-vs-nosql", title: "SQL vs NoSQL — When to Use What", type: "comparisons", color: "#8b5cf6", description: "Decision framework for choosing between SQL and NoSQL databases based on your use case" },
  { slug: "docker-cheatsheet", title: "Docker Commands Cheat Sheet", type: "cheat-sheets", color: "#3b82f6", description: "Build, run, manage, and debug containers with this comprehensive Docker reference" },
  { slug: "aws-services-infographic", title: "AWS Services Overview", type: "infographics", color: "#f97316", description: "Visual guide to 50+ AWS services organized by category: compute, storage, networking, and AI" },
  { slug: "devops-pipeline", title: "CI/CD Pipeline Architecture", type: "architecture", color: "#14b8a6", description: "End-to-end DevOps pipeline from code commit to production deployment" },
];

export default function LearnPage() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [activeType, setActiveType] = useState("all");

  const filtered = sampleVisuals.filter(
    (v) => activeType === "all" || v.type === activeType
  );

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--background-secondary)] to-[var(--background)]" />
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-[#a855f7]/10 rounded-full blur-[100px]" />

        <div className="relative container-wide text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#a855f7]/30 bg-[#a855f7]/5 text-sm text-[#a855f7] mb-6">
              <Eye className="w-3.5 h-3.5" />
              Visual Learning
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="text-[var(--foreground)]">Visual </span>
              <span className="gradient-text">Learning Center</span>
            </h1>
            <p className="mt-4 text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto">
              Learn through infographics, comparison charts, cheat sheets, mind maps, and architecture diagrams.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Type Filters & Grid */}
      <section ref={ref} className="section-padding">
        <div className="container-wide">
          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="flex flex-wrap gap-2 mb-8"
          >
            {visualTypes.map((type) => (
              <button
                key={type.slug}
                onClick={() => setActiveType(type.slug)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                  activeType === type.slug
                    ? "bg-[var(--primary)] text-white"
                    : "bg-[var(--surface)] text-[var(--foreground-muted)] hover:bg-[var(--surface-hover)] border border-[var(--border)]"
                }`}
              >
                <type.icon className="w-3.5 h-3.5" />
                {type.label}
              </button>
            ))}
          </motion.div>

          {/* Masonry-like grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {filtered.map((visual, index) => (
              <motion.div
                key={visual.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className="break-inside-avoid"
              >
                <div className="group p-5 rounded-2xl border border-[var(--border)] bg-[var(--surface)] hover:bg-[var(--surface-hover)] transition-all duration-300 card-hover cursor-pointer">
                  {/* Color bar preview */}
                  <div
                    className="w-full h-32 rounded-xl mb-4 flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${visual.color}20, ${visual.color}10)`,
                      borderColor: `${visual.color}30`,
                    }}
                  >
                    <span className="text-4xl opacity-40">
                      {visual.type === "comparisons" ? "⚖️" :
                       visual.type === "cheat-sheets" ? "📋" :
                       visual.type === "infographics" ? "📊" :
                       visual.type === "mind-maps" ? "🧠" : "🏗️"}
                    </span>
                  </div>

                  <Badge
                    className="text-[10px] capitalize mb-2"
                    style={{
                      backgroundColor: `${visual.color}15`,
                      color: visual.color,
                      borderColor: "transparent",
                    }}
                  >
                    {visual.type.replace("-", " ")}
                  </Badge>

                  <h3 className="text-base font-semibold text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors">
                    {visual.title}
                  </h3>

                  <p className="text-sm text-[var(--foreground-muted)] mt-1 leading-relaxed">
                    {visual.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
