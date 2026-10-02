/**
 * Single source of truth for navigation, routes and contact details.
 *
 * WHY THIS FILE EXISTS
 * The contact number, address and nav list were previously duplicated across
 * Navbar, Footer and ContactSection — and had drifted out of sync:
 *   • Footer displayed "+92 314 9678999" but its tel: href pointed to
 *     "+923342388218", so the link called a different number than the label.
 *   • StatsBar said "NASTP, Islamabad" while Footer and Contact said
 *     "NASTP, Rawalpindi".
 * They are now defined once, here.
 *
 * >>> ACTION REQUIRED: confirm `address` below is still correct. <<<
 * The phone number was updated to 0315 5670000 (+92 315 5670000). The city
 * used by both Footer and Contact (Rawalpindi) is unchanged.
 */

export const site = {
  name: "SafeSky Nexus",
  legalName: "SafeSky Nexus Private Limited",
  shortName: "SSN",
  tagline: "Autonomous aerospace technology",
  description:
    "SafeSky Nexus builds indigenous, GPS-free autonomous aerial systems: vision-based platforms that perceive, navigate and operate in contested environments.",
  url: "https://www.safeskynexus.com",
} as const;

export const contact = {
  email: "info@safeskynexus.com",
  /** Human-readable. Must describe the same number as `phoneHref`. */
  phone: "+92 315 5670000",
  /** E.164, no spaces — used for the tel: link. */
  phoneHref: "+923155670000",
  address: "Alpha Square, NICAT, NASTP, Rawalpindi, Pakistan",
  /** Short form used in the stats band. */
  campus: "NASTP, Rawalpindi",
  mapEmbed:
    "https://maps.google.com/maps?q=NASTP+Alpha+Rawalpindi&output=embed",
} as const;

/** Routes that actually exist. Keep this list honest — see footer notes. */
export const routes = {
  home: "/",
  defense: "/defense",
  subConventional: "/sub-conventional-warfare",
  about: "/about",
  contact: "/contact",
} as const;

export const primaryNav = [
  { label: "Home", href: routes.home },
  { label: "Defense", href: routes.defense },
  { label: "Sub-Conventional Warfare", href: routes.subConventional },
  { label: "About", href: routes.about },
] as const;

/** Anchors into the About page — these resolve to real section ids. */
export const aboutAnchors = [
  { label: "Mission", href: "/about#mission" },
  { label: "Vision", href: "/about#vision" },
  { label: "History", href: "/about#history" },
  { label: "Founder's message", href: "/about#founder" },
] as const;

/**
 * Social profiles shown in the footer's Follow section.
 * The Gmail icon is added separately in Footer.tsx from `contact.email`.
 */
export const socials = [
  { label: "Instagram", href: "https://www.instagram.com/safeskynexus/" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/safesky-nexus-private-limited/",
  },
] as const;