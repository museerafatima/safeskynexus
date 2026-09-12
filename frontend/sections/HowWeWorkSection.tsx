"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";

export default function HowWeWorkSection() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-20">
      <Reveal className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
          <span className="text-navy">How We </span>
          <span className="text-orange">Work</span>
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
          className="w-full max-w-4xl mx-auto h-48 sm:h-64 md:h-80 lg:h-96 bg-gray-200 rounded-xl sm:rounded-2xl flex items-center justify-center hover:bg-gray-300 transition-all duration-300 hover:scale-[1.01] active:scale-[0.99]"
        >
          <span className="w-0 h-0 border-t-12 sm:border-t-16 border-t-transparent border-b-12 sm:border-b-16 border-b-transparent border-l-20 sm:border-l-26 border-l-navy ml-1.5 sm:ml-2 transition-transform duration-300 group-hover:scale-110" />
        </button>
      </Reveal>
    </section>
  );
}