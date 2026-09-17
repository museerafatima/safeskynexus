import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

/* ==========================================================================
   SHARED VISUAL LANGUAGE
   Home, About and Contact all import from this file. Nothing here is
   page-specific, and no page redefines a button or label locally any more.
   ========================================================================== */

type Tone = "dark" | "light";

/* --------------------------------------------------------------------------
   SectionLabel — the accent rule + label that opens a section.
   Used on light and dark surfaces alike; orange clears AA on both.
   -------------------------------------------------------------------------- */
export function SectionLabel({
  children,
  className = "",
}: {
  children: ReactNode;
  /** Kept for backwards compatibility with earlier call sites; unused. */
  tone?: Tone;
  className?: string;
}) {
  return (
    <div className={`mb-5 flex items-center gap-3 ${className}`}>
      <span className="h-px w-8 shrink-0 bg-orange" aria-hidden="true" />
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-orange">
        {children}
      </span>
    </div>
  );
}

/* --------------------------------------------------------------------------
   EyebrowBadge — the pill with the live dot. Reserved for page heroes only,
   so it keeps its weight instead of appearing above every heading.
   -------------------------------------------------------------------------- */
export function EyebrowBadge({
  children,
  dark = true,
}: {
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <div
      className={`mb-7 inline-flex items-center gap-3 rounded-full border px-4 py-2 ${
        dark
          ? "border-white/15 bg-white/4 text-white/80"
          : "border-navy/15 bg-navy/3 text-navy"
      }`}
    >
      <span
        className="h-1.5 w-1.5 shrink-0 rounded-full bg-orange shadow-[0_0_12px_rgba(230,117,20,0.9)]"
        aria-hidden="true"
      />
      <span className="text-[0.6875rem] font-semibold uppercase tracking-[0.22em]">
        {children}
      </span>
    </div>
  );
}

/* --------------------------------------------------------------------------
   Buttons
   `min-h-12` guarantees a 48px touch target on every screen size.
   -------------------------------------------------------------------------- */
const buttonBase =
  "group inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full px-6 py-3.5 text-sm font-semibold transition-[transform,box-shadow,background-color,border-color] duration-300 ease-soft active:translate-y-0 active:scale-[0.98]";

export function PrimaryButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`${buttonBase} bg-orange text-white shadow-glow hover:-translate-y-0.5 hover:bg-orange-600 hover:shadow-[0_16px_34px_-10px_rgba(230,117,20,0.72)] ${className}`}
    >
      {children}
      <ArrowUpRight
        size={17}
        aria-hidden="true"
        className="transition-transform duration-300 ease-soft group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </Link>
  );
}

export function SecondaryButton({
  href,
  children,
  dark = true,
  className = "",
}: {
  href: string;
  children: ReactNode;
  /** true = sitting on a navy surface, false = sitting on white. */
  dark?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`${buttonBase} border ${
        dark
          ? "border-white/25 text-white hover:-translate-y-0.5 hover:border-white/50 hover:bg-white/[0.07]"
          : "border-navy/25 text-navy hover:-translate-y-0.5 hover:border-navy/50 hover:bg-navy/4"
      } ${className}`}
    >
      {children}
      <ArrowRight
        size={17}
        aria-hidden="true"
        className="transition-transform duration-300 ease-soft group-hover:translate-x-1"
      />
    </Link>
  );
}

/* --------------------------------------------------------------------------
   TextLink — the quiet inline "keep reading" affordance.
   -------------------------------------------------------------------------- */
export function TextLink({
  href,
  children,
  dark = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex min-h-11 items-center gap-2.5 text-sm font-semibold transition-colors duration-200 ${
        dark ? "text-white/75 hover:text-white" : "text-navy hover:text-orange"
      } ${className}`}
    >
      {children}
      <ArrowRight
        size={16}
        aria-hidden="true"
        className="transition-transform duration-300 ease-soft group-hover:translate-x-1"
      />
    </Link>
  );
}

/* --------------------------------------------------------------------------
   Surface — the alternating background bands that give the site its rhythm.
   Keeping them in one component is what stops sections drifting apart.
   -------------------------------------------------------------------------- */
export function Surface({
  as: Tag = "section",
  variant = "white",
  className = "",
  children,
  ...rest
}: {
  as?: "section" | "div";
  variant?: "white" | "soft" | "navy" | "navy-deep";
  className?: string;
  children: ReactNode;
  id?: string;
}) {
  const variants = {
    white: "bg-surface text-body",
    soft: "bg-surface-soft text-body",
    navy: "bg-navy-900 text-white",
    "navy-deep": "bg-navy-950 text-white",
  } as const;

  return (
    <Tag className={`${variants[variant]} ${className}`} {...rest}>
      {children}
    </Tag>
  );
}