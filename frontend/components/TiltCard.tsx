"use client";

import {
  useEffect,
  useRef,
  useState,
  type MouseEvent,
  type ReactNode,
} from "react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  /** Degrees of rotation at the card's edge. 3–5 reads as depth; 10+ reads as a gimmick. */
  maxTilt?: number;
  glare?: boolean;
}

/**
 * Cursor-tracked 3D tilt with a soft specular glare.
 *
 * Changes from the original:
 *  • The pointer/reduced-motion capability check runs ONCE on mount instead of
 *    on every mousemove (it was calling matchMedia twice per frame).
 *  • Handlers are only attached when the device actually supports the effect,
 *    so phones and tablets carry no listener cost at all.
 *  • Adds `relative` and `isolate` so the glare's absolute positioning and
 *    z-index always resolve against the card, regardless of call site.
 */
export default function TiltCard({
  children,
  className = "",
  maxTilt = 4,
  glare = true,
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);
  const frame = useRef<number | null>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(hover: none), (pointer: coarse)").matches;
    setEnabled(!reduced && !coarse);
  }, []);

  useEffect(() => {
    return () => {
      if (frame.current !== null) cancelAnimationFrame(frame.current);
    };
  }, []);

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    if (!enabled) return;

    const card = cardRef.current;
    if (!card) return;

    const { clientX, clientY } = e;

    if (frame.current !== null) cancelAnimationFrame(frame.current);

    frame.current = requestAnimationFrame(() => {
      const rect = card.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;

      const px = x / rect.width - 0.5;
      const py = y / rect.height - 0.5;

      const rotateY = px * maxTilt * 2;
      const rotateX = -py * maxTilt * 2;

      card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0) scale3d(1.01,1.01,1.01)`;

      if (glare && glareRef.current) {
        glareRef.current.style.opacity = "1";
        glareRef.current.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.14), rgba(255,255,255,0.04) 18%, transparent 48%)`;
      }
    });
  }

  function handleMouseLeave() {
    if (frame.current !== null) {
      cancelAnimationFrame(frame.current);
      frame.current = null;
    }

    const card = cardRef.current;
    if (card) {
      card.style.transform =
        "perspective(1200px) rotateX(0deg) rotateY(0deg) translateZ(0) scale3d(1,1,1)";
    }
    if (glareRef.current) glareRef.current.style.opacity = "0";
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={enabled ? handleMouseMove : undefined}
      onMouseLeave={enabled ? handleMouseLeave : undefined}
      className={`relative isolate gpu transform-gpu transition-transform duration-500 ease-soft ${
        enabled ? "will-change-transform" : ""
      } ${className}`}
    >
      {children}

      {glare && enabled && (
        <div
          ref={glareRef}
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10 rounded-[inherit] opacity-0 transition-opacity duration-500"
        />
      )}
    </div>
  );
}