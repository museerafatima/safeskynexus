import Image from "next/image";
import Reveal from "@/components/Reveal";
import { PrimaryButton } from "@/components/HomeUI";

export default function DefenseHero() {
  return (
    <section className="relative min-h-[60vh] overflow-hidden bg-navy-950 text-white">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/defense-drone.png"
          alt="SafeSky Nexus autonomous defense platform"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-60"
        />
        <div className="absolute inset-0 bg-linear-to-r from-navy-950 via-navy-950/70 to-transparent" />
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
        aria-hidden="true"
      />

      <div className="relative max-w-container mx-auto flex min-h-[60vh] items-end px-4 sm:px-6 lg:px-8 pb-16 pt-28 lg:pb-20">
        <Reveal className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.02] tracking-[-0.03em]">
            Defense
          </h1>

          <p className="mt-5 max-w-xl text-sm sm:text-base leading-relaxed text-white/65">
            Powered by Visual SLAM, sensor fusion, and onboard AI, our drones
            navigate accurately without GPS signals, enabling uninterrupted
            operations in jamming prone and denied environments.
          </p>

          <div className="mt-8">
            <PrimaryButton href="#hardware">Learn More</PrimaryButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}