import Reveal from "@/components/Reveal";
import { PrimaryButton, SecondaryButton } from "@/components/HomeUI";
import { routes } from "@/lib/site";

/* Reusable closing band. Keeps every page ending in the same place —
   a route to the Contact page — without duplicating markup. */
export default function CtaBand({
  heading = "Have a mission in mind?",
  body = "Tell us what you are trying to build, operate, or solve. We'll tell you what's possible.",
  primaryHref = routes.contact,
  primaryLabel = "Start a conversation",
  secondaryHref = routes.defense,
  secondaryLabel = "Explore our systems",
}: {
  heading?: string;
  body?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className="section relative overflow-hidden bg-navy-900 text-white">
      <div
        aria-hidden="true"
        className="grid-texture grid-texture-dark absolute inset-0"
      />
      <div className="shell relative text-center">
        <Reveal>
          <h2 className="type-h2 mx-auto max-w-[18ch]">{heading}</h2>
          <p className="type-lede mx-auto mt-6 text-white/70">{body}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 sm:gap-4">
            <PrimaryButton href={primaryHref}>{primaryLabel}</PrimaryButton>
            <SecondaryButton href={secondaryHref}>{secondaryLabel}</SecondaryButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}