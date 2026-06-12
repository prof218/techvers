"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight, Database, Globe, Layers, Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Project {
  title: string;
  slug: string;
  category: string;
  description: string;
  techStack: string[];
  difficulty: "beginner" | "intermediate" | "advanced";
}

interface PageClientProps {
  allProjects: Project[];
}

export default function ProjectsHubClient({ allProjects }: PageClientProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = allProjects.filter((project) => {
    const query = searchQuery.toLowerCase();
    const matchTitle = project.title.toLowerCase().includes(query);
    const matchDesc = project.description.toLowerCase().includes(query);
    const matchCategory = project.category.toLowerCase().includes(query);
    const matchTech = project.techStack.some((tech) => tech.toLowerCase().includes(query));
    return matchTitle || matchDesc || matchCategory || matchTech;
  });

  return (
    <div>
      {/* Search Bar */}
      <div className="mb-8 p-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] max-w-md">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--foreground-subtle)]" />
          <input
            type="text"
            placeholder="Search projects by name, stack, or category..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-10 pl-10 pr-4 rounded-lg bg-[var(--background)] border border-[var(--border)] text-sm text-[var(--foreground)] placeholder:text-[var(--foreground-subtle)] focus:outline-none focus:ring-2 focus:ring-[var(--ring)]"
          />
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((project, index) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.04, duration: 0.4 }}
          >
            <Link
              href={`/projects/${project.slug}`}
              className="group block p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] hover:bg-[var(--surface-hover)] transition-all duration-300 card-hover h-full"
            >
              {/* Category */}
              <Badge variant="secondary" className="text-xs mb-3">{project.category}</Badge>

              {/* Title */}
              <h3 className="text-lg font-bold text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-[var(--foreground-muted)] mt-2 line-clamp-2 leading-relaxed">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-1.5 mt-4">
                {project.techStack.map((tech) => (
                  <span key={tech} className="px-2 py-0.5 rounded-md bg-[var(--primary)]/10 text-[10px] font-medium text-[var(--primary)] border border-[var(--primary)]/20">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Architecture sections preview */}
              <div className="flex items-center gap-3 mt-4 pt-4 border-t border-[var(--border)]">
                <div className="flex items-center gap-1 text-xs text-[var(--foreground-subtle)] font-medium">
                  <Layers className="w-3 h-3 text-[var(--primary)]" /> Architecture
                </div>
                <div className="flex items-center gap-1 text-xs text-[var(--foreground-subtle)] font-medium">
                  <Database className="w-3 h-3 text-[var(--success)]" /> DB Design
                </div>
                <div className="flex items-center gap-1 text-xs text-[var(--foreground-subtle)] font-medium">
                  <Globe className="w-3 h-3 text-[var(--accent)]" /> API
                </div>
              </div>

              <div className="mt-4 flex items-center gap-1 text-sm text-[var(--primary)] font-medium">
                View architecture
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16">
          <p className="text-[var(--foreground-muted)]">No project case studies found matching your filters.</p>
        </div>
      )}
    </div>
  );
}
