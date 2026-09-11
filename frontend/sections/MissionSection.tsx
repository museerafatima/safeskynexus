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
    <section className="max-w-container mx-auto px-6 py-16">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left: image collage */}
        <div className="relative w-full">
          <Image
            src="/images/mission-main.png"
            alt="SafeSky Nexus drone module"
            width={600}
            height={500}
            className="w-full h-auto rounded-md"
          />
          <div className="absolute bottom-[-6%] right-[2%] w-1/4">
            <Image
              src="/images/mission-overlay.png"
              alt="SafeSky Nexus drone overhead view"
              width={200}
              height={200}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Right: text */}
        <div className="md:pl-4">
          <h2 className="text-navy text-3xl md:text-4xl font-bold mb-4">
            Our Mission
          </h2>
          <p className="text-body leading-relaxed mb-6">
            Our mission is to empower defense forces and critical civilian
            sectors through intelligent autonomous aerial systems designed
            for reliability, security, and operational excellence. We strive
            to develop fully indigenous drone technologies that eliminate
            dependence on foreign navigation systems.
          </p>
          <ul className="space-y-2">
            {missionPoints.map((point) => (
              <li key={point} className="text-navy flex items-start gap-2">
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