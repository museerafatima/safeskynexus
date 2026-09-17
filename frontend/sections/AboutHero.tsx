import Image from "next/image";
import Reveal from "@/components/Reveal";
import { EyebrowBadge, SecondaryButton, PrimaryButton } from "@/components/HomeUI";
import { routes } from "@/lib/site";

/* ==========================================================================
   ABOUT — HERO
   Was a light, centre-aligned hero, which made About feel like a different
   website to Home. It is now a dark, left-aligned hero using the same
   badge, grid texture, type scale and button pair as Home's hero, so the
   two pages open in the same voice.
   ========================================================================== */

export default function AboutHero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-950 text-white">
      <div
        aria-hidden="true"
        className="grid-texture grid-texture-dark absolute inset-0"
      />
      <div
        aria-hidden="true"
        className="glow-orange pointer-events-none absolute -right-24 top-0 h-128 w-lg max-w-none rounded-full blur-[120px]"
      />

      <div className="shell section relative">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
          {/* Text */}
          <Reveal>
            <EyebrowBadge>About us</EyebrowBadge>

            <h1 className="type-h1 max-w-[16ch]">
              Engineering the future of autonomous defense.
            </h1>

            <p className="type-body mt-7 text-white/75">
              SafeSky Nexus Private Limited &mdash; SSN is a Pakistan-based
              aerospace defense technology company dedicated to building the
              next generation of fully indigenous autonomous drone systems.
              Incorporated under the Securities and Exchange Commission of
              Pakistan (SECP) and incubated at the National Incubation Center
              for Aerospace Technologies (NICAT), NASTP Rawalpindi, our company
              was selected from thousands of applicants through a highly
              competitive nationwide program.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
              <PrimaryButton href={routes.contact}>Talk to our team</PrimaryButton>
              <SecondaryButton href="#mission">What we&apos;re building</SecondaryButton>
            </div>
          </Reveal>

          {/* Platform */}
          <Reveal delay={120} className="order-first lg:order-last">
            <div className="relative mx-auto w-full max-w-sm lg:max-w-lg">
              <Image
                src="/images/drone-hero.png"
                alt="SafeSky Nexus autonomous drone platform"
                width={640}
                height={480}
                priority
                sizes="(max-width: 1024px) 70vw, 480px"
                className="float-slow h-auto w-full drop-shadow-[0_30px_50px_rgba(8,9,42,0.7)]"
              />
            </div>
          </Reveal>
        </div>

        {/* Positioning statement — the one line that explains the whole company */}
        <Reveal delay={200}>
          <p className="mx-auto mt-14 max-w-3xl border-l-2 border-orange pl-6 text-lg leading-relaxed text-white/85 sm:text-xl lg:mt-20">
            Intelligent, vision-based unmanned aerial systems that operate
            without GPS — secure, reliable and mission-ready in the most
            challenging operational environments.
          </p>
        </Reveal>
      </div>
    </section>
  );
}