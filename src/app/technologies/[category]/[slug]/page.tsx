"use client";

import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, ArrowRight, ExternalLink, BookOpen, Star, Check, Globe } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { technologyCategories } from "@/lib/constants";

// Sample detailed tech data (will be replaced by Velite MDX content)
const techDetails: Record<string, {
  name: string; icon: string; description: string; difficulty: string;
  tags: string[]; features: string[]; website?: string;
  overview: string; useCases: string[]; ecosystem: { name: string; purpose: string }[];
  relatedTech: { slug: string; name: string; category: string }[];
}> = {
  react: {
    name: "React", icon: "⚛️", description: "A JavaScript library for building component-based user interfaces with virtual DOM and declarative programming patterns.", difficulty: "beginner",
    tags: ["JavaScript", "UI", "SPA", "Components", "Hooks"],
    features: ["Component-Based Architecture", "Virtual DOM", "JSX Syntax", "React Hooks", "Server Components", "Concurrent Mode", "Rich Ecosystem", "React Native for Mobile"],
    website: "https://react.dev",
    overview: "React is a declarative, efficient, and flexible JavaScript library for building user interfaces. Created by Meta (Facebook), it lets you compose complex UIs from small, isolated pieces of code called components. React has become the most popular frontend library in the world, powering everything from small widgets to large enterprise applications.",
    useCases: ["Single-page applications", "Enterprise dashboards", "E-commerce platforms", "Social media apps", "Real-time collaboration tools", "Mobile apps via React Native"],
    ecosystem: [
      { name: "Next.js", purpose: "Full-stack framework" },
      { name: "React Router", purpose: "Client-side routing" },
      { name: "Redux / Zustand", purpose: "State management" },
      { name: "React Query", purpose: "Server state" },
      { name: "Tailwind CSS", purpose: "Utility-first styling" },
      { name: "Framer Motion", purpose: "Animations" },
      { name: "React Hook Form", purpose: "Form handling" },
      { name: "Vitest / Jest", purpose: "Testing" },
    ],
    relatedTech: [
      { slug: "nextjs", name: "Next.js", category: "frontend" },
      { slug: "vue", name: "Vue.js", category: "frontend" },
      { slug: "typescript", name: "TypeScript", category: "frontend" },
    ],
  },
};

// Fallback for unknown slugs
const defaultTech = {
  name: "Technology", icon: "💻", description: "A comprehensive guide to this technology.", difficulty: "intermediate",
  tags: ["Technology"], features: ["Feature 1", "Feature 2", "Feature 3"],
  overview: "Detailed content for this technology will be available soon. This page will include comprehensive guides, use cases, ecosystem overview, and learning resources.",
  useCases: ["Web Development", "API Development", "Data Processing"],
  ecosystem: [{ name: "Tool 1", purpose: "Primary purpose" }, { name: "Tool 2", purpose: "Secondary purpose" }],
  relatedTech: [],
};

const difficultyColors = { beginner: "#22c55e", intermediate: "#f59e0b", advanced: "#ef4444" };

export default function TechDetailPage() {
  const params = useParams();
  const category = params.category as string;
  const slug = params.slug as string;
  const tech = techDetails[slug] || { ...defaultTech, name: slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, " ") };
  const categoryInfo = technologyCategories.find((c) => c.slug === category);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--background-secondary)] to-[var(--background)]" />
        <div className="absolute inset-0 grid-pattern opacity-30" />

        <div className="relative container-tight">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-[var(--foreground-muted)] mb-8">
            <Link href="/technologies" className="hover:text-[var(--primary)] transition-colors">Technologies</Link>
            <span>/</span>
            <Link href={`/technologies/${category}`} className="hover:text-[var(--primary)] transition-colors capitalize">{categoryInfo?.name || category}</Link>
            <span>/</span>
            <span className="text-[var(--foreground)]">{tech.name}</span>
          </nav>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <div className="w-16 h-16 rounded-2xl bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center text-3xl flex-shrink-0">
                {tech.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)]">{tech.name}</h1>
                  <Badge
                    className="capitalize"
                    style={{
                      backgroundColor: `${difficultyColors[tech.difficulty as keyof typeof difficultyColors]}15`,
                      color: difficultyColors[tech.difficulty as keyof typeof difficultyColors],
                      borderColor: "transparent",
                    }}
                  >
                    {tech.difficulty}
                  </Badge>
                </div>
                <p className="text-lg text-[var(--foreground-muted)] leading-relaxed">{tech.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {tech.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
                {tech.website && (
                  <a href={tech.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 mt-4 text-sm text-[var(--primary)] hover:underline">
                    <Globe className="w-3.5 h-3.5" /> Official Website <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-tight">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Overview */}
              <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                <h2 className="text-2xl font-bold text-[var(--foreground)] mb-4 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-[var(--primary)]" />
                  Overview
                </h2>
                <p className="text-[var(--foreground-muted)] leading-relaxed">{tech.overview}</p>
              </motion.div>

              {/* Key Features */}
              <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                <h2 className="text-2xl font-bold text-[var(--foreground)] mb-4 flex items-center gap-2">
                  <Star className="w-5 h-5 text-[var(--primary)]" />
                  Key Features
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {tech.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2.5 p-3 rounded-xl bg-[var(--surface)] border border-[var(--border)]">
                      <Check className="w-4 h-4 text-[var(--success)] mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-[var(--foreground)]">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Use Cases */}
              <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                <h2 className="text-2xl font-bold text-[var(--foreground)] mb-4">Use Cases</h2>
                <div className="space-y-2">
                  {tech.useCases.map((useCase) => (
                    <div key={useCase} className="flex items-center gap-2.5 p-3 rounded-xl bg-[var(--surface)] border border-[var(--border)]">
                      <ArrowRight className="w-3.5 h-3.5 text-[var(--primary)] flex-shrink-0" />
                      <span className="text-sm text-[var(--foreground)]">{useCase}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Ecosystem */}
              <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                <h2 className="text-2xl font-bold text-[var(--foreground)] mb-4">Ecosystem</h2>
                <div className="rounded-xl border border-[var(--border)] overflow-hidden">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-[var(--surface)]">
                        <th className="text-left px-4 py-3 text-sm font-semibold text-[var(--foreground)]">Tool</th>
                        <th className="text-left px-4 py-3 text-sm font-semibold text-[var(--foreground)]">Purpose</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tech.ecosystem.map((item, i) => (
                        <tr key={item.name} className={i % 2 === 0 ? "bg-[var(--background)]" : "bg-[var(--surface)]"}>
                          <td className="px-4 py-3 text-sm font-medium text-[var(--primary)]">{item.name}</td>
                          <td className="px-4 py-3 text-sm text-[var(--foreground-muted)]">{item.purpose}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Info Card */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="p-5 rounded-2xl border border-[var(--border)] bg-[var(--surface)] sticky top-24"
              >
                <h3 className="text-sm font-semibold text-[var(--foreground)] mb-4 uppercase tracking-wider">Quick Info</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[var(--foreground-muted)]">Category</span>
                    <Badge variant="secondary" className="capitalize">{categoryInfo?.name || category}</Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[var(--foreground-muted)]">Difficulty</span>
                    <Badge
                      className="capitalize"
                      style={{
                        backgroundColor: `${difficultyColors[tech.difficulty as keyof typeof difficultyColors]}15`,
                        color: difficultyColors[tech.difficulty as keyof typeof difficultyColors],
                        borderColor: "transparent",
                      }}
                    >
                      {tech.difficulty}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[var(--foreground-muted)]">Tags</span>
                    <span className="text-[var(--foreground)]">{tech.tags.length}</span>
                  </div>
                </div>

                <div className="mt-6 space-y-2">
                  <Button variant="gradient" className="w-full" size="sm">
                    <BookOpen className="w-3.5 h-3.5" />
                    Start Learning
                  </Button>
                  <Button variant="outline" className="w-full" size="sm">
                    View Roadmap
                  </Button>
                </div>

                {/* Related Technologies */}
                {tech.relatedTech.length > 0 && (
                  <div className="mt-6 pt-4 border-t border-[var(--border)]">
                    <h4 className="text-xs font-semibold text-[var(--foreground-subtle)] uppercase tracking-wider mb-3">Related</h4>
                    <div className="space-y-2">
                      {tech.relatedTech.map((related) => (
                        <Link
                          key={related.slug}
                          href={`/technologies/${related.category}/${related.slug}`}
                          className="flex items-center justify-between p-2 rounded-lg hover:bg-[var(--surface-hover)] transition-colors group"
                        >
                          <span className="text-sm text-[var(--foreground)]">{related.name}</span>
                          <ArrowRight className="w-3 h-3 text-[var(--foreground-subtle)] group-hover:text-[var(--primary)] transition-colors" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
