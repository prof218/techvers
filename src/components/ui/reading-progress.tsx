"use client";

import { useEffect, useState } from "react";

/** Thin progress bar under the header that tracks how far the reader has scrolled. */
export function ReadingProgress() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      setPct(max > 0 ? Math.min(100, (el.scrollTop / max) * 100) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="fixed top-16 lg:top-20 left-0 right-0 z-40 h-[3px] bg-transparent pointer-events-none">
      <div
        className="h-full bg-[var(--primary)]"
        style={{ width: `${pct}%`, transition: "width 80ms linear" }}
      />
    </div>
  );
}
