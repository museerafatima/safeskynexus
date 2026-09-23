"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
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
        <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-xl sm:rounded-2xl overflow-hidden bg-navy-950">
          {playing ? (
            <video
              controls
              autoPlay
              playsInline
              preload="metadata"
              poster="/images/how-we-work-poster.jpg"
              className="absolute inset-0 h-full w-full object-contain bg-black"
            >
              <source src="/videos/how-we-work.mp4" type="video/mp4" />
            </video>
          ) : (
            <button
              type="button"
              aria-label="Play video"
              onClick={() => setPlaying(true)}
              className="group absolute inset-0 h-full w-full"
            >
              <Image
                src="/images/how-we-work-poster.jpg"
                alt="SafeSky Nexus engineers assembling and testing a drone platform"
                fill
                sizes="(max-width: 1024px) 100vw, 896px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <span className="absolute inset-0 bg-navy-950/30 transition-colors duration-300 group-hover:bg-navy-950/20" />

              <span className="absolute left-1/2 top-1/2 flex h-16 w-16 sm:h-20 sm:w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-orange text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                <Play size={26} className="ml-1" fill="currentColor" aria-hidden="true" />
              </span>
            </button>
          )}
        </div>
      </Reveal>
    </section>
  );
}