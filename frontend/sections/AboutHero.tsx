import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function AboutHero() {
  return (
    <section className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 md:py-16 lg:py-20">
      <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 items-center">
        {/* Left: text */}
        <Reveal className="text-center lg:text-left">
          <p className="text-orange font-semibold mb-2 sm:mb-3 text-sm sm:text-base">
            About Us
          </p>
          <h1 className="text-navy text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 sm:mb-6">
            Engineering the Future of Autonomous Defense
          </h1>
          <p className="text-body text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
            SafeSky Nexus Private Limited- SSN is a Pakistan based aerospace
            defense technology company dedicated to building the next
            generation of fully indigenous autonomous drone systems.
            Incorporated under the Securities and Exchange Commission of
            Pakistan (SECP) and incubated at the National Incubation Center
            for Aerospace Technologies (NICAT), NASTP Rawalpindi, our company
            was selected from thousands of applicants through a highly
            competitive nationwide program.
          </p>
        </Reveal>

        {/* Right: drone image */}
        <Reveal
          delay={150}
          className="w-full flex items-center justify-center order-first lg:order-last"
        >
          <Image
            src="/images/drone-hero.png"
            alt="SafeSky Nexus autonomous drone"
            width={600}
            height={450}
            className="w-full h-auto max-w-64 sm:max-w-sm md:max-w-md lg:max-w-lg transition-transform duration-500 hover:scale-[1.03]"
            priority
          />
        </Reveal>
      </div>

      {/* Bold centered statement */}
      <Reveal delay={250}>
        <p className="text-navy text-center font-semibold text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mt-10 sm:mt-14 lg:mt-16">
          Intelligent, vision-based unmanned aerial systems that operate
          without GPS, ensuring secure, reliable, and mission-ready
          performance in the most challenging operational environments.
        </p>
      </Reveal>
    </section>
  );
}