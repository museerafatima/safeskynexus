import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import HeroBackgroundVideo from "@/components/HeroBackgroundVideo";
import ImageSlideshow from "@/components/ImageSlideshow";
import Reveal from "@/components/Reveal";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Eye,
  Layers3,
  Navigation,
  Radar,
  Shield,
  Sparkles,
  Target,
  Zap,
} from "lucide-react";

const capabilities = [
  {
    number: "01",
    icon: Eye,
    title: "Perception",
    description:
      "Real-time environmental awareness that enables autonomous systems to understand their surroundings.",
  },
  {
    number: "02",
    icon: Navigation,
    title: "Navigation",
    description:
      "Intelligent navigation technologies designed for reliable autonomous movement and mission execution.",
  },
  {
    number: "03",
    icon: Layers3,
    title: "Autonomy",
    description:
      "Integrated software and hardware systems that allow platforms to make decisions with reduced operator dependency.",
  },
  {
    number: "04",
    icon: Radar,
    title: "Mission Intelligence",
    description:
      "Technology focused on turning platform data into actionable information during operations.",
  },
];

/* Real photographs — bench build and live media coverage.
   `images` accepts one entry (static) or several (auto-crossfading).
   `intervalMs` sets how long each card lingers on an image before
   crossfading to the next. Drop new files into /public/images/ and add
   their paths to the array — nothing else needs to change. */
const proofPoints = [
  {
    images: [
      { src: "/images/rd-lab-build-1.jpg", alt: "SafeSky Nexus team soldering motor connections on the bench" },
      { src: "/images/rd-lab-build-2.jpg", alt: "SafeSky Nexus engineers assembling an airframe together" },
      { src: "/images/rd-lab-build-3.jpg", alt: "SafeSky Nexus autonomous platform on the bench with flight-planning software" },
    ],
    intervalMs: 3000,
    category: "ENGINEERING",
    title: "Built in-house, tested in-house",
    description:
      "Every airframe starts on our own bench — designed, wired, and flown by the team before it reaches the field.",
  },
  {
    images: [
      { src: "/images/media-feature.jpg", alt: "SafeSky Nexus presenting to ARY News at NUTECH" },
      { src: "/images/media-feature-2.jpg", alt: "SafeSky Nexus discussed on Suno News, covering the platform's commercial launch" },
      { src: "/images/media-feature-3.jpg", alt: "SafeSky Nexus founder speaking with BOL News at a technology expo" },
      { src: "/images/media-feature-4.jpg", alt: "SafeSky Nexus featured on GTV News discussing autonomous aerial technology" },
    ],
    intervalMs: 3000,
    category: "MEDIA & PRESS",
    title: "SafeSky Nexus, in the media",
    description:
      "From broadcast interviews to industry events, our founder shares the vision behind SafeSky Nexus with audiences across Pakistan.",
  },
];

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <span className="h-px w-8 bg-orange" />

      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-orange">
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
      className="group inline-flex items-center gap-3 rounded-full bg-orange px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110"
    >
      {children}

      <ArrowUpRight
        size={17}
        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
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
      className="group inline-flex items-center gap-3 rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-white/40 hover:bg-white/5"
    >
      {children}

      <ArrowRight
        size={17}
        className="transition-transform duration-300 group-hover:translate-x-1"
      />
    </Link>
  );
}

export default function Home() {
  return (
    <main className="overflow-hidden bg-navy-950 text-white">

      {/* ========================= HERO ========================= */}
      <section className="relative min-h-[calc(100vh-80px)] overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0 overflow-hidden bg-navy-950">
          <HeroBackgroundVideo />

          <div className="absolute inset-0 bg-black/45" />

          <div className="absolute inset-0 bg-linear-to-r from-black via-black/55 to-transparent" />

          <div className="absolute inset-0 bg-linear-to-t from-navy-950 via-transparent to-black/10" />
        </div>

        {/* Technical grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <div className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-container items-end px-6 pb-20 pt-28 lg:px-12 lg:pb-24">
          <Reveal className="max-w-4xl">

            <div className="mb-8 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-orange shadow-[0_0_14px_rgba(230,117,20,0.8)]" />

              <span className="text-xs font-medium uppercase tracking-[0.25em] text-white/70">
                Autonomous Aerospace Technology
              </span>
            </div>

            <h1 className="max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.045em] sm:text-6xl md:text-7xl lg:text-[7.2rem]">
              Intelligence
              <br />
              <span className="text-white/55">in motion.</span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-7 text-white/65 sm:text-lg">
              SafeSky Nexus develops autonomous aerial and intelligent
              systems built to perceive, navigate, and operate in demanding
              environments.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <PrimaryButton href="/products">
                Explore technology
              </PrimaryButton>

              <SecondaryButton href="/contact">
                Talk to our team
              </SecondaryButton>
            </div>
          </Reveal>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 right-6 hidden items-center gap-4 text-xs text-white/45 lg:flex">
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown size={15} className="animate-bounce" />
        </div>

        <div className="absolute bottom-8 left-6 hidden text-[10px] font-mono uppercase tracking-[0.2em] text-white/30 lg:block">
          SSN / 01
        </div>
      </section>

      {/* ========================= INTRO ========================= */}
      <section className="relative bg-navy-950 py-28 lg:py-40">
        <div className="mx-auto max-w-container px-6 lg:px-12">

          <Reveal className="mb-12 lg:mb-16">
            <SectionLabel>SafeSky Nexus</SectionLabel>

            <p className="text-sm uppercase tracking-[0.18em] text-white/35">
              Engineering autonomous systems
            </p>
          </Reveal>

          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">

            <Reveal delay={90}>
              <h2 className="max-w-2xl text-3xl font-medium leading-[1.08] tracking-[-0.03em] text-white sm:text-4xl lg:text-6xl">
                We create technology that gives autonomous platforms the
                ability to{" "}
                <span className="text-white/35">
                  see, understand and move.
                </span>
              </h2>

              <p className="mt-8 max-w-xl text-base leading-7 text-white/50">
                From autonomous flight systems to intelligent navigation and
                mission control, our work brings hardware and software
                together into one connected technology ecosystem.
              </p>
            </Reveal>

            {/* Exploded-assembly render — same card language used elsewhere
                on the page (rounded corners, subtle border, bottom fade,
                pill tag with the brand dot) so it reads as part of this
                site rather than a dropped-in graphic. */}
            <Reveal delay={160} className="group relative aspect-16/10 overflow-hidden rounded-2xl border border-white/10 bg-black">
              <Image
                src="/images/exploded-assembly.jpg"
                alt="Exploded 3D render of a SafeSky Nexus drone frame, showing its motors, arms, and internal wiring separated for assembly"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black via-black/10 to-transparent" />

              <div className="absolute left-5 top-5 inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-black/30 px-4 py-2 backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/70">
                  System architecture
                </span>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* ========================= FEATURED TECHNOLOGY ========================= */}
      <section className="bg-navy py-20 lg:py-28">
        <div className="mx-auto max-w-container px-6 lg:px-12">

          <Reveal className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">

            <div>
              <SectionLabel>Featured Technology</SectionLabel>

              <h2 className="text-4xl font-semibold tracking-[-0.035em] sm:text-5xl lg:text-6xl">
                Built for autonomy.
              </h2>
            </div>

            <Link
              href="/products"
              className="group flex items-center gap-2 text-sm font-semibold text-white/60 transition-colors hover:text-white"
            >
              View all technology

              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

          </Reveal>

          <Reveal delay={90} className="group relative min-h-140 overflow-hidden rounded-2xl bg-black">

            {/* Blurred, scaled-up copy of the same clip fills the frame edge
                to edge. Needed because the source clip is portrait
                (720x1280) with captions burned into the footage ("SafeSky
                Nexus", the site URL) — a plain object-cover crop on a wide
                card would very likely cut those captions off, along with
                a large part of the drone itself. This layer is purely
                decorative backdrop, so it's hidden from screen readers. */}
            <Image
              src="/images/drone-hero.png"
              alt=""
              aria-hidden="true"
              fill
              sizes="100vw"
              className="scale-110 object-cover object-center blur-2xl brightness-[0.55] transition-transform duration-1200 ease-out group-hover:scale-[1.18]"
            />

            {/* The actual video, shown complete and uncropped — every
                caption and the full drone stay visible regardless of the
                card's width. */}
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/images/drone-hero.png"
              aria-label="SafeSky Nexus autonomous aerial platform being assembled and readied for flight"
              className="absolute inset-0 h-full w-full object-contain object-center"
            >
              <source src="/videos/featured-platform.mp4" type="video/mp4" />
            </video>

            <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black via-black/25 to-transparent" />

            <div className="absolute left-6 top-6 flex items-center gap-3 rounded-full border border-white/15 bg-black/30 px-4 py-2 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-orange" />

              <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/70">
                Technology platform
              </span>
            </div>

            <div className="pointer-events-none absolute bottom-0 left-0 right-0 p-7 sm:p-10 lg:p-14">

              <div className="pointer-events-auto max-w-2xl">

                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-orange">
                  Autonomous aerial systems
                </p>

                <h3 className="text-3xl font-semibold tracking-[-0.03em] sm:text-4xl lg:text-5xl">
                  Designed around intelligence.
                </h3>

                <p className="mt-5 max-w-xl text-sm leading-6 text-white/60 sm:text-base">
                  Aerial platforms engineered to combine perception,
                  navigation, control, and mission intelligence into a
                  connected autonomous system.
                </p>

                <Link
                  href="/products"
                  className="group mt-8 inline-flex items-center gap-3 text-sm font-semibold text-white"
                >
                  Discover the platform

                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ========================= CAPABILITIES ========================= */}
      <section className="bg-white py-24 text-body lg:py-32">
        <div className="mx-auto max-w-container px-6 lg:px-12">

          <div className="grid gap-14 lg:grid-cols-[0.65fr_1.35fr]">

            <Reveal>
              <SectionLabel>Core capabilities</SectionLabel>

              <h2 className="max-w-md text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-5xl">
                The technology behind autonomous systems.
              </h2>

              <p className="mt-6 max-w-sm text-sm leading-6 text-muted">
                Our approach combines sensing, intelligence, navigation, and
                control into integrated technology designed for real-world
                operation.
              </p>
            </Reveal>

            <div className="divide-y divide-body/10 border-y border-body/10">

              {capabilities.map((capability, index) => {
                const Icon = capability.icon;

                return (
                  <Reveal key={capability.number} delay={index * 80}>
                    <div
                      className="group grid gap-6 py-8 transition-all duration-300 hover:px-3 md:grid-cols-[70px_60px_1fr] md:items-start"
                    >
                      <span className="font-mono text-xs text-muted/50">
                        {capability.number}
                      </span>

                      <div className="flex h-11 w-11 items-center justify-center rounded-full border border-body/10 transition-all duration-300 group-hover:border-orange group-hover:bg-orange group-hover:text-white">
                        <Icon size={19} strokeWidth={1.5} />
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold tracking-tight">
                          {capability.title}
                        </h3>

                        <p className="mt-2 max-w-xl text-sm leading-6 text-muted">
                          {capability.description}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}

            </div>
          </div>
        </div>
      </section>

      {/* ========================= APPLICATIONS ========================= */}
      <section className="border-t border-body/5 bg-white py-24 text-body lg:py-32">
        <div className="mx-auto max-w-container px-6 lg:px-12">

          <Reveal className="mb-14 max-w-3xl">
            <SectionLabel>Where it matters</SectionLabel>

            <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Technology designed for environments where decisions matter.
            </h2>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-2">

            {/* Defense */}
            <Reveal delay={0} className="group relative min-h-110 overflow-hidden rounded-2xl bg-navy text-white">

              <Image
                src="/images/drone-autonomous-aerial.png"
                alt="Autonomous systems for demanding missions"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover opacity-70 transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black via-black/30 to-transparent" />

              <div className="absolute bottom-8 left-8 right-8">

                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/20">
                  <Shield size={19} strokeWidth={1.5} />
                </div>

                <h3 className="text-3xl font-semibold tracking-tight">
                  Defense &amp; Security
                </h3>

                <p className="mt-3 max-w-md text-sm leading-6 text-white/55">
                  Autonomous technology for surveillance, situational
                  awareness, and mission-focused operations.
                </p>

              </div>
            </Reveal>

            {/* Industrial */}
            <Reveal delay={90} className="group relative min-h-110 overflow-hidden rounded-2xl bg-navy text-white">

              <Image
                src="/images/drone-mission-control.png"
                alt="Autonomous systems for industrial applications"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover opacity-70 transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black via-black/30 to-transparent" />

              <div className="absolute bottom-8 left-8 right-8">

                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/20">
                  <Target size={19} strokeWidth={1.5} />
                </div>

                <h3 className="text-3xl font-semibold tracking-tight">
                  Industrial Operations
                </h3>

                <p className="mt-3 max-w-md text-sm leading-6 text-white/55">
                  Intelligent aerial systems for inspection, monitoring,
                  mapping, and complex operational environments.
                </p>

              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* ========================= ENGINEERING IN ACTION ========================= */}
      <section className="border-y border-body/5 bg-surface-soft py-24 text-body lg:py-32">
        <div className="mx-auto max-w-container px-6 lg:px-12">

          <Reveal className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">

            <div>
              <SectionLabel>Engineering in action</SectionLabel>

              <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                From the bench
                <br />
                <span className="text-body/40">to the field.</span>
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-6 text-muted">
              Real hardware, built and flown by our own team — not renders.
            </p>

          </Reveal>

          <div className="grid gap-5 md:grid-cols-2">

            {proofPoints.map((point, index) => (
              <Reveal
                key={point.title}
                delay={index * 90}
                className="group relative min-h-110 overflow-hidden rounded-2xl bg-navy-900 text-white"
              >
                <ImageSlideshow
                  images={point.images}
                  intervalMs={point.intervalMs}
                  className="absolute inset-0 h-full w-full"
                  imageClassName="transition-transform duration-700 group-hover:scale-105"
                />

                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />

                <span className="pointer-events-none absolute left-6 top-6 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60">
                  {point.category}
                </span>

                <div className="pointer-events-none absolute bottom-8 left-8 right-8">
                  <h3 className="text-3xl font-semibold tracking-tight">
                    {point.title}
                  </h3>

                  <p className="mt-3 max-w-md text-sm leading-6 text-white/55">
                    {point.description}
                  </p>
                </div>
              </Reveal>
            ))}

          </div>
        </div>
      </section>

      {/* ========================= TECHNOLOGY STATEMENT ========================= */}
      <section className="relative overflow-hidden bg-navy-950 py-32 lg:py-44">

        <div className="absolute left-1/2 top-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange/10 blur-[140px]" />

        <Reveal className="relative mx-auto max-w-300 px-6 text-center">

          <Sparkles
            className="mx-auto mb-8 text-orange"
            size={25}
            strokeWidth={1.3}
          />

          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/35">
            The SafeSky Nexus approach
          </p>

          <h2 className="mx-auto mt-7 max-w-5xl text-4xl font-medium leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-7xl">
            Hardware is only the beginning.

            <span className="block text-white/35">
              Intelligence is what moves it forward.
            </span>
          </h2>

        </Reveal>
      </section>

      {/* ========================= ABOUT ========================= */}
      <section className="bg-white py-24 text-body lg:py-32">
        <div className="mx-auto max-w-container px-6 lg:px-12">

          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">

            <Reveal>
              <SectionLabel>About SafeSky Nexus</SectionLabel>

              <p className="text-xs uppercase tracking-[0.18em] text-muted/70">
                Aerospace technology
              </p>
            </Reveal>

            <Reveal delay={90}>

              <h2 className="max-w-4xl text-3xl font-semibold leading-[1.1] tracking-[-0.035em] sm:text-4xl lg:text-5xl">
                Building the next generation of autonomous systems.
              </h2>

              <p className="mt-7 max-w-2xl text-base leading-7 text-muted">
                SafeSky Nexus focuses on the engineering of autonomous aerial
                and intelligent systems, bringing together software,
                electronics, navigation, perception, and mission technologies.
              </p>

              <Link
                href="/about"
                className="group mt-8 inline-flex items-center gap-3 text-sm font-semibold"
              >
                Discover SafeSky Nexus

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

            </Reveal>
          </div>
        </div>
      </section>

      {/* ========================= FINAL CTA ========================= */}
      <section className="relative overflow-hidden bg-navy py-28 lg:py-40">

        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        <Reveal className="relative mx-auto max-w-275 px-6 text-center">

          <div className="mx-auto mb-7 flex h-12 w-12 items-center justify-center rounded-full border border-white/10">
            <Zap
              size={19}
              className="text-orange"
              strokeWidth={1.5}
            />
          </div>

          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/35">
            Start a conversation
          </p>

          <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-7xl">
            Have a mission in mind?
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-white/45">
            Tell us what you are trying to build, operate, or solve. Let&apos;s
            explore what autonomous technology can do for you.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <PrimaryButton href="/contact">
              Contact SafeSky Nexus
            </PrimaryButton>

            <SecondaryButton href="/products">
              Explore our systems
            </SecondaryButton>

          </div>

        </Reveal>
      </section>

    </main>
  );
}