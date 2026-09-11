import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="max-w-container mx-auto px-6 py-16 overflow-hidden">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Left: image collage */}
        <div className="relative w-full max-w-md mx-auto md:mx-0 aspect-4/3">
          <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-lg z-10">
            <Image
              src="/images/history-main.png"
              alt="SafeSky Nexus sensor close-up"
              fill
              className="object-cover"
            />
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 -right-10 w-2/5 aspect-square bg-white p-2 rounded-xl shadow-xl z-20">
            <div className="relative w-full h-full rounded-lg overflow-hidden">
              <Image
                src="/images/history-overlay.png"
                alt="SafeSky Nexus gimbal mount"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Right: text */}
        <div className="md:pl-4">
          <h2 className="text-navy text-3xl md:text-4xl font-bold mb-4">
            Our History
          </h2>
          <p className="text-body leading-relaxed mb-4">
            Founded with the vision of strengthening Pakistan&apos;s
            technological independence, SSN emerged to solve one of modern
            warfare&apos;s greatest challenges: reliable autonomous
            navigation in Anti Spoofing environments.
          </p>
          <p className="text-body leading-relaxed mb-4">
            Recognizing the growing need for secure and indigenous defense
            technologies, our team focused on developing AI powered computer
            vision systems capable of autonomous flight without relying on
            satellite navigation or external communication signals.
          </p>
          <p className="text-body leading-relaxed">
            Today, SSN continues to push the boundaries of aerospace
            innovation by designing intelligent aerial systems that are
            affordable, secure, resistant to electronic warfare, and
            adaptable to both military and commercial applications.
          </p>
        </div>
      </div>
    </section>
  );
}