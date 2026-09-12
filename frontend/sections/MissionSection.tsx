import Image from "next/image";

const missionPoints = [
  "Indigenous Aerospace Innovation",
  "GPS Free Autonomous Navigation",
  "AI & Computer Vision",
  "Secure and Jamming-Resistant Systems",
  "Affordable High-Performance Solutions",
];

export default function MissionSection() {
  return (
    <section className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-20 overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-14 items-center">
        {/* Left: image collage */}
        <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto lg:mx-0 aspect-4/3">
          <div className="absolute inset-0 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg z-10">
            <Image
              src="/images/mission-main.png"
              alt="SafeSky Nexus drone module"
              fill
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 60vw, 448px"
              className="object-cover"
            />
          </div>

          <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-[38%] sm:w-2/5 aspect-square bg-white p-1.5 sm:p-2 rounded-lg sm:rounded-xl shadow-xl z-20">
            <div className="relative w-full h-full rounded-md sm:rounded-lg overflow-hidden">
              <Image
                src="/images/mission-overlay.png"
                alt="SafeSky Nexus drone overhead view"
                fill
                sizes="(max-width: 640px) 34vw, (max-width: 1024px) 24vw, 180px"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Right: text */}
        <div className="lg:pl-4 text-center lg:text-left mt-4 lg:mt-0">
          <h2 className="text-navy text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            Our Mission
          </h2>
          <p className="text-body text-sm sm:text-base leading-relaxed mb-5 sm:mb-6 max-w-xl mx-auto lg:mx-0">
            Our mission is to empower defense forces and critical civilian
            sectors through intelligent autonomous aerial systems designed
            for reliability, security, and operational excellence. We strive
            to develop fully indigenous drone technologies that eliminate
            dependence on foreign navigation systems.
          </p>
          <ul className="space-y-2 text-left max-w-xl mx-auto lg:mx-0 inline-block lg:block">
            {missionPoints.map((point) => (
              <li key={point} className="text-navy text-sm sm:text-base flex items-start gap-2">
                <span className="mt-1">·</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}