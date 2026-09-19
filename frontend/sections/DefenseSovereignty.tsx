import { Lock, Globe2, Satellite } from "lucide-react";
import Reveal from "@/components/Reveal";
import { SectionLabel } from "@/components/HomeUI";

const points = [
  {
    icon: Lock,
    title: "ITAR-Free by Design",
    description:
      "Built and owned entirely in-house, with no third-party export licenses standing between your program office and delivery.",
  },
  {
    icon: Globe2,
    title: "Sovereign Control",
    description:
      "Full-stack ownership of source code, navigation architecture, and hardware design \u2014 nothing is a black box licensed from abroad.",
  },
  {
    icon: Satellite,
    title: "No Foreign Dependency",
    description:
      "GNSS-denied navigation engineered in-house means mission continuity doesn't rely on infrastructure any adversary could disrupt.",
  },
];

export default function DefenseSovereignty() {
  return (
    <section className="bg-navy-800 py-20 sm:py-24 lg:py-32">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl mb-14">
          <SectionLabel>Indigenous by Design</SectionLabel>
          <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.03em]">
            Built at home. Trusted at home.
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-3 gap-8">
          {points.map((point, i) => (
            <Reveal key={point.title} delay={i * 100}>
              <point.icon size={22} strokeWidth={1.5} className="text-orange mb-4" />
              <h3 className="text-white font-semibold text-lg mb-2">{point.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{point.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}