"use client";

import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Search, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const typingWords = [
  "React & Next.js",
  "AI & Machine Learning",
  "Cloud & DevOps",
  "System Design",
  "Cybersecurity",
];

const marquee = [
  "React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Docker",
  "Kubernetes", "AWS", "LangChain", "Python", "GraphQL", "Redis",
];

export function HeroSection() {
  const [currentWord, setCurrentWord] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [query, setQuery] = useState("");

  const openSearch = (initial = "") =>
    window.dispatchEvent(new CustomEvent("open-command-palette", { detail: { query: initial } }));

  useEffect(() => {
    const word = typingWords[currentWord];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(word.slice(0, displayText.length + 1));
          if (displayText.length === word.length) setTimeout(() => setIsDeleting(true), 1600);
        } else {
          setDisplayText(word.slice(0, displayText.length - 1));
          if (displayText.length === 0) {
            setIsDeleting(false);
            setCurrentWord((prev) => (prev + 1) % typingWords.length);
          }
        }
      },
      isDeleting ? 40 : 85
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentWord]);

  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute -top-24 -left-24 w-[32rem] h-[32rem] rounded-full bg-[var(--primary)]/10 blur-[120px]" />
        <div className="absolute top-1/3 -right-24 w-[30rem] h-[30rem] rounded-full bg-[var(--accent)]/10 blur-[130px]" />
      </div>

      <div className="container-tight pt-6 pb-16 sm:pt-10 sm:pb-24 text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--border)] bg-[var(--surface)] text-sm text-[var(--foreground-muted)] shadow-[var(--shadow-sm)]"
        >
          <Sparkles className="w-3.5 h-3.5 text-[var(--primary)]" />
          A calmer way to learn the tech that matters
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-7 font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.05] text-balance text-[var(--foreground)]"
        >
          Master the craft of
          <br />
          <span className="gradient-text italic">{displayText}</span>
          <span className="text-[var(--primary)] font-sans not-italic animate-pulse">|</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-lg sm:text-xl text-[var(--foreground-muted)] max-w-2xl mx-auto leading-relaxed text-pretty"
        >
          In-depth technology guides, honest AI-tool reviews, structured roadmaps, and
          real interview prep — written for developers who want to go deep, not skim.
        </motion.p>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-9 max-w-xl mx-auto"
        >
          <div className="flex items-center gap-2 h-14 pl-5 pr-2 rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-md)] focus-within:border-[var(--primary)] focus-within:shadow-[var(--shadow-glow)] transition-all">
            <Search className="w-5 h-5 text-[var(--foreground-subtle)] flex-shrink-0" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && openSearch(query)}
              placeholder="Search 80+ guides, tools, roadmaps…"
              aria-label="Search TechVerse"
              className="flex-1 h-full bg-transparent text-[var(--foreground)] placeholder:text-[var(--foreground-subtle)] focus:outline-none"
            />
            <Button variant="gradient" className="rounded-xl h-10" onClick={() => openSearch(query)}>
              Explore
            </Button>
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-7 flex flex-wrap items-center justify-center gap-3"
        >
          <Button variant="ink" size="lg" asChild className="group rounded-full">
            <Link href="/technologies">
              Browse Technologies
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild className="rounded-full">
            <Link href="/roadmaps">View Roadmaps</Link>
          </Button>
        </motion.div>

        {/* Trust */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-[var(--foreground-subtle)]"
        >
          {["Free to explore", "No sign-up required", "Updated regularly"].map((t) => (
            <span key={t} className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--success)]" />
              {t}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="relative border-y border-[var(--border)] bg-[var(--surface)]/50 py-4 overflow-hidden">
        <div className="flex gap-10 w-max animate-marquee">
          {[...marquee, ...marquee].map((m, i) => (
            <span key={i} className="text-sm font-medium text-[var(--foreground-subtle)] whitespace-nowrap">
              {m}
            </span>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[var(--background)] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[var(--background)] to-transparent" />
      </div>
    </section>
  );
}
