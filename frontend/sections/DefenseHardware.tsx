import Image from "next/image";
import Reveal from "@/components/Reveal";
import { SectionLabel } from "@/components/HomeUI";

type Callout = {
  title: string;
  points: string[];
  // Label position as % of the container (desktop diagram only)
  labelX: number;
  labelY: number;
  align: "left" | "right" | "center";
  // Where the connector line points to on the drone image, as % coordinates
  anchorX: number;
  anchorY: number;
};

// Anchor coordinates were measured directly against the real photo
// (public/images/f450-hardware.png, 911x694px) — see the mapping table in
// chat for which physical component each one points to.
const callouts: Callout[] = [
  {
    title: "Brushless Motors & Carbon Fiber Frame",
    points: ["High stability in wind", "Low vibration"],
    labelX: 2,
    labelY: 18,
    align: "left",
    anchorX: 24.4,
    anchorY: 40.8,
  },
  {
    title: "Power System",
    points: ["Intelligent battery monitoring"],
    labelX: 50,
    labelY: 4,
    align: "center",
    anchorX: 60.1,
    anchorY: 75.1,
  },
  {
    title: "Jetson Nano",
    points: ["Real time object detection", "Terrain classification"],
    labelX: 98,
    labelY: 14,
    align: "right",
    anchorX: 50.4,
    anchorY: 33.3,
  },
  {
    title: "Navigation",
    points: ["Vision based navigation", "Precision hovering"],
    labelX: 2,
    labelY: 44,
    align: "left",
    anchorX: 41.7,
    anchorY: 30.7,
  },
  {
    title: "Camera & Obstacle Detection Suite",
    points: ["Depth sensing camera", "Terrain classification"],
    labelX: 98,
    labelY: 42,
    align: "right",
    anchorX: 50.4,
    anchorY: 41.5,
  },
  {
    title: "AI Capabilities",
    points: ["Human detection", "Vehicle detection"],
    labelX: 2,
    labelY: 70,
    align: "left",
    anchorX: 50.4,
    anchorY: 49.7,
  },
  {
    title: "Pixhawk 2.4.8 / DakeFPV H743",
    points: ["GPS waypoint navigation", "Flight stabilization"],
    labelX: 98,
    labelY: 68,
    align: "right",
    anchorX: 50.4,
    anchorY: 55.5,
  },
];

export default function DefenseHardware() {
  return (
    <section id="hardware" className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl mb-12 lg:mb-16">
          <SectionLabel>Under the Hood</SectionLabel>
          <h2 className="text-navy text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.03em]">
            Built component by component.
          </h2>
        </Reveal>

        {/* Desktop: annotated diagram with leader lines. Positions are
            proportional (%) placeholders — tune labelX/Y and anchorX/Y in
            the `callouts` array above once the final drone photo is in
            place, so lines land exactly on the real components. */}
        <Reveal delay={150} className="hidden lg:block relative w-full aspect-16/10 max-w-5xl mx-auto">
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="absolute inset-0 w-full h-full pointer-events-none"
            aria-hidden="true"
          >
            {callouts.map((c) => (
              <g key={c.title}>
                <line
                  x1={c.labelX}
                  y1={c.labelY}
                  x2={c.anchorX}
                  y2={c.anchorY}
                  stroke="var(--color-navy)"
                  strokeOpacity={0.35}
                  strokeWidth={0.15}
                  vectorEffect="non-scaling-stroke"
                />
                <circle cx={c.anchorX} cy={c.anchorY} r={0.5} fill="var(--color-orange)" />
              </g>
            ))}
          </svg>

          <div className="absolute inset-[6%] rounded-2xl overflow-hidden">
            <Image
              src="/images/f450-hardware.png"
              alt="SafeSky Nexus F450 hardware breakdown"
              fill
              sizes="(max-width: 1024px) 0px, 60vw"
              className="object-contain"
            />
          </div>

          {callouts.map((c) => (
            <div
              key={c.title}
              className={`absolute max-w-[220px] text-xs sm:text-sm ${
                c.align === "left"
                  ? "text-left"
                  : c.align === "right"
                    ? "text-right"
                    : "text-center"
              }`}
              style={{
                left: `${c.labelX}%`,
                top: `${c.labelY}%`,
                transform:
                  c.align === "right"
                    ? "translateX(-100%)"
                    : c.align === "center"
                      ? "translateX(-50%)"
                      : undefined,
              }}
            >
              <p className="font-semibold text-navy leading-snug">{c.title}</p>
              {c.points.map((point) => (
                <p key={point} className="text-muted leading-snug">
                  {point}
                </p>
              ))}
            </div>
          ))}
        </Reveal>

        {/* Mobile / tablet fallback: the annotated diagram doesn't hold up
            below lg, so show the same specs as a simple stacked list. */}
        <div className="lg:hidden grid sm:grid-cols-2 gap-6">
          <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden bg-navy/5 sm:col-span-2">
            <Image
              src="/images/f450-hardware.png"
              alt="SafeSky Nexus F450 hardware breakdown"
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>

          {callouts.map((c) => (
            <div key={c.title}>
              <p className="font-semibold text-navy text-sm">{c.title}</p>
              {c.points.map((point) => (
                <p key={point} className="text-muted text-sm">
                  {point}
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* Coming Soon banner */}
        <Reveal delay={250}>
          <p className="text-center font-extrabold tracking-tight text-[clamp(2.5rem,10vw,7rem)] leading-none mt-16 sm:mt-20 lg:mt-24">
            <span className="text-navy">COMING</span>{" "}
            <span className="text-orange">SOON</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}