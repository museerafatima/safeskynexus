import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="max-w-container mx-auto px-6 py-16">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left: text */}
        <div>
          <p className="text-orange font-semibold mb-3">About Us</p>
          <h1 className="text-navy text-4xl md:text-5xl font-bold leading-tight mb-6">
            Engineering the Future of Autonomous Defense
          </h1>
          <p className="text-body text-base leading-relaxed">
            SafeSky Nexus Private Limited- SSN is a Pakistan based aerospace
            defense technology company dedicated to building the next
            generation of fully indigenous autonomous drone systems.
            Incorporated under the Securities and Exchange Commission of
            Pakistan (SECP) and incubated at the National Incubation Center
            for Aerospace Technologies (NICAT), NASTP Rawalpindi, our company
            was selected from thousands of applicants through a highly
            competitive nationwide program.
          </p>
        </div>

        {/* Right: drone image */}
        <div className="w-full flex items-center justify-center">
          <Image
            src="/images/drone-hero.png"
            alt="SafeSky Nexus autonomous drone"
            width={600}
            height={450}
            className="w-full h-auto max-w-md"
            priority
          />
        </div>
      </div>

      {/* Bold centered statement */}
      <p className="text-navy text-center font-semibold text-lg md:text-xl max-w-3xl mx-auto mt-14">
        Intelligent, vision-based unmanned aerial systems that operate
        without GPS, ensuring secure, reliable, and mission-ready
        performance in the most challenging operational environments.
      </p>
    </section>
  );
}