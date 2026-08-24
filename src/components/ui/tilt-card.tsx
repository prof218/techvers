"use client";

import React, { useRef } from "react";

/**
 * 3D tilt card. On hover the card leans toward the cursor with depth and a
 * light sheen. Purely CSS transforms — no WebGL. Wrap real card markup as children;
 * pass card styling (border/bg/radius/padding) via className.
 */
export function TiltCard({
  children,
  className = "",
  max = 7,
}: {
  children: React.ReactNode;
  className?: string;
  max?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rotateX = (0.5 - py) * max * 2;
    const rotateY = (px - 0.5) * max * 2;
    el.style.transform = `rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateZ(0)`;
    el.style.setProperty("--sheen-x", `${(px * 100).toFixed(1)}%`);
    el.style.setProperty("--sheen-y", `${(py * 100).toFixed(1)}%`);
  };

  const reset = () => {
    const el = ref.current;
    if (el) el.style.transform = "rotateX(0deg) rotateY(0deg)";
  };

  return (
    <div className="tilt-scene h-full">
      <div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        className={`tilt-card relative h-full ${className}`}
      >
        {children}
        <span className="tilt-sheen" aria-hidden />
      </div>
    </div>
  );
}
