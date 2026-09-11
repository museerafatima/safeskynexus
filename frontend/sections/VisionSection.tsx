import Image from "next/image";

export default function VisionSection() {
  return (
    <section className="max-w-container mx-auto px-6 py-16 overflow-hidden">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left: text */}
        <div>
          <h2 className="text-navy text-3xl md:text-4xl font-bold mb-4">
            Our Vision
          </h2>
          <p className="text-body leading-relaxed mb-4">
            To become Pakistan&apos;s leading aerospace defense technology
            company, pioneering autonomous systems that redefine modern
            warfare and intelligent aerial operations through indigenous
            innovation.
          </p>
          <p className="text-body leading-relaxed">
            We envision a future where advanced AI powered drone
            technologies strengthen national security, support critical
            industries, and position Pakistan among global leaders in
            autonomous defense systems.
          </p>
        </div>

        {/* Right: image collage */}
        <div className="relative w-full max-w-md mx-auto md:mx-0 aspect-4/3 mt-6 md:mt-0">
          {/* Large image, fills the box */}
          {/* Large image, fills the box */}
         <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-lg z-10">
            <Image
              src="/images/vision-large.png"
              alt="SafeSky Nexus drone with charging cable"
              fill
              className="object-cover"
            />
          </div>

          {/* Small image, overlapping bottom-left with white border */}
          {/* Small image, overlapping bottom-left with white border */}
          <div className="absolute -bottom-6 -left-6 w-2/5 aspect-square bg-white p-2 rounded-xl shadow-xl z-20">
            <div className="relative w-full h-full rounded-lg overflow-hidden">
              <Image
                src="/images/vision-small.png"
                alt="SafeSky Nexus drone detail"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}