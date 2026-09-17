"use client";

import { useEffect, useRef } from "react";

/**
 * Reading-progress bar.
 *
 * Rewritten to animate `transform: scaleX` instead of `width`, and to write
 * straight to the DOM instead of calling setState on every scroll event —
 * the original re-rendered React on each frame and triggered layout on each
 * width change. It is decorative, so it is hidden from assistive tech.
 */
export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    let ticking = false;

    const update = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const pct = max > 0 ? Math.min(1, window.scrollY / max) : 0;
      bar.style.transform = `scaleX(${pct})`;
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 z-60 h-0.75"
    >
      <div
        ref={barRef}
        className="h-full origin-left scale-x-0 bg-orange transform-gpu"
      />
    </div>
  );
}