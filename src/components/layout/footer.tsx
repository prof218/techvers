"use client";

import Link from "next/link";
import {
  Sparkles,
  Globe,
  MessageCircle,
  Briefcase,
  Mail,
  ArrowUpRight,
  Heart,
} from "lucide-react";
import { mainNavigation, siteConfig } from "@/lib/constants";

const footerSections = [
  {
    title: "Platform",
    links: [
      { label: "Technologies", href: "/technologies" },
      { label: "AI Tools", href: "/ai-tools" },
      { label: "Careers", href: "/careers" },
      { label: "Roadmaps", href: "/roadmaps" },
      { label: "Projects", href: "/projects" },
      { label: "Interviews", href: "/interviews" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "News & Trends", href: "/news" },
      { label: "Visual Learning", href: "/learn" },
      { label: "Cheat Sheets", href: "/learn?type=cheat-sheets" },
      { label: "Comparisons", href: "/learn?type=comparisons" },
      { label: "Architecture Diagrams", href: "/learn?type=architecture" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/techverse", icon: Globe },
  { label: "Twitter", href: "https://twitter.com/techverse", icon: MessageCircle },
  { label: "LinkedIn", href: "https://linkedin.com/company/techverse", icon: Briefcase },
  { label: "Email", href: "mailto:hello@techverse.dev", icon: Mail },
];

export function Footer() {
  return (
    <footer className="relative border-t border-[var(--border)] bg-[var(--background-secondary)]">
      {/* Gradient decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent opacity-60" />

      <div className="container-wide section-padding">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] flex items-center justify-center shadow-[0_0_15px_rgba(99,102,241,0.3)]">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight">
                <span className="gradient-text">Tech</span>
                <span className="text-[var(--foreground)]">Verse</span>
              </span>
            </Link>
            <p className="text-sm text-[var(--foreground-muted)] max-w-sm leading-relaxed">
              {siteConfig.description}
            </p>
            {/* Social links */}
            <div className="flex items-center gap-2 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg border border-[var(--border)] flex items-center justify-center text-[var(--foreground-subtle)] hover:text-[var(--primary)] hover:border-[var(--primary)]/30 hover:bg-[var(--primary)]/5 transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className="text-sm font-semibold text-[var(--foreground)] uppercase tracking-wider">
                {section.title}
              </h3>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--foreground-muted)] hover:text-[var(--primary)] transition-colors duration-200 flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-16 p-6 rounded-2xl gradient-border bg-gradient-to-r from-[var(--surface)] to-[var(--surface-hover)]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-base font-semibold text-[var(--foreground)]">
                Stay ahead of the curve
              </h3>
              <p className="text-sm text-[var(--foreground-muted)] mt-1">
                Get weekly insights on tech trends, new tools, and career advice.
              </p>
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 sm:w-64 h-10 px-4 rounded-lg bg-[var(--background)] border border-[var(--border)] text-sm text-[var(--foreground)] placeholder:text-[var(--foreground-subtle)] focus:outline-none focus:ring-2 focus:ring-[var(--ring)]"
              />
              <button className="h-10 px-5 rounded-lg bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white text-sm font-medium hover:from-[#818cf8] hover:to-[#a78bfa] transition-all duration-200 shadow-md hover:shadow-lg whitespace-nowrap cursor-pointer">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--foreground-subtle)]">
            © {new Date().getFullYear()} TechVerse. All rights reserved.
          </p>
          <p className="text-xs text-[var(--foreground-subtle)] flex items-center gap-1">
            Built with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> using Next.js, Tailwind & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
}
