import Image from "next/image";
import founderPhoto from "@/public/founder-photo.png";
import Reveal from "@/components/Reveal";
import { SectionLabel } from "@/components/HomeUI";

/* ==========================================================================
   ABOUT — FOUNDER'S MESSAGE
   Moved onto a dark surface. The oversized name was previously navy-on-light
   at up to 9vw, where it read as decoration competing with the bio; on navy
   it becomes the section's single bold moment and the bio stays readable.
   ========================================================================== */

export default function FoundersMessageSection() {
  return (
    <section id="founder" className="section relative overflow-hidden bg-navy-950 text-white">
      <div
        aria-hidden="true"
        className="glow-orange pointer-events-none absolute -left-32 bottom-0 h-112 w-md max-w-none rounded-full blur-[120px]"
      />

      <div className="shell relative">
        <Reveal>
          <SectionLabel>Leadership</SectionLabel>
          <h2 className="type-h2">Founder&rsquo;s message</h2>
        </Reveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,15rem)_minmax(0,1fr)] lg:gap-14">
          <Reveal>
            <figure className="mx-auto w-40 sm:w-52 lg:mx-0 lg:w-full">
              <div className="relative aspect-square overflow-hidden rounded-full border border-white/10 bg-navy-800">
                <Image
                  src={founderPhoto}
                  alt="Akash Afraz, Founder and CEO of SafeSky Nexus"
                  fill
                  sizes="(max-width: 1024px) 13rem, 15rem"
                  className="object-cover object-top"
                />
              </div>
              <figcaption className="mt-4 text-center lg:text-left">
                <span className="block text-sm font-semibold text-white">
                  Akash Afraz
                </span>
                <span className="block text-sm text-white/60">
                  Founder &amp; CEO
                </span>
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={110}>
            <blockquote className="space-y-4">
              <p className="type-body text-white/80">
                Akash Afraz is the Founder and CEO of SSN, leading
                development of Pakistan&rsquo;s first indigenous GPS-free
                autonomous drone navigation and AI targeting system. An AI
                engineer by training, he brings deep technical expertise and
                founder-level execution to building sovereign, defense-grade
                autonomous systems from the ground up.
              </p>
              <p className="type-body text-white/80">
                His goal is a complete indigenous aerial autonomy ecosystem
                &mdash; closing the gap in GPS-denied navigation and
                intelligent targeting for Pakistan&rsquo;s defense sector,
                with full-stack, ITAR-free solutions that reduce dependence
                on foreign systems.
              </p>
            </blockquote>
          </Reveal>
        </div>

        <Reveal delay={180}>
          <p
            aria-hidden="true"
            className="mt-12 text-center text-[clamp(2.25rem,11vw,7rem)] font-extrabold leading-none tracking-[-0.04em]"
          >
            <span className="text-white/15">AKASH</span>{" "}
            <span className="text-orange/80">AFRAZ</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}