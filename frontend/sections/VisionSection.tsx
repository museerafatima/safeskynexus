import Reveal from "@/components/Reveal";
import ImageCollage from "@/components/ImageCollage";
import { SectionLabel } from "@/components/HomeUI";

export default function VisionSection() {
  return (
    <section id="vision" className="section bg-surface-soft">
      <div className="shell">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text first on desktop, image first on mobile is avoided here so
              Mission and Vision alternate sides on wide screens while keeping
              a consistent text-then-image order on narrow ones. */}
          <Reveal className="lg:order-last">
            <ImageCollage
              align="left"
              className="lg:ml-auto"
              main={{
                src: "/images/vision-large.png",
                alt: "SafeSky Nexus drone on charge",
              }}
              inset={{
                src: "/images/vision-small.png",
                alt: "Close detail of a SafeSky Nexus airframe",
              }}
            />
          </Reveal>

          <Reveal delay={110}>
            <SectionLabel>Vision</SectionLabel>
            <h2 className="type-h2 text-navy">Our vision</h2>
            <p className="type-body mt-5 text-muted">
              To become Pakistan&apos;s leading aerospace defense technology
              company, pioneering autonomous systems that redefine modern
              warfare and intelligent aerial operations through indigenous
              innovation.
            </p>
            <p className="type-body mt-4 text-muted">
              We envision a future where advanced AI-powered drone technologies
              strengthen national security, support critical industries, and
              position Pakistan among global leaders in autonomous defense
              systems.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}