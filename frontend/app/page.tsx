import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  Eye,
  Layers3,
  Navigation,
  Radar,
  Shield,
  Target,
} from "lucide-react";
import TiltCard from "@/components/TiltCard";
import ParallaxImage from "@/components/ParallaxImage";
import Reveal from "@/components/Reveal";
import {
  EyebrowBadge,
  PrimaryButton,
  SecondaryButton,
  SectionLabel,
  Surface,
  TextLink,
} from "@/components/HomeUI";
import { routes } from "@/lib/site";

/* ==========================================================================
   HOME
   Section rhythm (surface alternation is what unifies the three pages):
     1  Hero .................. navy-deep
     2  Positioning ........... navy-deep   (continuous with the hero)
     3  Featured platform ..... navy
     4  Capabilities .......... white
     5  Ecosystem ............. navy-deep
     6  Applications .......... white
     7  Engineering in action . soft
     8  About teaser .......... white
     9  Closing statement + CTA navy
   ========================================================================== */

/* The "Explore technology" links previously pointed at /products, which is not
   a route in this app (the nav ships /defense and /sub-conventional-warfare).
   They now point at the closest real destination. Change this one constant if
   a dedicated products page is added later. */
const explorePath = routes.defense;

const products = [
  {
    name: "Autonomous aerial systems",
    category: "Aerial platform",
    description:
      "Intelligent aerial platforms designed around autonomous flight, real-time perception, and mission-ready control.",
    image: "/images/drone-hero.png",
  },
  {
    name: "Autonomous navigation",
    category: "Navigation system",
    description:
      "Advanced navigation built to help autonomous systems understand and respond to their environment.",
    image: "/images/drone-navigation.png",
  },
  {
    name: "Mission control",
    category: "Control system",
    description:
      "A connected control layer for monitoring, operating, and managing autonomous platforms.",
    image: "/images/mission-control.png",
  },
];

const capabilities = [
  {
    icon: Eye,
    title: "Perception",
    description:
      "Real-time environmental awareness that lets autonomous systems understand their surroundings.",
  },
  {
    icon: Navigation,
    title: "Navigation",
    description:
      "Navigation technologies built for reliable autonomous movement and mission execution.",
  },
  {
    icon: Layers3,
    title: "Autonomy",
    description:
      "Integrated software and hardware that lets platforms decide with less operator dependency.",
  },
  {
    icon: Radar,
    title: "Mission intelligence",
    description:
      "Turning platform data into information an operator can act on, during the operation.",
  },
];

const applications = [
  {
    icon: Shield,
    title: "Defense & security",
    description:
      "Autonomous technology for surveillance, situational awareness, and mission-focused operations.",
    image: "/images/defense-drone.png",
    alt: "Autonomous system configured for a defence mission",
    href: routes.defense,
  },
  {
    icon: Target,
    title: "Industrial operations",
    description:
      "Intelligent aerial systems for inspection, monitoring, mapping, and complex operational environments.",
    image: "/images/industrial-drone.png",
    alt: "Autonomous system configured for industrial inspection",
    href: routes.subConventional,
  },
];

/* Real photographs — bench build and live media coverage.
   Drop the two files into /public/images/ using these exact names. */
const proofPoints = [
  {
    image: "/images/rd-lab-build.jpg",
    category: "Engineering",
    title: "Built in-house, tested in-house",
    description:
      "Every airframe starts on our own bench — designed, wired, and flown by the team before it reaches the field.",
  },
  {
    image: "/images/media-feature.jpg",
    category: "In the field",
    title: "SafeSky Neuron, in the spotlight",
    description:
      "Presenting our autonomous obstacle-avoidance platform live at NUTECH, drawing national media coverage.",
  },
];

export default function Home() {
  return (
    <main id="content">
      {/* ==================== 1. HERO ==================== */}
      <section className="relative isolate bg-navy-950 text-white">
        <div className="absolute inset-0 -z-10">
          <ParallaxImage
            src="/images/drone-hero.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
            intensity={0.06}
          />
          {/* Three stacked scrims: overall darkening, a left-weighted ramp so
              the headline always has contrast, and a base fade into the next
              section so the seam disappears. */}
          <div className="absolute inset-0 bg-navy-950/55" />
          <div className="absolute inset-0 bg-linear-to-r from-navy-950 via-navy-950/70 to-navy-950/10" />
          <div className="absolute inset-0 bg-linear-to-t from-navy-950 via-transparent to-navy-950/40" />
          <div
            aria-hidden="true"
            className="grid-texture grid-texture-dark absolute inset-0"
          />
        </div>

        <div className="shell flex min-h-[min(88svh,46rem)] flex-col justify-end pb-16 pt-20 sm:pb-20 lg:min-h-[min(90svh,52rem)] lg:pb-24">
          <Reveal>
            <EyebrowBadge>Autonomous aerospace technology</EyebrowBadge>

            <h1 className="type-display max-w-[16ch]">
              Intelligence
              <br />
              <span className="text-white/45">in motion.</span>
            </h1>

            <p className="type-lede mt-7 text-white/75">
              SafeSky Nexus develops autonomous aerial and intelligent systems
              built to perceive, navigate, and operate in demanding
              environments.
            </p>

            <div className="mt-9 flex flex-wrap gap-3 sm:gap-4">
              <PrimaryButton href={explorePath}>
                Explore the technology
              </PrimaryButton>
              <SecondaryButton href={routes.contact}>
                Talk to our team
              </SecondaryButton>
            </div>
          </Reveal>
        </div>

        {/* Desktop-only scroll cue. Hidden on touch, where it means nothing. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-7 hidden items-center justify-between lg:flex"
        >
          <div className="shell flex w-full items-center justify-between">
            <span className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-white/35">
              SSN / 01
            </span>
            <span className="flex items-center gap-3 text-[0.6875rem] uppercase tracking-[0.18em] text-white/50">
              Scroll to explore
              <ArrowDown size={14} className="animate-bounce" />
            </span>
          </div>
        </div>
      </section>

      {/* ==================== 2. POSITIONING ==================== */}
      <Surface variant="navy-deep" className="section">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,1.4fr)] lg:items-end lg:gap-16">
            <Reveal>
              <SectionLabel>SafeSky Nexus</SectionLabel>
              <p className="text-sm leading-6 text-white/55">
                Engineering autonomous systems from the airframe up.
              </p>
            </Reveal>

            <Reveal delay={90}>
              <h2 className="type-h2">
                We build the technology that lets autonomous platforms{" "}
                <span className="text-white/40">
                  see, understand and move.
                </span>
              </h2>
              <p className="type-body mt-7 text-white/70">
                From autonomous flight systems to intelligent navigation and
                mission control, our work brings hardware and software together
                into one connected technology ecosystem.
              </p>
            </Reveal>
          </div>
        </div>
      </Surface>

      {/* ==================== 3. FEATURED PLATFORM ==================== */}
      <Surface variant="navy" className="section">
        <div className="shell">
          <Reveal className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <SectionLabel>Featured technology</SectionLabel>
              <h2 className="type-h2">Built for autonomy.</h2>
            </div>
            <TextLink href={explorePath} dark>
              View all technology
            </TextLink>
          </Reveal>

          <Reveal delay={90} className="stage">
            <article className="group relative isolate min-h-104 overflow-hidden rounded-panel bg-navy-950 sm:min-h-128 lg:min-h-144">
              <Image
                src="/images/drone-hero.png"
                alt="SafeSky Nexus autonomous aerial platform in flight"
                fill
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-cover object-center transition-transform duration-1100 ease-soft group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-linear-to-t from-navy-950 via-navy-950/35 to-transparent" />

              <div className="absolute left-5 top-5 inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-navy-950/40 px-4 py-2 backdrop-blur-md sm:left-7 sm:top-7">
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 rounded-full bg-orange"
                />
                <span className="text-[0.625rem] font-semibold uppercase tracking-[0.18em] text-white/80">
                  Technology platform
                </span>
              </div>

              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-9 lg:p-12">
                <div className="max-w-2xl">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-orange">
                    Autonomous aerial systems
                  </p>
                  <h3 className="type-h2">Designed around intelligence.</h3>
                  <p className="type-body mt-4 text-white/75">
                    Aerial platforms engineered to combine perception,
                    navigation, control, and mission intelligence into a single
                    connected system.
                  </p>
                  <TextLink href={explorePath} dark className="mt-5">
                    Discover the platform
                  </TextLink>
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </Surface>

      {/* ==================== 4. CAPABILITIES ==================== */}
      <Surface variant="white" className="section">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.62fr)_minmax(0,1.38fr)] lg:gap-16">
            <Reveal>
              <SectionLabel>Core capabilities</SectionLabel>
              <h2 className="type-h2 max-w-[14ch] text-navy">
                The technology behind autonomous systems.
              </h2>
              <p className="type-body mt-5 max-w-sm text-muted">
                Our approach combines sensing, intelligence, navigation, and
                control into integrated technology designed for real-world
                operation.
              </p>
            </Reveal>

            <Reveal delay={90}>
              <ul className="divide-y divide-line border-y border-line">
                {capabilities.map((capability) => {
                  const Icon = capability.icon;
                  return (
                    <li
                      key={capability.title}
                      className="group grid gap-4 py-7 sm:grid-cols-[3.5rem_minmax(0,1fr)] sm:gap-6"
                    >
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-line text-navy transition-[background-color,border-color,color,transform,box-shadow] duration-300 ease-soft group-hover:-translate-y-0.5 group-hover:border-orange group-hover:bg-orange group-hover:text-white group-hover:shadow-glow">
                        <Icon size={20} strokeWidth={1.5} aria-hidden="true" />
                      </span>
                      <div>
                        <h3 className="type-h3 text-navy">
                          {capability.title}
                        </h3>
                        <p className="type-body mt-2 text-muted">
                          {capability.description}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </Reveal>
          </div>
        </div>
      </Surface>

      {/* ==================== 5. ECOSYSTEM ==================== */}
      <Surface variant="navy-deep" className="section">
        <div className="shell">
          <Reveal className="mb-11 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <SectionLabel>Technology ecosystem</SectionLabel>
              <h2 className="type-h2">
                One ecosystem.
                <br />
                <span className="text-white/40">Multiple possibilities.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-white/60">
              The systems and technologies that make up the SafeSky Nexus
              platform.
            </p>
          </Reveal>

          <div className="stage grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => {
              const wide = index === 0;
              return (
                <Reveal
                  key={product.name}
                  delay={index * 80}
                  className={`h-full ${wide ? "md:col-span-2" : ""}`}
                >
                  <TiltCard
                    maxTilt={4}
                    className="group h-full overflow-hidden rounded-panel bg-navy-800 shadow-none transition-shadow duration-500 ease-soft hover:shadow-float"
                  >
                    <Link
                      href={explorePath}
                      className="block h-full focus-visible:outline-none"
                    >
                      <div
                        className={`relative ${
                          wide ? "aspect-16/10" : "aspect-4/5"
                        }`}
                      >
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          sizes={
                            wide
                              ? "(max-width: 768px) 100vw, (max-width: 1280px) 66vw, 840px"
                              : "(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 420px"
                          }
                          loading="lazy"
                          className="object-cover transition-transform duration-700 ease-soft group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-navy-950 via-navy-950/25 to-transparent" />

                        <div className="absolute inset-x-5 top-5 flex items-start justify-between gap-3 sm:inset-x-7 sm:top-7">
                          <span className="text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-white/70">
                            {product.category}
                          </span>
                          <span
                            aria-hidden="true"
                            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/20 bg-navy-950/30 backdrop-blur-md transition-[background-color,color] duration-300 group-hover:bg-orange"
                          >
                            <ArrowUpRight size={15} />
                          </span>
                        </div>

                        <div className="absolute inset-x-5 bottom-5 sm:inset-x-7 sm:bottom-7">
                          <h3 className="type-h3 text-white">
                            {product.name}
                          </h3>
                          <p className="mt-2.5 max-w-md text-sm leading-6 text-white/70">
                            {product.description}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </TiltCard>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Surface>

      {/* ==================== 6. APPLICATIONS ==================== */}
      <Surface variant="white" className="section">
        <div className="shell">
          <Reveal className="mb-11 max-w-3xl">
            <SectionLabel>Where it matters</SectionLabel>
            <h2 className="type-h2 text-navy">
              Technology for environments where decisions matter.
            </h2>
          </Reveal>

          <div className="stage grid gap-4 md:grid-cols-2">
            {applications.map((application, index) => {
              const Icon = application.icon;
              return (
                <Reveal key={application.title} delay={index * 90} className="h-full">
                  <TiltCard
                    maxTilt={4}
                    className="group h-full overflow-hidden rounded-panel bg-navy text-white shadow-lift transition-shadow duration-500 ease-soft hover:shadow-float"
                  >
                    <Link
                      href={application.href}
                      className="block h-full focus-visible:outline-none"
                    >
                      <div className="relative min-h-96 sm:min-h-112">
                        <Image
                          src={application.image}
                          alt={application.alt}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 640px"
                          loading="lazy"
                          className="object-cover opacity-75 transition-transform duration-700 ease-soft group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-navy-950 via-navy-950/40 to-transparent" />

                        <div className="absolute inset-x-6 bottom-6 sm:inset-x-8 sm:bottom-8">
                          <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/25 transition-[background-color,border-color] duration-300 group-hover:border-orange group-hover:bg-orange">
                            <Icon size={19} strokeWidth={1.5} aria-hidden="true" />
                          </span>
                          <h3 className="type-h3">{application.title}</h3>
                          <p className="mt-2.5 max-w-md text-sm leading-6 text-white/75">
                            {application.description}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </TiltCard>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Surface>

      {/* ==================== 7. ENGINEERING IN ACTION ==================== */}
      <Surface variant="soft" className="section">
        <div className="shell">
          <Reveal className="mb-11 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <SectionLabel>Engineering in action</SectionLabel>
              <h2 className="type-h2 text-navy">
                From the bench
                <br />
                <span className="text-navy/40">to the field.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-muted">
              Real hardware, built and flown by our own team — not renders.
            </p>
          </Reveal>

          <div className="stage grid gap-4 md:grid-cols-2">
            {proofPoints.map((point, index) => (
              <Reveal key={point.title} delay={index * 90} className="h-full">
                <TiltCard
                  maxTilt={4}
                  className="group h-full overflow-hidden rounded-panel bg-navy-900 shadow-lift transition-shadow duration-500 ease-soft hover:shadow-float"
                >
                  <div className="relative min-h-96 sm:min-h-112">
                    <Image
                      src={point.image}
                      alt={point.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 640px"
                      loading="lazy"
                      className="object-cover transition-transform duration-700 ease-soft group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-navy-950 via-navy-950/45 to-transparent" />

                    <span className="absolute left-6 top-6 text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-white/70">
                      {point.category}
                    </span>

                    <div className="absolute inset-x-6 bottom-6 sm:inset-x-8 sm:bottom-8">
                      <h3 className="type-h3 text-white">{point.title}</h3>
                      <p className="mt-2.5 max-w-md text-sm leading-6 text-white/75">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </Surface>

      {/* ==================== 8. ABOUT TEASER ==================== */}
      <Surface variant="white" className="section-tight">
        <div className="shell">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,1.4fr)] lg:gap-16">
            <Reveal>
              <SectionLabel>About SafeSky Nexus</SectionLabel>
            </Reveal>
            <Reveal delay={90}>
              <h2 className="type-h2 max-w-3xl text-navy">
                Building the next generation of autonomous systems.
              </h2>
              <p className="type-body mt-6 text-muted">
                SafeSky Nexus engineers autonomous aerial and intelligent
                systems, bringing together software, electronics, navigation,
                perception, and mission technologies.
              </p>
              <TextLink href={routes.about} className="mt-5">
                Read our story
              </TextLink>
            </Reveal>
          </div>
        </div>
      </Surface>

      {/* ==================== 9. CLOSING STATEMENT + CTA ====================
          The original page ended with two near-identical dark sections: a
          philosophy statement and then a CTA repeating the same visual
          treatment. They are merged into one closing moment, so the page has
          a single, unmissable end point. */}
      <Surface variant="navy" className="section-lead relative overflow-hidden">
        <div
          aria-hidden="true"
          className="grid-texture grid-texture-dark absolute inset-0"
        />
        <div
          aria-hidden="true"
          className="glow-orange pointer-events-none absolute left-1/2 top-1/2 h-136 w-136 max-w-none -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]"
        />

        <div className="shell relative text-center">
          <Reveal>
            <h2 className="type-h1 mx-auto max-w-[18ch]">
              Hardware is only the beginning.
              <span className="mt-2 block text-white/40">
                Intelligence is what moves it forward.
              </span>
            </h2>
          </Reveal>

          <Reveal delay={120}>
            <p className="type-lede mx-auto mt-8 text-white/70">
              Tell us what you are trying to build, operate, or solve — and
              we&apos;ll show you what autonomous technology can do for you.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-3 sm:gap-4">
              <PrimaryButton href={routes.contact}>
                Start a conversation
              </PrimaryButton>
              <SecondaryButton href={explorePath}>
                Explore our systems
              </SecondaryButton>
            </div>
          </Reveal>
        </div>
      </Surface>
    </main>
  );
}
