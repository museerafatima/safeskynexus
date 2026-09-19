"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Extra classes for layout — merged onto the wrapper element. */
  className?: string;
  /** Stagger this reveal after others, in ms. */
  delay?: number;
  /** Starting vertical offset in px (how far it slides up from). */
  y?: number;
  /** Element/tag to render as (e.g. "li" when used inside a <ul>). Defaults to "div". */
  as?: ElementType;
};

/**
 * Fades an element in and slides it up slightly the first time it enters
 * the viewport. Triggers once — it does not replay on repeated scrolling.
 *
 * Reduced motion: this only ever animates `opacity` and `transform` via a
 * CSS `transition`, and globals.css already forces every
 * `transition-duration` to 0.01ms under `prefers-reduced-motion: reduce`.
 * So content still appears (once observed), it just does so instantly,
 * with no motion — nothing extra to wire up here.
 */
export default function Reveal({
  children,
  className = "",
  delay = 0,
  y = 24,
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`transition-[opacity,transform] duration-700 ease-out ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        opacity: visible ? 1 : 0,
        transform: visible ? "translate3d(0,0,0)" : `translate3d(0, ${y}px, 0)`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </Tag>
  );
}