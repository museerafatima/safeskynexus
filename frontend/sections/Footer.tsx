import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import logo from "@/public/safeskynexus-logo.png";
import { aboutAnchors, contact, primaryNav, routes, site, socials } from "@/lib/site";

/* ==========================================================================
   FOOTER
   Changes from the original:
   • Contact details now come from lib/site.ts. The old footer displayed one
     phone number but linked to a different one; that is fixed at the source.
   • "Vission" -> "Vision".
   • The ten href="#" links are gone. Items that map to a real destination
     link there (the About column now deep-links into the About page's
     sections); items with no page yet are rendered as plain text instead of
     links that go nowhere. Restoring them is a one-line change once the
     routes exist.
   • Social icons are inline SVG, not a lucide import: lucide-react's
     available icon set differs by installed version, and Instagram/Linkedin
     aren't guaranteed to exist across versions. Two small hand-drawn icons
     avoid that dependency entirely.
   ========================================================================== */

/* Capability lists. These describe the product line but have no routes yet,
   so they render as text. To link one, give it an `href`. */
const platforms: { label: string; href?: string }[] = [
  { label: "Surveillance drone" },
  { label: "Rescue drone" },
  { label: "Transport drone" },
  { label: "Natural disaster drone" },
];

const systems: { label: string; href?: string }[] = [
  { label: "Delivery systems" },
  { label: "Anti-drone systems" },
];

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
      <path d="M10 9v12M10 13a4 4 0 0 1 8 0v8" />
    </svg>
  );
}

const socialIcons = {
  Instagram: InstagramIcon,
  LinkedIn: LinkedInIcon,
} as const;

function ListItem({ label, href }: { label: string; href?: string }) {
  if (!href) {
    return <li className="py-1 text-sm text-white/65">{label}</li>;
  }
  return (
    <li>
      <Link
        href={href}
        className="inline-flex min-h-9 items-center py-1 text-sm text-white/65 transition-[color,transform] duration-200 hover:translate-x-1 hover:text-white"
      >
        {label}
      </Link>
    </li>
  );
}

function ColumnHeading({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/45 ${className}`}
    >
      {children}
    </h2>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-navy-950 text-white">
      {/* Hairline of brand colour so the footer reads as part of the system */}
      <div aria-hidden="true" className="h-px w-full bg-linear-to-r from-orange/60 via-orange/10 to-transparent" />

      <div className="shell grid gap-x-8 gap-y-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:py-16">
        {/* ---- Brand + contact ---- */}
        <div className="sm:col-span-2 lg:col-span-1">
          <Link
            href={routes.home}
            className="inline-flex w-fit rounded-lg bg-white px-3 py-2 transition-opacity duration-200 hover:opacity-90"
          >
            <Image
              src={logo}
              alt={site.name}
              className="h-10 w-auto sm:h-11"
              sizes="180px"
            />
          </Link>

          <p className="mt-5 max-w-xs text-sm leading-6 text-white/65">
            Indigenous autonomous aerial systems that navigate without GPS.
          </p>

          <ul className="mt-6 space-y-3 text-sm">
            <li>
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex min-h-9 w-fit items-center gap-2.5 text-white/75 transition-colors duration-200 hover:text-orange"
              >
                <Mail size={16} aria-hidden="true" className="shrink-0" />
                {contact.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${contact.phoneHref}`}
                className="inline-flex min-h-9 w-fit items-center gap-2.5 text-white/75 transition-colors duration-200 hover:text-orange"
              >
                <Phone size={16} aria-hidden="true" className="shrink-0" />
                {contact.phone}
              </a>
            </li>
            <li className="flex items-start gap-2.5 py-1 text-white/75">
              <MapPin size={16} aria-hidden="true" className="mt-0.5 shrink-0" />
              <span className="max-w-[26ch]">{contact.address}</span>
            </li>
          </ul>
        </div>

        {/* ---- Platforms ---- */}
        <div>
          <ColumnHeading>Platforms</ColumnHeading>
          <ul>
            {platforms.map((item) => (
              <ListItem key={item.label} {...item} />
            ))}
          </ul>

          <ColumnHeading className="mt-8">Systems</ColumnHeading>
          <ul>
            {systems.map((item) => (
              <ListItem key={item.label} {...item} />
            ))}
          </ul>
        </div>

        {/* ---- Company ---- */}
        <div>
          <ColumnHeading>Company</ColumnHeading>
          <ul>
            {primaryNav
              .filter((l) => l.href !== routes.home)
              .map((item) => (
                <ListItem key={item.href} label={item.label} href={item.href} />
              ))}
            <ListItem label="Contact" href={routes.contact} />
          </ul>
        </div>

        {/* ---- About (deep links into the About page) ---- */}
        <div>
          <ColumnHeading>About {site.shortName}</ColumnHeading>
          <ul>
            {aboutAnchors.map((item) => (
              <ListItem key={item.href} label={item.label} href={item.href} />
            ))}
          </ul>

          <ColumnHeading className="mt-8">Follow</ColumnHeading>
          <ul className="flex gap-3">
            {socials.map((social) => {
              const Icon = socialIcons[social.label as keyof typeof socialIcons];
              const isPlaceholder = social.href === "#";

              // Don't ship a link that goes nowhere — show the icon, unlinked,
              // until a real profile URL is added to lib/site.ts.
              if (isPlaceholder) {
                return (
                  <li key={social.label}>
                    <span
                      title={`${social.label} — coming soon`}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/35"
                    >
                      <Icon className="h-[1.125rem] w-[1.125rem]" aria-hidden="true" />
                      <span className="sr-only">{social.label}</span>
                    </span>
                  </li>
                );
              }

              return (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${site.name} on ${social.label}`}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/70 transition-[color,border-color,background-color,transform] duration-200 hover:-translate-y-0.5 hover:border-orange hover:bg-orange hover:text-white"
                  >
                    <Icon className="h-[1.125rem] w-[1.125rem]" aria-hidden="true" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* ---- Bottom bar ---- */}
      <div className="border-t border-white/10">
        <div className="shell flex flex-col gap-3 py-5 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {site.legalName}. All rights reserved.
          </p>
          <p className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span>Privacy policy</span>
            <span>Use of cookies</span>
            <span>Terms of use</span>
          </p>
        </div>
      </div>
    </footer>
  );
}