"use client";

import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Search, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const typingWords = [
  "React & Next.js",
  "AI & Machine Learning",
  "Cloud Computing",
  "System Design",
  "DevOps Pipelines",
  "Cybersecurity",
];

export function HeroSection() {
  const [currentWord, setCurrentWord] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = typingWords[currentWord];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(word.slice(0, displayText.length + 1));
          if (displayText.length === word.length) {
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          setDisplayText(word.slice(0, displayText.length - 1));
          if (displayText.length === 0) {
            setIsDeleting(false);
            setCurrentWord((prev) => (prev + 1) % typingWords.length);
          }
        }
      },
      isDeleting ? 40 : 80
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentWord]);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-[var(--background)]">
        {/* Grid pattern */}
        <div className="absolute inset-0 grid-pattern opacity-60" />

        {/* Gradient orbs */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#6366f1]/20 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#8b5cf6]/15 rounded-full blur-[120px] animate-float" style={{ animationDelay: "3s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#06b6d4]/10 rounded-full blur-[150px]" />
      </div>

      <div className="relative container-wide text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--primary)]/30 bg-[var(--primary)]/5 text-sm text-[var(--primary)] mb-8"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Your complete IT learning ecosystem</span>
          </motion.div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
            <span className="text-[var(--foreground)]">Master the art of</span>
            <br />
            <span className="gradient-text inline-block min-h-[1.2em]">
              {displayText}
              <span className="animate-pulse text-[var(--primary)]">|</span>
            </span>
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-6 text-lg sm:text-xl text-[var(--foreground-muted)] max-w-2xl mx-auto leading-relaxed"
          >
            Explore 100+ technologies, discover AI tools, follow interactive roadmaps,
            practice 500+ interview questions, and chart your career path — all in one
            premium experience.
          </motion.p>

          {/* Search bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-10 max-w-xl mx-auto"
          >
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] rounded-2xl opacity-20 group-hover:opacity-40 blur transition-opacity duration-300" />
              <div className="relative flex items-center bg-[var(--surface)] border border-[var(--border)] rounded-2xl overflow-hidden shadow-lg">
                <Search className="w-5 h-5 ml-5 text-[var(--foreground-subtle)] flex-shrink-0" />
                <input
                  type="text"
                  placeholder="Search technologies, tools, roadmaps..."
                  className="flex-1 h-14 px-4 bg-transparent text-[var(--foreground)] placeholder:text-[var(--foreground-subtle)] text-base focus:outline-none"
                />
                <Button
                  variant="gradient"
                  className="mr-2 rounded-xl"
                >
                  Explore
                </Button>
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <Button variant="outline" size="lg" asChild className="group">
              <Link href="/technologies">
                Browse Technologies
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="group">
              <Link href="/roadmaps">
                View Roadmaps
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="group">
              <Link href="/interviews">
                Practice Interviews
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-[var(--foreground-subtle)]"
          >
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--success)]" />
              Free to explore
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--success)]" />
              No sign-up required
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--success)]" />
              Updated weekly
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--success)]" />
              Community driven
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
