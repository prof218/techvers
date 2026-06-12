"use client";

import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import Link from "next/link";
import {
  ArrowRight,
  Compass,
  BookOpen,
  Brain,
  MessageSquare,
  Layers,
  Eye,
  Newspaper,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Compass,
    title: "Interactive Roadmaps",
    description:
      "Node-based visual learning paths for beginner to advanced levels",
    href: "/roadmaps",
    color: "#6366f1",
  },
  {
    icon: Brain,
    title: "AI Tool Discovery",
    description:
      "Search 100+ AI tools with reviews, pricing, and alternatives",
    href: "/ai-tools",
    color: "#06b6d4",
  },
  {
    icon: MessageSquare,
    title: "Interview Prep",
    description:
      "500+ questions with detailed answers, filtered by difficulty",
    href: "/interviews",
    color: "#8b5cf6",
  },
  {
    icon: Layers,
    title: "Project Architectures",
    description:
      "Real-world system designs with diagrams and scalability notes",
    href: "/projects",
    color: "#22c55e",
  },
  {
    icon: Eye,
    title: "Visual Learning",
    description:
      "Infographics, comparison charts, cheat sheets & mind maps",
    href: "/learn",
    color: "#f59e0b",
  },
  {
    icon: Newspaper,
    title: "Tech News Feed",
    description:
      "Stay current with AI releases, framework updates, and launches",
    href: "/news",
    color: "#ec4899",
  },
];

export function FeaturesSection() {
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
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)]">
            More than just a{" "}
            <span className="gradient-text">knowledge base</span>
          </h2>
          <p className="mt-3 text-[var(--foreground-muted)] text-lg max-w-2xl mx-auto">
            An interactive ecosystem designed for real learning and career growth
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.08, duration: 0.4 }}
            >
              <Link
                href={feature.href}
                className="group block p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] hover:bg-[var(--surface-hover)] transition-all duration-300 card-hover h-full relative overflow-hidden"
              >
                {/* Glow on hover */}
                <div
                  className="absolute -top-12 -right-12 w-32 h-32 rounded-full blur-[60px] opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                  style={{ backgroundColor: feature.color }}
                />

                <div className="relative">
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 duration-300"
                    style={{
                      backgroundColor: `${feature.color}12`,
                      color: feature.color,
                    }}
                  >
                    <feature.icon className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[var(--foreground-muted)] mt-2 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Link */}
                  <div className="mt-4 flex items-center gap-1 text-sm text-[var(--primary)] font-medium">
                    Explore
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="text-center mt-12"
        >
          <Button variant="gradient" size="lg" asChild className="group">
            <Link href="/technologies">
              <Zap className="w-4 h-4" />
              Start Exploring
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
