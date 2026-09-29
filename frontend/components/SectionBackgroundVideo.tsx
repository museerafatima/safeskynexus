"use client";

import { useEffect, useState } from "react";

/* ==========================================================================
   SECTION BACKGROUND VIDEO
   A reusable version of the pattern HeroBackgroundVideo already established,
   generalized so any section can drop in a full-bleed looping video without
   re-implementing the reduced-motion fallback each time.

   Usage: place inside a `relative overflow-hidden` section, as the first
   child of an `absolute inset-0` wrapper (see the Intro section in page.tsx
   for the exact pattern) — same structure the Hero background already uses.
   ========================================================================== */
export default function SectionBackgroundVideo({
  src,
  poster,
  className = "absolute inset-0 h-full w-full object-cover",
  objectPosition,
}: {
  src: string;
  poster: string;
  className?: string;
  /** e.g. "center 40%" — only needed if the default center crop isn't right. */
  objectPosition?: string;
}) {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  if (reducedMotion) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={poster}
        alt=""
        aria-hidden="true"
        className={className}
        style={objectPosition ? { objectPosition } : undefined}
      />
    );
  }

  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      poster={poster}
      aria-hidden="true"
      className={className}
      style={objectPosition ? { objectPosition } : undefined}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}