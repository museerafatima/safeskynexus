"use client";

import { useState } from "react";
import Image from "next/image";
import { Brain, Cpu, Play, ScanEye } from "lucide-react";
import Reveal from "@/components/Reveal";
import { SectionLabel } from "@/components/HomeUI";

/* ==========================================================================
   ABOUT — HOW WE WORK

   WHAT CHANGED AND WHY
   The original section rendered a large play button whose onClick set a
   `playing` state that was never read — no video ever mounted, and once
   clicked the button announced "Playing video" to screen readers while
   nothing played. A control that does nothing is worse than no control.

   It is replaced by the three disciplines the section's own copy already
   names (AI, aerospace engineering, computer vision), which is real content
   rather than an empty frame.

   TO ADD THE VIDEO: fill in `walkthrough` below with a YouTube ID and a
   poster image in /public/images/. The facade then appears above the cards
   and only loads the YouTube iframe after a click — no third-party script
   is fetched on page load, which keeps the page fast for everyone who never
   presses play.
   ========================================================================== */

const walkthrough: { youtubeId: string; poster: string; title: string } | null =
  null;

const disciplines = [
  {
    icon: Brain,
    title: "Artificial intelligence",
    description:
      "Onboard decision-making, so a platform can act on what it sees without waiting for an operator.",
  },
  {
    icon: ScanEye,
    title: "Computer vision",
    description:
      "Visual navigation and targeting that works when satellite signals are jammed, spoofed or absent.",
  },
  {
    icon: Cpu,
    title: "Aerospace engineering",
    description:
      "Airframes, avionics and integration designed and assembled in-house, then flown by the team that built them.",
  },
];

export default function HowWeWorkSection() {
  const [playing, setPlaying] = useState(false);

  return (
    <section id="approach" className="section bg-surface-soft">
      <div className="shell">
        <Reveal className="max-w-3xl">
          <SectionLabel>Our approach</SectionLabel>
          <h2 className="type-h2 text-navy">How we work</h2>
          <p className="type-body mt-5 text-muted">
            Our development philosophy combines artificial intelligence,
            aerospace engineering and computer vision to create autonomous
            systems that make real-time decisions without relying on external
            infrastructure.
          </p>
        </Reveal>

        {/* Optional video facade */}
        {walkthrough && (
          <Reveal delay={110} className="mt-10">
            <div className="relative aspect-video w-full overflow-hidden rounded-panel bg-navy-950 shadow-lift">
              {playing ? (
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${walkthrough.youtubeId}?autoplay=1`}
                  title={walkthrough.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full border-0"
                />
              ) : (
                <button
                  type="button"
                  onClick={() => setPlaying(true)}
                  className="group absolute inset-0 h-full w-full"
                >
                  <Image
                    src={walkthrough.poster}
                    alt=""
                    fill
                    sizes="(max-width: 1280px) 100vw, 1180px"
                    loading="lazy"
                    className="object-cover opacity-80 transition-transform duration-700 ease-soft group-hover:scale-[1.03]"
                  />
                  <span className="absolute inset-0 bg-navy-950/35" />
                  <span className="absolute left-1/2 top-1/2 flex h-18 w-18 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-orange text-white shadow-glow transition-transform duration-300 ease-soft group-hover:scale-110">
                    <Play size={26} fill="currentColor" aria-hidden="true" />
                  </span>
                  <span className="sr-only">Play: {walkthrough.title}</span>
                </button>
              )}
            </div>
          </Reveal>
        )}

        {/* Disciplines */}
        <ul className="mt-10 grid gap-4 md:grid-cols-3">
          {disciplines.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={i * 90} as="li">
                <div className="group h-full rounded-panel border border-line bg-surface p-6 transition-[transform,box-shadow,border-color] duration-300 ease-soft hover:-translate-y-1 hover:border-orange/40 hover:shadow-lift sm:p-7">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-navy/6 text-navy transition-[background-color,color] duration-300 group-hover:bg-orange group-hover:text-white">
                    <Icon size={21} strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <h3 className="type-h3 mt-5 text-navy">{item.title}</h3>
                  <p className="mt-2.5 text-[0.9375rem] leading-6 text-muted">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}