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
    <section className="max-w-container mx-auto px-6 py-16 overflow-hidden">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left: image collage */}
        <div className="relative w-full max-w-md mx-auto md:mx-0 aspect-4/3">
          <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-lg z-10">
            <Image
              src="/images/mission-main.png"
              alt="SafeSky Nexus drone module"
              fill
              sizes="(max-width: 768px) 100vw, 448px"
              className="object-cover"
            />
          </div>

          <div className="absolute -bottom-6 -right-6 w-2/5 aspect-square bg-white p-2 rounded-xl shadow-xl z-20">
            <div className="relative w-full h-full rounded-lg overflow-hidden">
              <Image
                src="/images/mission-overlay.png"
                alt="SafeSky Nexus drone overhead view"
                fill
                sizes="(max-width: 768px) 40vw, 180px"
                className="object-cover"
              />
            </div>
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