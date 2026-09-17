import Reveal from "@/components/Reveal";
import { contact } from "@/lib/site";

/* ==========================================================================
   ABOUT — CREDENTIALS BAND
   Sits directly under the hero on the same dark run, so the hero and its
   supporting facts read as one unit rather than two stacked sections.

   NOTE: the third item's caption previously read "NASTP,Islamabad" while the
   footer and Contact page both said Rawalpindi. It now draws from
   lib/site.ts so there is only one answer. Verify it there.
   ========================================================================== */

type Stat = { label: string; value: string; caption: string };

const stats: Stat[] = [
  { label: "Incorporated as", value: "SECP", caption: "Private Limited" },
  { label: "Incubated at", value: "NICAT", caption: contact.campus },
  { label: "Selected among top", value: "2%", caption: "nationwide applicants" },
  { label: "Pakistan-based", value: "Defense", caption: "technology company" },
];

export default function StatsBar() {
  return (
    <section
      aria-label="Company credentials"
      className="section-tight border-t border-white/10 bg-navy-900 text-white"
    >
      <div className="shell">
        <ul className="grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 80} as="li">
              <div className="group h-full border-t border-white/15 pt-5 transition-colors duration-300 hover:border-orange">
                <p className="text-xs uppercase tracking-[0.16em] text-white/50">
                  {stat.label}
                </p>
                <p className="mt-3 text-4xl font-bold leading-none tracking-[-0.03em] text-orange transition-transform duration-300 ease-soft group-hover:-translate-y-0.5 sm:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-white/75">{stat.caption}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}