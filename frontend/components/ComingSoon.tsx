import { Clock } from "lucide-react";
import Reveal from "@/components/Reveal";

interface ComingSoonProps {
  title?: string;
  description?: string;
}

export default function ComingSoon({
  title = "Coming Soon",
  description = "We're working on something great. This page will be live shortly — check back soon.",
}: ComingSoonProps) {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-linear-to-b from-white via-slate-50 to-white">
      {/* Subtle background accents */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-orange/5 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-navy/5 blur-3xl" />
      </div>

      <Reveal className="relative text-center max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-orange/10 px-4 py-1.5">
            <Clock size={14} className="text-orange" />
            <span className="text-orange text-xs font-semibold tracking-[0.15em] uppercase">
              Coming Soon
            </span>
          </span>
        </div>

        <h2 className="text-navy text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.03em] mb-5 sm:mb-6">
          {title}
        </h2>

        <div className="mx-auto mb-6 h-px w-16 bg-orange/40" />

        <p className="text-body text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
          {description}
        </p>
      </Reveal>
    </section>
  );
}