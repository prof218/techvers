"use client";

import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative section-padding overflow-hidden">
      <div className="container-wide">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#6366f1] via-[#7c3aed] to-[#8b5cf6]" />
          <div className="absolute inset-0 grid-pattern opacity-20" />

          {/* Orb decorations */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-[80px]" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-[80px]" />

          <div className="relative px-8 py-16 sm:px-16 sm:py-20 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm text-white/90 mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              Start your journey today
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-3xl mx-auto">
              Ready to accelerate your tech career?
            </h2>

            <p className="mt-4 text-lg text-white/80 max-w-xl mx-auto leading-relaxed">
              Join thousands of developers using TechVerse to learn technologies,
              prepare for interviews, and land their dream roles.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button
                size="xl"
                className="bg-white text-[#6366f1] hover:bg-white/90 shadow-lg font-semibold group"
                asChild
              >
                <Link href="/technologies">
                  Get Started Free
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 hover:border-white/50"
                asChild
              >
                <Link href="/roadmaps">Explore Roadmaps</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
