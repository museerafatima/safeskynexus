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
              Founded to strengthen Pakistan&apos;s technological
              independence, SSN set out to solve a persistent problem in
              modern warfare: reliable autonomous navigation in
              anti-spoofing environments &mdash; building AI-powered
              computer vision systems capable of autonomous flight without
              satellite navigation or external communication signals.
            </p>
            <p className="type-body mt-4 text-muted">
              Today, SSN designs intelligent aerial systems that are
              affordable, secure, resistant to electronic warfare, and
              adaptable across military and commercial use.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}