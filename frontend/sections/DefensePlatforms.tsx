import { Eye, Crosshair, ShieldAlert, Bot } from "lucide-react";
import Reveal from "@/components/Reveal";
import { SectionLabel } from "@/components/HomeUI";

const platforms = [
  {
    icon: Eye,
    name: "Surveillance & Tactical UAVs",
    description:
      "Fixed-wing and multi-rotor platforms for persistent situational awareness, reconnaissance, and real-time battlefield intelligence.",
  },
  {
    icon: Crosshair,
    name: "Loitering Systems",
    description:
      "Autonomous platforms that hold station over an area of interest, ready to identify and act on emerging threats without operator intervention.",
  },
  {
    icon: ShieldAlert,
    name: "Counter-UAS Interceptors",
    description:
      "Purpose-built systems to detect, track, and neutralize hostile drones before they reach protected airspace.",
  },
  {
    icon: Bot,
    name: "Unmanned Ground Vehicles",
    description:
      "Ground robotic platforms sharing the same perception and navigation core, extending autonomous operation from air to land.",
  },
];

export default function DefensePlatforms() {
  return (
    <section className="bg-navy py-20 sm:py-24 lg:py-32">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-14 max-w-2xl">
          <SectionLabel>Platform Portfolio</SectionLabel>
          <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.03em]">
            One stack. Four mission profiles.
          </h2>
          <p className="mt-4 text-white/60 text-base leading-relaxed">
            Every class of platform below draws on the same indigenous
            perception, navigation, and edge-compute architecture &mdash; no
            rebuilding the core for each new mission type.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-5">
          {platforms.map((platform, i) => (
            <Reveal
              key={platform.name}
              delay={i * 100}
              className="group rounded-2xl border border-white/10 bg-white/2 p-7 transition-all duration-300 hover:border-orange/40 hover:bg-white/4"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 transition-all duration-300 group-hover:border-orange group-hover:bg-orange">
                <platform.icon size={19} strokeWidth={1.5} className="text-white" />
              </div>
              <h3 className="mt-5 text-xl font-semibold tracking-tight text-white">
                {platform.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/55">
                {platform.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}