"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { Search, Menu, X, ChevronDown, Command, Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CategoryIcon } from "@/components/ui/category-icon";
import { mainNavigation, type NavItem } from "@/lib/constants";
import { cn } from "@/lib/utils";

function slugFromHref(href: string) {
  if (href.includes("?category=")) return href.split("=").pop() || "";
  return href.split("/").filter(Boolean).pop() || "";
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
    setActiveMenu(null);
  }, [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveMenu(null);
        setIsMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Keep the mega menu from getting "stuck" open: close it when the user
  // clicks/taps anywhere outside the nav, or scrolls the page.
  useEffect(() => {
    if (!activeMenu) return;
    const onPointerDown = (e: PointerEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveMenu(null);
      }
    };
    const onScroll = () => setActiveMenu(null);
    document.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("scroll", onScroll);
    };
  }, [activeMenu]);

  const openSearch = () =>
    window.dispatchEvent(new CustomEvent("open-command-palette", { detail: { query: "" } }));

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
          isScrolled
            ? "glass-strong border-[var(--border)] shadow-[0_1px_0_rgba(0,0,0,0.02),0_8px_30px_rgba(24,22,18,0.06)]"
            : "border-transparent bg-[color-mix(in_srgb,var(--background)_75%,transparent)] backdrop-blur-md"
        )}
      >
        {/* Gradient accent line (signature touch when scrolled) */}
        {isScrolled && (
          <div className="pointer-events-none absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--primary)]/45 to-transparent" />
        )}
        <div className="container-wide">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center shrink-0" aria-label="TechVerse home">
              <Image
                src="/tv-logo2.png"
                alt="TechVerse — Learn, Explore, Grow"
                width={240}
                height={80}
                priority
                className="h-12 sm:h-14 lg:h-16 w-auto"
              />
            </Link>

            {/* Desktop nav */}
            <nav ref={navRef} className="hidden lg:flex items-center gap-0.5">
              {mainNavigation.map((item) => (
                <div
                  key={item.title}
                  className="relative"
                  onMouseEnter={() => setActiveMenu(item.children ? item.title : null)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <Link
                    href={item.href}
                    onClick={() => setActiveMenu(null)}
                    className={cn(
                      "flex items-center gap-1 px-3.5 py-2 rounded-full text-[0.925rem] font-medium transition-colors duration-200",
                      pathname.startsWith(item.href)
                        ? "text-[var(--foreground)]"
                        : "text-[var(--foreground-muted)] hover:text-[var(--foreground)]"
                    )}
                  >
                    {item.title}
                    {item.children && (
                      <ChevronDown
                        className={cn(
                          "w-3.5 h-3.5 transition-transform duration-200 opacity-60",
                          activeMenu === item.title && "rotate-180"
                        )}
                      />
                    )}
                  </Link>

                  <AnimatePresence>
                    {item.children && activeMenu === item.title && (
                      <MegaMenu item={item} onNavigate={() => setActiveMenu(null)} />
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-1.5 shrink-0">
              <button
                onClick={openSearch}
                className="hidden sm:flex items-center gap-2 h-9 pl-3 pr-2 rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground-subtle)] hover:border-[var(--border-hover)] hover:text-[var(--foreground-muted)] transition-colors"
              >
                <Search className="w-3.5 h-3.5" />
                <span className="text-xs pr-1">Search</span>
                <kbd className="hidden md:inline-flex h-5 items-center gap-0.5 rounded-md border border-[var(--border)] bg-[var(--background)] px-1.5 font-mono text-[10px] text-[var(--foreground-subtle)]">
                  <Command className="w-2.5 h-2.5" />K
                </kbd>
              </button>

              <Button
                variant="ghost"
                size="icon"
                asChild
                className="rounded-full text-[var(--foreground-muted)] hover:text-[var(--foreground)]"
                aria-label="Saved items"
              >
                <Link href="/saved"><Bookmark className="w-[18px] h-[18px]" /></Link>
              </Button>

              <div className="hidden sm:block">
                <Button variant="gradient" size="sm" asChild className="rounded-full px-4">
                  <Link href="/roadmaps">Start Learning</Link>
                </Button>
              </div>

              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden rounded-full text-[var(--foreground-muted)]"
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                aria-label="Toggle menu"
              >
                {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile nav */}
        <AnimatePresence>
          {isMobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="lg:hidden overflow-hidden bg-[var(--surface)] border-t border-[var(--border)]"
            >
              <div className="container-wide py-4 space-y-1">
                {mainNavigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "block px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                      pathname.startsWith(item.href)
                        ? "text-[var(--primary)] bg-[var(--secondary)]"
                        : "text-[var(--foreground-muted)] hover:text-[var(--foreground)] hover:bg-[var(--surface-hover)]"
                    )}
                  >
                    {item.title}
                  </Link>
                ))}
                <div className="pt-3 px-4 border-t border-[var(--border)] mt-2">
                  <Button variant="gradient" size="sm" asChild className="w-full rounded-full">
                    <Link href="/roadmaps">Start Learning</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}

function MegaMenu({ item, onNavigate }: { item: NavItem; onNavigate: () => void }) {
  const children = item.children || [];
  const twoCol = children.length > 5;
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.98 }}
      transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "absolute top-full left-1/2 -translate-x-1/2 pt-3",
        twoCol ? "w-[34rem]" : "w-72"
      )}
    >
      <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-xl)] p-2.5">
        <div className={cn("grid gap-1", twoCol ? "grid-cols-2" : "grid-cols-1")}>
          {children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              onClick={onNavigate}
              className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[var(--surface-hover)] transition-colors group/item"
            >
              <span className="w-9 h-9 rounded-lg bg-[var(--secondary)] border border-[var(--border)] flex items-center justify-center text-[var(--primary)] flex-shrink-0 group-hover/item:bg-[var(--primary)] group-hover/item:text-[var(--primary-foreground)] group-hover/item:border-[var(--primary)] transition-colors">
                <CategoryIcon slug={slugFromHref(child.href)} className="w-[18px] h-[18px]" />
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-semibold text-[var(--foreground)] group-hover/item:text-[var(--primary)] transition-colors">
                  {child.title}
                </span>
                {child.description && (
                  <span className="block text-xs text-[var(--foreground-subtle)] mt-0.5 line-clamp-1">
                    {child.description}
                  </span>
                )}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
