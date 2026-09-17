"use client";

import {
  useEffect,
  useRef,
  useState,
  type ElementType,
  type ReactNode,
} from "react";

type RevealProps = {
  children: ReactNode;
  /** Stagger in ms. Keep siblings to 0 / 90 / 180 — beyond ~250ms it drags. */
  delay?: number;
  className?: string;
  /** Render as a semantic element instead of a div where appropriate. */
  as?: ElementType;
};

/**
 * Scroll-entrance wrapper.
 *
 * Unchanged in spirit from the original; three fixes:
 *  • Observes with a negative bottom rootMargin so the reveal fires slightly
 *    before the element is fully in view — it no longer "pops" on fast scrolls.
 *  • Falls back to visible if IntersectionObserver is missing, so content can
 *    never end up permanently at opacity-0.
 *  • Only the transform/opacity transition is declared, so it doesn't fight
 *    colour or shadow transitions on child elements.
 */
export default function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
      className={`transition-[opacity,transform] duration-700 ease-soft ${
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      } ${className}`}
    >
      {children}
    </Tag>
  );
}