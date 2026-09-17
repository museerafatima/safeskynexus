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
 * >>> ACTION REQUIRED: confirm `phone` and `address` below are correct. <<<
 * I kept the number shown on the Contact page (+92 334 2388218) and the city
 * used by both Footer and Contact (Rawalpindi), since those agreed with each
 * other. Change them here and every page updates.
 */

export const site = {
  name: "SafeSky Nexus",
  legalName: "SafeSky Nexus Private Limited",
  shortName: "SSN",
  tagline: "Autonomous aerospace technology",
  description:
    "SafeSky Nexus builds indigenous, GPS-free autonomous aerial systems — vision-based platforms that perceive, navigate and operate in contested environments.",
  url: "https://www.safeskynexus.com",
} as const;

export const contact = {
  email: "info@safeskynexus.com",
  /** Human-readable. Must describe the same number as `phoneHref`. */
  phone: "+92 334 2388218",
  /** E.164, no spaces — used for the tel: link. */
  phoneHref: "+923342388218",
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
 * Social profiles.
 * TODO: replace the placeholder `#` values with the real profile URLs.
 * Any entry left as "#" is rendered as plain text rather than a dead link.
 */
export const socials = [
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
] as const;