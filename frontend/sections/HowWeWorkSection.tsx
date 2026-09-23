"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import { SectionLabel } from "@/components/HomeUI";

export default function HowWeWorkSection() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-20">
      <Reveal className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
        <div className="flex justify-center">
          <SectionLabel>Our Approach</SectionLabel>
        </div>
        <h2 className="text-navy text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.03em] mb-3 sm:mb-4">
          How We Work
        </h2>
        <p className="text-body text-sm sm:text-base leading-relaxed px-2 sm:px-0">
          Our development philosophy combines artificial intelligence,
          aerospace engineering, and computer vision to create intelligent
          autonomous systems capable of making real-time decisions without
          relying on external infrastructure.
        </p>
      </Reveal>

      <Reveal delay={150}>
        <button
          type="button"
          aria-label={playing ? "Playing video" : "Play video"}
          onClick={() => setPlaying(true)}
          className="group w-full max-w-4xl mx-auto h-48 sm:h-64 md:h-80 lg:h-96 bg-navy/5 rounded-xl sm:rounded-2xl flex items-center justify-center transition-all duration-300 hover:bg-navy/10 hover:scale-[1.01] active:scale-[0.99]"
        >
          <span className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-navy transition-all duration-300 group-hover:bg-orange group-hover:scale-110">
            <span className="w-0 h-0 border-t-10 sm:border-t-12 border-t-transparent border-b-10 sm:border-b-12 border-b-transparent border-l-16 sm:border-l-20 border-l-white ml-1.5 sm:ml-2" />
          </span>
        </button>
      </Reveal>
    </section>
  );
}