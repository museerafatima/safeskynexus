"use client";

import { useEffect, useRef } from "react";
import Image, { type ImageProps } from "next/image";

interface ParallaxImageProps extends ImageProps {
  /** Subtle parallax intensity. Recommended range: 0.04 – 0.1. */
  intensity?: number;
}

/**
 * Scroll-linked parallax wrapper for a next/image.
 *
 * Pointer-only and reduced-motion aware, as before. The scale is now applied
 * as a static class rather than inside the animated transform, so the image
 * still covers its frame on touch devices where the effect never runs.
 */
export default function ParallaxImage({
  intensity = 0.08,
  ...imageProps
}: ParallaxImageProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(hover: none), (pointer: coarse)").matches) return;

    let ticking = false;

    const update = () => {
      const rect = wrapper.getBoundingClientRect();
      const distance = rect.top + rect.height / 2 - window.innerHeight / 2;
      const offset = Math.max(-70, Math.min(70, distance * intensity));
      wrapper.style.transform = `translate3d(0, ${offset}px, 0)`;
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
  }, [intensity]);

  return (
    <div
      ref={wrapperRef}
      aria-hidden={imageProps.alt === "" ? true : undefined}
      className="absolute inset-0 scale-[1.12] transform-gpu will-change-transform"
    >
      <Image {...imageProps} />
    </div>
  );
}