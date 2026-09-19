import Reveal from "@/components/Reveal";
import { PrimaryButton, SecondaryButton } from "@/components/HomeUI";

export default function DefenseCTA() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-24 sm:py-28 lg:py-36">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
        aria-hidden="true"
      />

      <Reveal className="relative max-w-container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/35">
          Ready to brief your program office?
        </p>

        <h2 className="mx-auto mt-6 max-w-3xl text-white text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.03em]">
          Let&rsquo;s talk about what your mission requires.
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-white/45 text-sm sm:text-base leading-relaxed">
          Whether it&rsquo;s a technical evaluation, a live demonstration, or
          a procurement conversation &mdash; our team is ready.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <PrimaryButton href="/contact">Contact SafeSky Nexus</PrimaryButton>
          <SecondaryButton href="/products">Explore All Systems</SecondaryButton>
        </div>
      </Reveal>
    </section>
  );
}