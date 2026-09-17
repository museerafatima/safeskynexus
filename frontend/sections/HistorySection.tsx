import Reveal from "@/components/Reveal";
import ImageCollage from "@/components/ImageCollage";
import { SectionLabel } from "@/components/HomeUI";

export default function HistorySection() {
  return (
    <section id="history" className="section bg-surface">
      <div className="shell">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <ImageCollage
              align="right"
              main={{
                src: "/images/history-main.png",
                alt: "Close-up of a SafeSky Nexus vision sensor",
              }}
              inset={{
                src: "/images/history-overlay.png",
                alt: "SafeSky Nexus gimbal mount",
              }}
            />
          </Reveal>

          <Reveal delay={110}>
            <SectionLabel>History</SectionLabel>
            <h2 className="type-h2 text-navy">Our history</h2>
            <p className="type-body mt-5 text-muted">
              Founded with the vision of strengthening Pakistan&apos;s
              technological independence, SSN emerged to solve one of modern
              warfare&apos;s greatest challenges: reliable autonomous
              navigation in anti-spoofing environments.
            </p>
            <p className="type-body mt-4 text-muted">
              Recognising the growing need for secure, indigenous defense
              technologies, our team focused on developing AI-powered computer
              vision systems capable of autonomous flight without relying on
              satellite navigation or external communication signals.
            </p>
            <p className="type-body mt-4 text-muted">
              Today SSN continues to push the boundaries of aerospace
              innovation, designing intelligent aerial systems that are
              affordable, secure, resistant to electronic warfare, and
              adaptable to both military and commercial applications.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}