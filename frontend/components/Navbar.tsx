"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { primaryNav, routes, site } from "@/lib/site";

/* ==========================================================================
   NAVBAR
   Changes from the original:
   • Active page is now indicated (permanent orange rule + aria-current).
     Previously there was no way to tell which page you were on.
   • Contact is a filled button, not another text link — the CTA is now
     visually distinct from navigation, which is what drives conversion.
   • Desktop nav switches at `lg`, not `md`. At md the label
     "Sub-Conventional Warfare" collided with the logo.
   • Drawer closes on Escape and on route change, locks background scroll,
     and animates on grid-rows rather than a guessed max-h-96 (which would
     have clipped the menu if a link were ever added).
   ========================================================================== */

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const panelRef = useRef<HTMLDivElement>(null);

  // Close the drawer whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Escape to close.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Prevent the page behind the drawer from scrolling.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-surface/90 backdrop-blur-md supports-backdrop-filter:bg-surface/75">
      <div className="shell flex items-center justify-between gap-4 py-3.5">
        <Link
          href={routes.home}
          aria-label={`${site.name} — home`}
          className="flex shrink-0 items-center rounded-md transition-opacity duration-200 hover:opacity-80"
        >
          <Image
            src="/images/logo-icon.png"
            alt="SafeSky Nexus"
            width={96}
            height={42}
            priority
            className="h-8 w-auto sm:h-9"
          />
        </Link>

        {/* ---- Desktop navigation ---- */}
        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {primaryNav.map((link) => {
              const active = isActive(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`group relative flex min-h-11 items-center text-sm font-medium transition-colors duration-200 ${
                      active ? "text-navy" : "text-navy/70 hover:text-navy"
                    }`}
                  >
                    {link.label}
                    <span
                      aria-hidden="true"
                      className={`absolute inset-x-0 bottom-1.5 h-0.5 origin-left rounded-full bg-orange transition-transform duration-300 ease-soft ${
                        active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <Link
          href={routes.contact}
          aria-current={isActive(routes.contact) ? "page" : undefined}
          className="hidden min-h-11 items-center rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white transition-[transform,background-color] duration-300 ease-soft hover:-translate-y-0.5 hover:bg-navy-800 active:translate-y-0 active:scale-[0.98] lg:inline-flex"
        >
          Contact us
        </Link>

        {/* ---- Mobile trigger ---- */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="-mr-2 flex h-11 w-11 items-center justify-center rounded-full text-navy transition-colors duration-200 hover:bg-navy/5 active:scale-90 lg:hidden"
        >
          {open ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </div>

      {/* ---- Mobile drawer ----
          grid-template-rows 0fr -> 1fr animates to the menu's real height,
          however many items it ends up containing. */}
      <div
        id="mobile-menu"
        ref={panelRef}
        className={`grid overflow-hidden border-line bg-surface transition-[grid-template-rows,opacity] duration-300 ease-soft lg:hidden ${
          open ? "grid-rows-[1fr] border-t opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="min-h-0">
          <nav aria-label="Mobile" className="shell py-3">
            <ul className="flex flex-col">
              {primaryNav.map((link) => {
                const active = isActive(link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      aria-current={active ? "page" : undefined}
                      onClick={() => setOpen(false)}
                      className={`flex min-h-12 items-center gap-3 border-b border-line/70 py-3 text-base font-medium transition-colors duration-200 ${
                        active ? "text-orange" : "text-navy hover:text-orange"
                      }`}
                    >
                      <span
                        aria-hidden="true"
                        className={`h-1.5 w-1.5 rounded-full transition-colors ${
                          active ? "bg-orange" : "bg-navy/20"
                        }`}
                      />
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <Link
              href={routes.contact}
              onClick={() => setOpen(false)}
              className="mt-4 mb-2 flex min-h-12 items-center justify-center rounded-full bg-orange px-5 py-3 text-base font-semibold text-white shadow-glow active:scale-[0.98]"
            >
              Contact us
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}