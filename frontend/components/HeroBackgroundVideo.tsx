"use client";

import { useEffect, useState } from "react";

// The source footage is portrait (720x1280), but the drone's body consistently
// sits around 61% down the frame throughout the clip's pan (measured directly
// against several frames — see chat), so object-position anchors the crop
// there instead of the default center, which would show mostly ceiling/empty
// table. This gives a true full-bleed cover without needing letterboxing.
export default function HeroBackgroundVideo() {
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
        src="/images/hero-poster.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition: "center 65%" }}
      />
    );
  }

  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      poster="/images/hero-poster.jpg"
      aria-hidden="true"
      className="absolute inset-0 h-full w-full object-cover"
      style={{ objectPosition: "center 65%" }}
    >
      <source src="/videos/hero-drone.mp4" type="video/mp4" />
    </video>
  );
}