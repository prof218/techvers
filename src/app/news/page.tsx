"use client";

import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Sparkles, Newspaper, Clock, ArrowRight, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const sampleNews = [
  { slug: "gpt-5-announcement", title: "GPT-5 Announced: What Developers Need to Know", category: "AI", date: "2026-06-10", summary: "OpenAI announces GPT-5 with significant improvements in reasoning, code generation, and multimodal understanding. Here's what it means for developers.", source: "OpenAI Blog" },
  { slug: "react-20-release", title: "React 20 Released with Built-in Server Components", category: "Frameworks", date: "2026-06-09", summary: "React 20 officially launches with native server components, improved streaming, and a new compiler that eliminates the need for useMemo and useCallback.", source: "React Blog" },
  { slug: "aws-new-regions", title: "AWS Expands with 3 New Regions in Asia Pacific", category: "Cloud", date: "2026-06-08", summary: "Amazon Web Services announces new regions in India, Thailand, and New Zealand to meet growing demand for low-latency cloud services.", source: "AWS News" },
  { slug: "supply-chain-attack", title: "Major NPM Supply Chain Attack Affects 1000+ Packages", category: "Security", date: "2026-06-07", summary: "Security researchers discover a sophisticated supply chain attack targeting popular NPM packages. Here's how to check if you're affected.", source: "GitHub Security" },
  { slug: "k8s-2-0", title: "Kubernetes 2.0 Preview: Simplified Container Orchestration", category: "Cloud", date: "2026-06-06", summary: "The Kubernetes project unveils a preview of 2.0 with dramatically simplified configuration, native GPU support, and built-in service mesh.", source: "CNCF Blog" },
  { slug: "github-spark", title: "GitHub Launches AI-Powered Micro App Builder", category: "AI", date: "2026-06-05", summary: "GitHub introduces Spark, allowing developers to build and deploy micro-applications using natural language descriptions and AI-assisted coding.", source: "GitHub Blog" },
];

const categoryColors: Record<string, string> = {
  AI: "#ec4899",
  Frameworks: "#6366f1",
  Cloud: "#06b6d4",
  Security: "#ef4444",
  Startups: "#f59e0b",
};

export default function NewsPage() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--background-secondary)] to-[var(--background)]" />
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="absolute top-1/3 right-0 w-72 h-72 bg-[#ec4899]/10 rounded-full blur-[100px]" />

        <div className="relative container-wide text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#ec4899]/30 bg-[#ec4899]/5 text-sm text-[#ec4899] mb-6">
              <Newspaper className="w-3.5 h-3.5" />
              Tech News
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="text-[var(--foreground)]">News & </span>
              <span className="gradient-text">Trends</span>
            </h1>
            <p className="mt-4 text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto">
              Stay current with AI releases, framework updates, cloud announcements, security alerts, and startup launches.
            </p>
          </motion.div>
        </div>
      </section>

      {/* News Feed */}
      <section ref={ref} className="section-padding">
        <div className="container-wide max-w-3xl">
          <div className="space-y-4">
            {sampleNews.map((news, index) => (
              <motion.article
                key={news.slug}
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.08, duration: 0.4 }}
                className="group p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] hover:bg-[var(--surface-hover)] hover:border-[var(--border-hover)] transition-all duration-300 card-hover"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Badge
                    className="text-[10px]"
                    style={{
                      backgroundColor: `${categoryColors[news.category] || "#6366f1"}15`,
                      color: categoryColors[news.category] || "#6366f1",
                      borderColor: "transparent",
                    }}
                  >
                    {news.category}
                  </Badge>
                  <div className="flex items-center gap-1 text-xs text-[var(--foreground-subtle)]">
                    <Clock className="w-3 h-3" />
                    {new Date(news.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                  </div>
                </div>

                <h2 className="text-lg font-semibold text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors leading-snug">
                  {news.title}
                </h2>

                <p className="text-sm text-[var(--foreground-muted)] mt-2 leading-relaxed">
                  {news.summary}
                </p>

                <div className="flex items-center justify-between mt-4 pt-3 border-t border-[var(--border)]">
                  <span className="text-xs text-[var(--foreground-subtle)] flex items-center gap-1">
                    <ExternalLink className="w-3 h-3" />
                    {news.source}
                  </span>
                  <span className="text-xs text-[var(--primary)] font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    Read more
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
