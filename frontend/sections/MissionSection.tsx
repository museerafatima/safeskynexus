import { Check } from "lucide-react";
import Reveal from "@/components/Reveal";
import ImageCollage from "@/components/ImageCollage";
import { SectionLabel } from "@/components/HomeUI";

const missionPoints = [
  "Indigenous aerospace innovation",
  "GPS-free autonomous navigation",
  "AI and computer vision",
  "Jamming-resistant security",
  "High-performance, affordable systems",
];

export default function MissionSection() {
  return (
    <section id="mission" className="section bg-surface">
      <div className="shell">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <ImageCollage
              align="right"
              main={{
                src: "/images/mission-main.png",
                alt: "SafeSky Nexus drone module on the bench",
              }}
              inset={{
                src: "/images/mission-overlay.png",
                alt: "Overhead view of a SafeSky Nexus airframe",
              }}
            />
          </Reveal>

          <Reveal delay={110}>
            <SectionLabel>Mission</SectionLabel>
            <h2 className="type-h2 text-navy">Our mission</h2>
            <p className="type-body mt-5 text-muted">
              We build intelligent autonomous aerial systems for defense and
              critical civilian sectors &mdash; reliable, secure, and fully
              indigenous, with no dependence on foreign navigation.
            </p>

            <ul className="mt-7 space-y-3">
              {missionPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange/12 text-orange"
                  >
                    <Check size={13} strokeWidth={2.5} />
                  </span>
                  <span className="text-[0.9375rem] leading-6 text-navy">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}