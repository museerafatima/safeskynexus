import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import HeroBackgroundVideo from "@/components/HeroBackgroundVideo";
import SectionBackgroundVideo from "@/components/SectionBackgroundVideo";
import ImageSlideshow from "@/components/ImageSlideshow";
import Reveal from "@/components/Reveal";
import CapabilityExplorer from "@/components/CapabilityExplorer";
import { routes } from "@/lib/site";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Shield,
  Sparkles,
  Target,
  Zap,
} from "lucide-react";

/* Where the "technology" buttons lead. There is no /products page yet, so
   they point to the Defense page. When a products page exists, change this
   one line (for example to routes.products) and every button follows. */
const technologyHref = routes.defense;

/* Real photographs — bench build and live media coverage, shown together
   in ONE card as a single auto-crossfading slideshow. `intervalMs` sets how
   long the card lingers on each image. Drop new files into /public/images/
   and add their paths to the array — nothing else needs to change. */
const showcase = {
  intervalMs: 3500,
  tag: "Engineering & Media",
  images: [
    { src: "/images/rd-lab-build-1.jpg", alt: "SafeSky Nexus team soldering motor connections on the bench" },
    { src: "/images/rd-lab-build-2.jpg", alt: "SafeSky Nexus engineers assembling an airframe together" },
    { src: "/images/rd-lab-build-3.jpg", alt: "SafeSky Nexus autonomous platform on the bench with flight-planning software" },
    { src: "/images/media-feature.jpg", alt: "SafeSky Nexus presenting to ARY News at NUTECH" },
    { src: "/images/media-feature-2.jpg", alt: "SafeSky Nexus discussed on Suno News, covering the platform's commercial launch" },
    { src: "/images/media-feature-4.jpg", alt: "SafeSky Nexus featured on GTV News discussing autonomous aerial technology" },
  ],
  title: "Built in-house. Tested in the field. Shared across Pakistan.",
  description:
    "Every airframe is designed, wired and flown by our own team before it reaches the field, and our founder carries that work to broadcast interviews and industry events across the country.",
};

/* Shared classes so every interactive element gets a visible keyboard focus
   ring and respects reduced-motion preferences. */
const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange";

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="mb-4 flex items-center gap-3 sm:mb-5">
      <span className="h-px w-6 shrink-0 bg-orange sm:w-8" />

      <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-orange sm:text-xs">
        {children}
      </span>
    </div>
  );
}

function PrimaryButton({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-orange px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110 motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:w-auto ${focusRing}`}
    >
      {children}

      <ArrowUpRight
        size={17}
        className="shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
      />
    </Link>
  );
}

function SecondaryButton({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-white/40 hover:bg-white/5 motion-reduce:transition-none sm:w-auto ${focusRing}`}
    >
      {children}

      <ArrowRight
        size={17}
        className="shrink-0 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none"
      />
    </Link>
  );
}

export default function Home() {
  return (
    /* overflow-x-clip (not overflow-hidden) stops sideways scroll without
       creating a scroll container that would break sticky headers. */
    <main className="overflow-x-clip bg-navy-950 text-white">

      {/* ========================= HERO ========================= */}
      <section className="relative min-h-[calc(100svh-80px)] overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0 overflow-hidden bg-navy-950">
          <HeroBackgroundVideo />

          <div className="absolute inset-0 bg-black/55 sm:bg-black/45" />

          {/* Stronger scrim on small screens where text spans full width */}
          <div className="absolute inset-0 bg-linear-to-r from-black via-black/70 to-black/30 sm:via-black/55 sm:to-transparent" />

          <div className="absolute inset-0 bg-linear-to-t from-navy-950 via-transparent to-black/10" />
        </div>

        {/* Technical grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />

        <div className="relative mx-auto flex min-h-[calc(100svh-80px)] max-w-container items-end px-5 pb-16 pt-28 sm:px-6 sm:pb-20 lg:px-12 lg:pb-28">
          <Reveal className="w-full max-w-4xl">

            <div className="mb-6 flex items-center gap-3 sm:mb-8">
              <span className="h-2 w-2 shrink-0 rounded-full bg-orange shadow-[0_0_14px_rgba(230,117,20,0.8)]" />

              <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-white/75 sm:text-xs sm:tracking-[0.25em]">
                Autonomous Aerospace Technology
              </span>
            </div>

            <h1 className="max-w-5xl text-[2.6rem] font-semibold leading-[0.98] tracking-[-0.04em] min-[400px]:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7.2rem] xl:leading-[0.95]">
              Intelligence
              <br />
              <span className="text-white/55">in motion.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-white/75 sm:mt-8 sm:text-lg">
              SafeSky Nexus develops autonomous aerial and intelligent
              systems built to perceive, navigate, and operate in demanding
              environments.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
              <PrimaryButton href={technologyHref}>
                Explore technology
              </PrimaryButton>

              <SecondaryButton href="/contact">
                Talk to our team
              </SecondaryButton>
            </div>
          </Reveal>
        </div>

        {/* Scroll indicator + tag — inside the container so they align with
            the content on ultra-wide screens */}
        <div className="pointer-events-none absolute inset-x-0 bottom-8 hidden lg:block">
          <div className="mx-auto flex max-w-container items-center justify-between px-12">
            <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/40">
              SSN / 01
            </div>

            <div className="flex items-center gap-4 text-xs text-white/55">
              <span>SCROLL TO EXPLORE</span>
              <ArrowDown size={15} className="motion-safe:animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      {/* ========================= INTRO ========================= */}
      <section className="relative overflow-hidden bg-navy-950 py-20 sm:py-28 lg:py-40">

        {/* Full-bleed background video — layered scrims keep text readable
            on every screen size and blend into the sections above/below. */}
        <div className="absolute inset-0">
          <SectionBackgroundVideo
            src="/videos/intro-platform.mp4"
            poster="/images/intro-video-poster.jpg"
          />

          <div className="absolute inset-0 bg-navy-950/70 lg:bg-navy-950/55" />
          <div className="absolute inset-0 bg-linear-to-r from-navy-950 via-navy-950/70 to-navy-950/40 lg:to-navy-950/20" />
          <div className="absolute inset-0 bg-linear-to-t from-navy-950 via-transparent to-navy-950/40" />
        </div>

        <div className="relative mx-auto max-w-container px-5 sm:px-6 lg:px-12">

          <Reveal className="mb-10 lg:mb-16">
            <SectionLabel>SafeSky Nexus</SectionLabel>

            <p className="text-xs uppercase tracking-[0.18em] text-white/50 sm:text-sm">
              Engineering autonomous systems
            </p>
          </Reveal>

          <Reveal delay={90}>
            <h2 className="max-w-3xl text-balance text-3xl font-medium leading-[1.1] tracking-[-0.03em] text-white sm:text-4xl lg:text-6xl lg:leading-[1.08]">
              We create technology that gives autonomous platforms the
              ability to{" "}
              <span className="text-white/45">
                see, understand and move.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-white/65 sm:mt-8">
              From autonomous flight systems to intelligent navigation and
              mission control, our work brings hardware and software
              together into one connected technology ecosystem.
            </p>
          </Reveal>

        </div>
      </section>

      {/* ========================= FEATURED TECHNOLOGY ========================= */}
      <section className="bg-navy py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-container px-5 sm:px-6 lg:px-12">

          <Reveal className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end lg:mb-12">

            <div className="min-w-0">
              <SectionLabel>Featured Technology</SectionLabel>

              <h2 className="text-balance text-4xl font-semibold tracking-[-0.035em] sm:text-5xl lg:text-6xl">
                Built for autonomy.
              </h2>
            </div>

            <Link
              href={technologyHref}
              className={`group flex shrink-0 items-center gap-2 text-sm font-semibold text-white/70 transition-colors hover:text-white ${focusRing}`}
            >
              View all technology

              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1 motion-reduce:transition-none"
              />
            </Link>

          </Reveal>

          {/* Card grows with its content (flex column) so text can never be
              clipped on narrow screens; min-height keeps the cinematic ratio. */}
          <Reveal
            delay={90}
            className="group relative flex min-h-120 flex-col justify-end overflow-hidden rounded-2xl bg-black sm:min-h-136 lg:min-h-140"
          >

            <Image
              src="/images/featured-platform.jpg"
              alt="SafeSky Nexus autonomous aerial platform, front view showing its onboard camera, compute module, and motor assembly"
              fill
              sizes="(max-width: 1440px) 100vw, 1440px"
              className="object-cover object-center transition-transform duration-1200 ease-out group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
            />

            <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent sm:via-black/25" />

            <div className="absolute left-4 top-4 flex items-center gap-3 rounded-full border border-white/15 bg-black/30 px-4 py-2 backdrop-blur-md sm:left-6 sm:top-6">
              <span className="h-1.5 w-1.5 rounded-full bg-orange" />

              <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/70">
                Technology platform
              </span>
            </div>

            <div className="relative p-6 pt-24 sm:p-10 sm:pt-28 lg:p-14">

              <div className="max-w-2xl">

                <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-orange sm:text-xs">
                  Autonomous aerial systems
                </p>

                <h3 className="text-balance text-3xl font-semibold tracking-[-0.03em] sm:text-4xl lg:text-5xl">
                  Designed around intelligence.
                </h3>

                <p className="mt-4 max-w-xl text-sm leading-6 text-white/70 sm:mt-5 sm:text-base">
                  Aerial platforms engineered to combine perception,
                  navigation, control, and mission intelligence into a
                  connected autonomous system.
                </p>

                <Link
                  href={technologyHref}
                  className={`group mt-6 inline-flex min-h-11 items-center gap-3 text-sm font-semibold text-white sm:mt-8 ${focusRing}`}
                >
                  Discover the platform

                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none"
                  />
                </Link>

              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ========================= CAPABILITIES ========================= */}
      <section className="bg-white py-16 text-body sm:py-24 lg:py-32">
        <div className="mx-auto max-w-container px-5 sm:px-6 lg:px-12">

          {/* Side-by-side only from lg: at tablet widths the heading was
              squeezed into a very narrow column next to the paragraph. */}
          <Reveal className="mb-10 flex flex-col gap-5 sm:mb-12 lg:mb-16 lg:flex-row lg:items-end lg:justify-between lg:gap-10">

            <div className="min-w-0">
              <SectionLabel>Core capabilities</SectionLabel>

              <h2 className="max-w-2xl text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                The technology behind autonomous systems.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-muted lg:max-w-sm lg:pb-2 lg:text-right">
              Our approach combines sensing, intelligence, navigation, and
              control into integrated technology designed for real-world
              operation.
            </p>

          </Reveal>

          <Reveal delay={90}>
            <CapabilityExplorer />
          </Reveal>

        </div>
      </section>

      {/* ========================= APPLICATIONS ========================= */}
      <section className="border-t border-body/5 bg-white py-16 text-body sm:py-24 lg:py-32">
        <div className="mx-auto max-w-container px-5 sm:px-6 lg:px-12">

          <Reveal className="mb-10 max-w-3xl sm:mb-14">
            <SectionLabel>Where it matters</SectionLabel>

            <h2 className="text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Technology designed for environments where decisions matter.
            </h2>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-2">

            {/* Defense */}
            <Reveal delay={0} className="group relative flex min-h-104 flex-col justify-end overflow-hidden rounded-2xl bg-navy text-white sm:min-h-110">

              <Image
                src="/images/drone-autonomous-aerial.png"
                alt="Autonomous systems for demanding missions"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover opacity-70 transition-transform duration-700 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />

              {/* relative: content sits above the image and gradient */}
              <div className="relative p-6 pt-32 sm:p-8">

                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/20">
                  <Shield size={19} strokeWidth={1.5} />
                </div>

                <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  Defense &amp; Security
                </h3>

                <p className="mt-3 max-w-md text-sm leading-6 text-white/70">
                  Autonomous technology for surveillance, situational
                  awareness, and mission-focused operations.
                </p>

                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white">
                  Learn more

                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none"
                  />
                </span>

              </div>

              {/* Whole card is clickable */}
              <Link
                href={routes.defense}
                aria-label="Explore Defense & Security"
                className="absolute inset-0 z-10 rounded-2xl focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-orange"
              />
            </Reveal>

            {/* Industrial */}
            <Reveal delay={90} className="group relative flex min-h-104 flex-col justify-end overflow-hidden rounded-2xl bg-navy text-white sm:min-h-110">

              <Image
                src="/images/drone-mission-control.png"
                alt="Autonomous systems for industrial applications"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover opacity-70 transition-transform duration-700 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />

              <div className="relative p-6 pt-32 sm:p-8">

                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/20">
                  <Target size={19} strokeWidth={1.5} />
                </div>

                <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  Industrial Operations
                </h3>

                <p className="mt-3 max-w-md text-sm leading-6 text-white/70">
                  Intelligent aerial systems for inspection, monitoring,
                  mapping, and complex operational environments.
                </p>

                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white">
                  Learn more

                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none"
                  />
                </span>

              </div>

              {/* Whole card is clickable */}
              <Link
                href={routes.subConventional}
                aria-label="Explore Industrial Operations"
                className="absolute inset-0 z-10 rounded-2xl focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-orange"
              />
            </Reveal>

          </div>
        </div>
      </section>

      {/* ========================= ENGINEERING IN ACTION ========================= */}
      <section className="border-y border-body/5 bg-surface-soft py-16 text-body sm:py-24 lg:py-32">
        <div className="mx-auto max-w-container px-5 sm:px-6 lg:px-12">

          <Reveal className="mb-10 flex flex-col gap-5 sm:mb-12 lg:flex-row lg:items-end lg:justify-between lg:gap-10">

            <div className="min-w-0">
              <SectionLabel>Engineering in action</SectionLabel>

              <h2 className="text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                From the bench
                <br />
                <span className="text-body/40">to the field.</span>
              </h2>
            </div>

            <p className="max-w-xs text-sm leading-6 text-muted lg:pb-2 lg:text-right">
              Real hardware, built and flown by our own team. Not renders.
            </p>

          </Reveal>

          {/* One full-width card: a single slideshow of engineering and media
              photos. The caption block is in normal flow (flex column), so
              the card grows if the text needs more room on small screens
              instead of clipping it. */}
          <Reveal
            delay={90}
            className="group relative flex min-h-128 flex-col overflow-hidden rounded-2xl bg-navy-900 text-white sm:min-h-140 lg:min-h-150"
          >
            <ImageSlideshow
              images={showcase.images}
              intervalMs={showcase.intervalMs}
              className="absolute inset-0 h-full w-full"
              imageClassName="transition-transform duration-700 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
            />

            <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/95 via-black/50 to-black/10 sm:from-black/90 sm:via-black/35" />

            <div className="pointer-events-none relative flex flex-1 flex-col justify-between gap-16 p-5 sm:p-8 lg:p-12">

              <div className="inline-flex w-fit items-center gap-2.5 rounded-full border border-white/15 bg-black/30 px-4 py-2 backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/70">
                  {showcase.tag}
                </span>
              </div>

              <div className="grid gap-4 border-t border-white/15 pt-5 lg:grid-cols-[1.25fr_1fr] lg:items-end lg:gap-16 lg:pt-8">
                <h3 className="max-w-xl text-balance text-2xl font-semibold leading-[1.15] tracking-[-0.02em] sm:text-3xl lg:text-4xl">
                  {showcase.title}
                </h3>

                <p className="max-w-md text-sm leading-6 text-white/75 sm:text-base sm:leading-7">
                  {showcase.description}
                </p>
              </div>

            </div>
          </Reveal>

        </div>
      </section>

      {/* ========================= TECHNOLOGY STATEMENT ========================= */}
      <section className="relative overflow-hidden bg-navy-950 py-24 sm:py-32 lg:py-44">

        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange/10 blur-[110px] sm:h-125 sm:w-125 sm:blur-[140px]" />

        <Reveal className="relative mx-auto max-w-300 px-5 text-center sm:px-6">

          <Sparkles
            className="mx-auto mb-6 text-orange sm:mb-8"
            size={25}
            strokeWidth={1.3}
          />

          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-white/50 sm:text-xs">
            The SafeSky Nexus approach
          </p>

          <h2 className="mx-auto mt-6 max-w-5xl text-balance text-[2rem] font-medium leading-[1.08] tracking-[-0.04em] min-[400px]:text-4xl sm:mt-7 sm:text-5xl lg:text-7xl lg:leading-[1.05]">
            Hardware is only the beginning.

            <span className="block text-white/45">
              Intelligence is what moves it forward.
            </span>
          </h2>

        </Reveal>
      </section>

      {/* ========================= ABOUT ========================= */}
      <section className="bg-white py-16 text-body sm:py-24 lg:py-32">
        <div className="mx-auto max-w-container px-5 sm:px-6 lg:px-12">

          <Reveal className="mb-10 lg:mb-16">
            <SectionLabel>About SafeSky Nexus</SectionLabel>

            <p className="text-xs uppercase tracking-[0.18em] text-muted/80">
              Aerospace technology
            </p>
          </Reveal>

          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">

            <Reveal>

              <h2 className="max-w-4xl text-balance text-3xl font-semibold leading-[1.1] tracking-[-0.035em] sm:text-4xl lg:text-5xl">
                Building the next generation of autonomous systems.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:mt-7">
                SafeSky Nexus focuses on the engineering of autonomous aerial
                and intelligent systems, bringing together software,
                electronics, navigation, perception, and mission technologies.
              </p>

              <Link
                href="/about"
                className={`group mt-6 inline-flex min-h-11 items-center gap-3 text-sm font-semibold sm:mt-8 ${focusRing}`}
              >
                Discover SafeSky Nexus

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none"
                />
              </Link>

            </Reveal>

            {/* Landscape crop biased toward the lower-middle of the frame,
                since the source photo is square and the subject (hands,
                soldering iron, motors, wiring) sits below the two heads.
                Slightly taller ratio on phones so the subject isn't cut. */}
            <Reveal delay={90} className="group relative aspect-4/3 overflow-hidden rounded-2xl border border-body/10 bg-navy sm:aspect-16/10">
              <Image
                src="/images/about-team-build.jpg"
                alt="SafeSky Nexus engineers soldering motor connections during assembly"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                style={{ objectPosition: "center 62%" }}
              />

              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-navy-950 via-navy-950/10 to-transparent" />

              <div className="absolute left-4 top-4 inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-black/30 px-3 py-1.5 backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/70">
                  In the workshop
                </span>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* ========================= FINAL CTA ========================= */}
      <section className="relative overflow-hidden bg-navy py-24 sm:py-28 lg:py-40">

        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />

        <Reveal className="relative mx-auto max-w-275 px-5 text-center sm:px-6">

          <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 sm:mb-7">
            <Zap
              size={19}
              className="text-orange"
              strokeWidth={1.5}
            />
          </div>

          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-white/50 sm:text-xs">
            Start a conversation
          </p>

          <h2 className="mx-auto mt-5 max-w-4xl text-balance text-[2.2rem] font-semibold leading-[1.05] tracking-[-0.04em] min-[400px]:text-4xl sm:mt-6 sm:text-5xl lg:text-7xl">
            Have a mission in mind?
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-white/60 sm:mt-6">
            Tell us what you are trying to build, operate, or solve. Let&apos;s
            explore what autonomous technology can do for you.
          </p>

          <div className="mx-auto mt-8 flex max-w-sm flex-col gap-3 sm:mt-10 sm:max-w-none sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4">

            <PrimaryButton href="/contact">
              Contact SafeSky Nexus
            </PrimaryButton>

            <SecondaryButton href={technologyHref}>
              Explore our systems
            </SecondaryButton>

          </div>

        </Reveal>
      </section>

    </main>
  );
}