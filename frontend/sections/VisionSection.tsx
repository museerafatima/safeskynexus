import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function VisionSection() {
  return (
    <section className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-20 overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-14 items-center">
        {/* Left: text */}
        <Reveal className="text-center lg:text-left">
          <h2 className="text-navy text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            Our Vision
          </h2>
          <p className="text-body text-sm sm:text-base leading-relaxed mb-4 max-w-xl mx-auto lg:mx-0">
            To become Pakistan&apos;s leading aerospace defense technology
            company, pioneering autonomous systems that redefine modern
            warfare and intelligent aerial operations through indigenous
            innovation.
          </p>
          <p className="text-body text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
            We envision a future where advanced AI powered drone
            technologies strengthen national security, support critical
            industries, and position Pakistan among global leaders in
            autonomous defense systems.
          </p>
        </Reveal>

        {/* Right: image collage */}
        <Reveal
          delay={150}
          className="relative w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto lg:mx-0 aspect-4/3 mt-2 lg:mt-0 group"
        >
          <div className="absolute inset-0 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg z-10 transition-shadow duration-300 group-hover:shadow-2xl">
            <Image
              src="/images/vision-large.png"
              alt="SafeSky Nexus drone with charging cable"
              fill
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 60vw, 448px"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-[38%] sm:w-2/5 aspect-square bg-white p-1.5 sm:p-2 rounded-lg sm:rounded-xl shadow-xl z-20 transition-transform duration-300 hover:scale-105">
            <div className="relative w-full h-full rounded-md sm:rounded-lg overflow-hidden">
              <Image
                src="/images/vision-small.png"
                alt="SafeSky Nexus drone detail"
                fill
                sizes="(max-width: 640px) 34vw, (max-width: 1024px) 24vw, 180px"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}