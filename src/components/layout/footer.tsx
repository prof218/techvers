"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Globe,
  MessageCircle,
  Briefcase,
  Mail,
  ArrowUpRight,
  Heart,
} from "lucide-react";
import { siteConfig } from "@/lib/constants";

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
    title: "Popular",
    links: [
      { label: "AI Coding Tools", href: "/ai-tools?category=coding" },
      { label: "Frontend Guides", href: "/technologies/frontend" },
      { label: "System Design Q&A", href: "/interviews/system-design" },
      { label: "Project Case Studies", href: "/projects" },
      { label: "Learning Roadmaps", href: "/roadmaps" },
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
  { label: "GitHub", href: siteConfig.links.github, icon: Globe },
  { label: "Twitter", href: siteConfig.links.twitter, icon: MessageCircle },
  { label: "LinkedIn", href: siteConfig.links.linkedin, icon: Briefcase },
  { label: "Email", href: `mailto:${siteConfig.contactEmail}`, icon: Mail },
].filter((s) => s.href);

export function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    const subject = encodeURIComponent("Newsletter subscription");
    const body = encodeURIComponent(
      `Please add ${email} to the TechVerse newsletter.`
    );
    // No backend yet: route the signup to the site owner's inbox.
    window.location.href = `mailto:${siteConfig.contactEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <footer className="relative border-t border-[var(--border)] bg-[var(--background-secondary)]">
      {/* Gradient decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent opacity-60" />

      <div className="container-wide section-padding">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center" aria-label="TechVerse home">
              <Image
                src="/tv-logo2.png"
                alt="TechVerse — Learn, Explore, Grow"
                width={252}
                height={84}
                className="h-14 lg:h-16 w-auto"
              />
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
            <form onSubmit={handleSubscribe} className="flex items-center gap-2 w-full sm:w-auto">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                aria-label="Email address"
                className="flex-1 sm:w-64 h-10 px-4 rounded-lg bg-[var(--background)] border border-[var(--border)] text-sm text-[var(--foreground)] placeholder:text-[var(--foreground-subtle)] focus:outline-none focus:ring-2 focus:ring-[var(--ring)]"
              />
              <button
                type="submit"
                className="h-10 px-5 rounded-lg bg-[var(--foreground)] text-[var(--background)] text-sm font-medium hover:opacity-90 transition-all duration-200 shadow-md hover:shadow-lg whitespace-nowrap cursor-pointer"
              >
                Subscribe
              </button>
            </form>
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
