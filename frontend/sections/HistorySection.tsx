import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function HistorySection() {
  return (
    <section className="bg-gray-50/60">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-20 overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-14 items-start">
          {/* Left: image collage */}
          <Reveal className="relative w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto lg:mx-0 aspect-4/3 mb-6 lg:mb-0 group">
            <div className="absolute inset-0 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg z-10 transition-shadow duration-300 group-hover:shadow-2xl">
              <Image
                src="/images/history-main.png"
                alt="SafeSky Nexus sensor close-up"
                fill
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 60vw, 448px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="absolute top-1/2 -translate-y-1/2 -right-3 sm:-right-6 md:-right-8 w-[34%] sm:w-2/5 aspect-square bg-white p-1.5 sm:p-2 rounded-lg sm:rounded-xl shadow-xl z-20 transition-transform duration-300 hover:scale-105">
              <div className="relative w-full h-full rounded-md sm:rounded-lg overflow-hidden">
                <Image
                  src="/images/history-overlay.png"
                  alt="SafeSky Nexus gimbal mount"
                  fill
                  sizes="(max-width: 640px) 30vw, (max-width: 1024px) 24vw, 180px"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>

          {/* Right: text */}
          <Reveal delay={150} className="lg:pl-4 text-center lg:text-left">
            <h2 className="text-navy text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              Our History
            </h2>
            <p className="text-body text-sm sm:text-base leading-relaxed mb-4 max-w-xl mx-auto lg:mx-0">
              Founded with the vision of strengthening Pakistan&apos;s
              technological independence, SSN emerged to solve one of modern
              warfare&apos;s greatest challenges: reliable autonomous
              navigation in Anti Spoofing environments.
            </p>
            <p className="text-body text-sm sm:text-base leading-relaxed mb-4 max-w-xl mx-auto lg:mx-0">
              Recognizing the growing need for secure and indigenous defense
              technologies, our team focused on developing AI powered computer
              vision systems capable of autonomous flight without relying on
              satellite navigation or external communication signals.
            </p>
            <p className="text-body text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
              Today, SSN continues to push the boundaries of aerospace
              innovation by designing intelligent aerial systems that are
              affordable, secure, resistant to electronic warfare, and
              adaptable to both military and commercial applications.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}