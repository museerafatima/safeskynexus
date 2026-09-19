"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Pause, Play } from "lucide-react";

/* ==========================================================================
   IMAGE SLIDESHOW
   Crossfades through a list of images automatically, used inside a card
   (the "Engineering in action" proof cards on Home).

   Auto-advances every `intervalMs`. Pauses only when:
     • the user clicks the pause button
     • the browser tab isn't visible
     • the user has requested reduced motion (OS-level) — shows the first
       image only, never auto-advances
   ========================================================================== */

type SlideImage = { src: string; alt: string };

export default function ImageSlideshow({
  images,
  intervalMs = 500,
  className = "",
  imageClassName = "",
  sizes = "(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 640px",
}: {
  images: SlideImage[];
  /** Time each image is shown before crossfading to the next. */
  intervalMs?: number;
  className?: string;
  imageClassName?: string;
  sizes?: string;
}) {
  const [index, setIndex] = useState(0);
  const [userPaused, setUserPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  // Respect the OS-level reduced-motion setting: never auto-advance.
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const playing = images.length > 1 && !userPaused && !reducedMotion;

  useEffect(() => {
    // TEMP DEBUG LOGGING — remove once the slideshow is confirmed working.
    console.log(
      "[ImageSlideshow] EFFECT RAN — playing:",
      playing,
      "intervalMs:",
      intervalMs,
      "images.length:",
      images.length
    );

    if (!playing) return;

    const id = window.setInterval(() => {
      console.log("[ImageSlideshow] TICK — document.hidden:", document.hidden);
      if (document.hidden) return;
      setIndex((i) => (i + 1) % images.length);
    }, intervalMs);

    return () => window.clearInterval(id);
  }, [playing, intervalMs, images.length]);

  if (images.length === 0) return null;

  return (
    <div
      // No hardcoded position class here on purpose: the caller's
      // `className` must supply one (`absolute inset-0 h-full w-full` when
      // filling a positioned parent, or `relative h-full w-full` for
      // in-flow usage).
      className={`group/slideshow ${className}`}
    >
      {images.map((image, i) => (
        <div
          key={image.src}
          aria-hidden={i !== index}
          className={`transition-opacity duration-700 ease-soft ${
            i === index ? "opacity-100" : "pointer-events-none absolute inset-0 opacity-0"
          }`}
        >
          <Image
            src={image.src}
            alt={i === index ? image.alt : ""}
            fill
            sizes={sizes}
            loading="lazy"
            className={`object-cover ${imageClassName}`}
          />
        </div>
      ))}

      {images.length > 1 && (
        <div className="absolute right-4 top-4 z-10 flex items-center gap-2.5 opacity-0 transition-opacity duration-300 focus-within:opacity-100 group-hover/slideshow:opacity-100">
          {/* Progress dots double as a manual jump control. */}
          <div className="flex items-center gap-1.5 rounded-full bg-navy-950/50 px-2.5 py-1.5 backdrop-blur-md">
            {images.map((image, i) => (
              <button
                key={image.src}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show image ${i + 1} of ${images.length}`}
                aria-current={i === index}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index ? "w-4 bg-white" : "w-1.5 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => setUserPaused((p) => !p)}
            aria-label={userPaused ? "Play slideshow" : "Pause slideshow"}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy-950/50 text-white backdrop-blur-md transition-colors duration-200 hover:bg-navy-950/70"
          >
            {userPaused ? (
              <Play size={13} aria-hidden="true" fill="currentColor" />
            ) : (
              <Pause size={13} aria-hidden="true" fill="currentColor" />
            )}
          </button>
        </div>
      )}
    </div>
  );
}