import { Mail, MapPin, Phone, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { EyebrowBadge, SectionLabel } from "@/components/HomeUI";
import { contact } from "@/lib/site";

/* ==========================================================================
   CONTACT

   WHAT CHANGED AND WHY
   • The hero previously repeated Home's closing CTA word for word ("Have a
     mission in mind?" plus the same paragraph), so clicking that CTA landed
     you on an identical headline. The copy here is now specific to the page.
   • The emoji icons (@, phone, pin) are replaced with lucide icons, matching
     every other icon on the site. Emoji render differently per platform and
     are announced literally by screen readers.
   • Contact details come from lib/site.ts, and the email and phone are now
     actionable links rather than plain text.
   ========================================================================== */

const details = [
  {
    icon: Mail,
    label: "Email",
    value: contact.email,
    href: `mailto:${contact.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: contact.phone,
    href: `tel:${contact.phoneHref}`,
  },
  {
    icon: MapPin,
    label: "Office",
    value: contact.address,
    href: null,
  },
];

export default function ContactSection() {
  return (
    <>
      {/* ---- Hero ---- */}
      <section className="relative isolate overflow-hidden bg-navy-950 text-white">
        <div
          aria-hidden="true"
          className="grid-texture grid-texture-dark absolute inset-0"
        />
        <div
          aria-hidden="true"
          className="glow-orange pointer-events-none absolute left-1/2 top-0 h-104 w-104 max-w-none -translate-x-1/2 rounded-full blur-[110px]"
        />

        <div className="shell section-tight relative">
          <Reveal className="max-w-2xl">
            <EyebrowBadge>Get in touch</EyebrowBadge>
            <h1 className="type-h1">Talk to the people building it.</h1>
            <p className="type-lede mt-6 text-white/75">
              Whether you&apos;re evaluating autonomous systems, planning a
              deployment, or exploring a partnership — send us the details and
              the right engineer will answer.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---- Form + details ---- */}
      <section className="section bg-surface">
        <div className="shell">
          <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-12">
            {/* Left: where to find us */}
            <div className="space-y-6">
              <Reveal>
                <SectionLabel>Where to find us</SectionLabel>

                <ul className="space-y-1">
                  {details.map((item) => {
                    const Icon = item.icon;
                    const inner = (
                      <>
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy/6 text-navy transition-[background-color,color] duration-300 group-hover:bg-orange group-hover:text-white">
                          <Icon size={18} strokeWidth={1.6} aria-hidden="true" />
                        </span>
                        <span className="min-w-0">
                          <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                            {item.label}
                          </span>
                          <span className="mt-0.5 block text-[0.9375rem] leading-6 text-navy">
                            {item.value}
                          </span>
                        </span>
                      </>
                    );

                    return (
                      <li key={item.label}>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="group -mx-2 flex min-h-14 items-center gap-4 rounded-xl px-2 py-3 transition-colors duration-200 hover:bg-surface-soft"
                          >
                            {inner}
                          </a>
                        ) : (
                          <div className="group -mx-2 flex min-h-14 items-center gap-4 px-2 py-3">
                            {inner}
                          </div>
                        )}
                      </li>
                    );
                  })}

                  <li className="group -mx-2 flex min-h-14 items-center gap-4 px-2 py-3">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy/6 text-navy">
                      <Clock size={18} strokeWidth={1.6} aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                        Response time
                      </span>
                      <span className="mt-0.5 block text-[0.9375rem] leading-6 text-navy">
                        We aim to reply within two business days.
                      </span>
                    </span>
                  </li>
                </ul>
              </Reveal>

              <Reveal delay={110}>
                <div className="h-56 overflow-hidden rounded-panel border border-line shadow-lift sm:h-72">
                  <iframe
                    title="SafeSky Nexus office location on Google Maps"
                    src={contact.mapEmbed}
                    className="h-full w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </Reveal>
            </div>

            {/* Right: form */}
            <Reveal delay={150}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}