import Reveal from "@/components/Reveal";
import { SectionLabel } from "@/components/HomeUI";

export default function DefenseWhyUs() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <Reveal>
            <SectionLabel>Why Defense Forces Choose SSN</SectionLabel>
            <p className="text-xs uppercase tracking-[0.18em] text-muted/70">
              Mission-ready by design
            </p>
          </Reveal>

          <Reveal delay={150}>
            <h2 className="text-navy max-w-4xl text-3xl sm:text-4xl lg:text-5xl font-semibold leading-[1.1] tracking-[-0.03em]">
              Electronic warfare doesn&rsquo;t pause a mission &mdash;{" "}
              <span className="text-muted">neither do we.</span>
            </h2>

            <p className="mt-7 max-w-2xl text-body text-base leading-relaxed">
              Every platform we build shares one indigenous perception and
              navigation stack, engineered to keep flying, tracking, and
              reporting when satellite navigation is degraded, jammed, or
              denied entirely. It&rsquo;s the same core whether the mission
              is surveillance, interception, or ground reconnaissance.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}