"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUp } from "lucide-react";

const R = 21;
const C = 2 * Math.PI * R;

/**
 * Floating "back to top" control.
 * - A ring around it fills up as you scroll the page (shows how deep you are).
 * - On click the arrow "loads" (dips + squashes) then launches upward (stretches),
 *   with a ghost trail shooting out — like a slingshot / net pulled and released —
 *   while the page smooth-scrolls to the top.
 * - Subtle 3D tilt toward you on hover.
 */
export function BackToTop() {
  const [visible, setVisible] = useState(false);
  const [pct, setPct] = useState(0);
  const [launching, setLaunching] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      setPct(max > 0 ? Math.min(1, el.scrollTop / max) : 0);
      setVisible(el.scrollTop > 500);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const toTop = () => {
    setLaunching(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.setTimeout(() => setLaunching(false), 700);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={toTop}
          aria-label="Back to top"
          initial={{ opacity: 0, scale: 0.4, y: 26 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.4, y: 26 }}
          transition={{ type: "spring", stiffness: 320, damping: 18 }}
          whileHover={{ y: -4, rotateX: 16, rotateY: -6 }}
          whileTap={{ scale: 0.86 }}
          style={{ transformStyle: "preserve-3d", perspective: 700 }}
          className="group fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-[var(--foreground)] text-[var(--background)] shadow-[var(--shadow-lg)] hover:shadow-[var(--shadow-xl)] flex items-center justify-center cursor-pointer"
        >
          {/* Scroll-progress ring */}
          <svg className="absolute inset-0 -rotate-90" width="48" height="48" viewBox="0 0 48 48" aria-hidden>
            <circle cx="24" cy="24" r={R} fill="none" stroke="currentColor" strokeOpacity="0.18" strokeWidth="2.5" />
            <circle
              cx="24"
              cy="24"
              r={R}
              fill="none"
              stroke="var(--primary)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray={C}
              strokeDashoffset={C * (1 - pct)}
              style={{ transition: "stroke-dashoffset 90ms linear" }}
            />
          </svg>

          {/* Ghost arrow that shoots out on launch */}
          <AnimatePresence>
            {launching && (
              <motion.span
                key="trail"
                className="absolute text-[var(--primary)]"
                initial={{ opacity: 0.7, y: 4, scale: 1 }}
                animate={{ opacity: 0, y: -44, scale: 0.6 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <ArrowUp className="w-5 h-5" strokeWidth={2.5} />
              </motion.span>
            )}
          </AnimatePresence>

          {/* The arrow — loads then launches */}
          <motion.span
            className="relative flex"
            animate={launching ? { y: [0, 10, -36, 0], scaleY: [1, 0.75, 1.35, 1] } : { y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <ArrowUp className="w-5 h-5" strokeWidth={2.5} />
          </motion.span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
