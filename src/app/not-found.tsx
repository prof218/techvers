import Link from "next/link";
import { ArrowLeft, Compass, BookOpen, Wrench, Briefcase, FileCode2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "404 — Page Not Found",
  description: "The page you are looking for does not exist or has been moved.",
  robots: {
    index: false,
    follow: true,
  },
};

const helpfulLinks = [
  { title: "Technologies", href: "/technologies", icon: FileCode2, desc: "Explore guides across 10 categories" },
  { title: "AI Tools", href: "/ai-tools", icon: Wrench, desc: "Discover 100+ curated AI tools" },
  { title: "AI Training Jobs", href: "/ai-training-jobs", icon: Briefcase, desc: "Remote AI training and evaluation gigs" },
  { title: "Roadmaps", href: "/roadmaps", icon: Compass, desc: "Step-by-step developer paths" },
  { title: "Blog & Guides", href: "/blog", icon: BookOpen, desc: "Latest insights on AI and tech careers" },
];

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center section-padding">
      <div className="container-tight text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[var(--primary)]/10 text-[var(--primary)] mb-6 font-mono text-2xl font-bold">
          404
        </div>
        <h1 className="font-display text-3xl sm:text-5xl text-[var(--foreground)] tracking-tight">
          Page not found
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[var(--foreground-muted)] max-w-md mx-auto">
          The page you requested could not be found or has been relocated. Check out one of our popular sections below:
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left max-w-xl mx-auto">
          {helpfulLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="p-3.5 rounded-xl border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--primary)]/40 hover:bg-[var(--surface-hover)] transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[var(--surface-active)] flex items-center justify-center text-[var(--primary)] group-hover:scale-105 transition-transform">
                  <item.icon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors">
                    {item.title}
                  </div>
                  <div className="text-xs text-[var(--foreground-subtle)] line-clamp-1">
                    {item.desc}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-3">
          <Button asChild variant="default">
            <Link href="/" className="inline-flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
          </Button>
          <Button asChild variant="secondary">
            <Link href="/contact">Report an Issue</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
