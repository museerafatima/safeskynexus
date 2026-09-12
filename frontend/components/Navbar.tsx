"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Defense", href: "/defense" },
  { label: "Sub-Conventional Warfare", href: "/sub-conventional-warfare" },
  { label: "About Us", href: "/about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full border-b border-gray-200 z-50 bg-white/95 backdrop-blur supports-backdrop-filter:bg-white/80 sticky top-0">
      <div className="max-w-container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
        <Link
          href="/"
          className="flex items-center transition-transform duration-200 hover:scale-105"
          onClick={() => setOpen(false)}
        >
          <Image src="/images/logo-icon.png" alt="SafeSky Nexus logo" width={48} height={21} priority />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-navy text-sm font-medium py-1 group"
            >
              {link.label}
              <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-orange transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="hidden md:block relative text-navy text-sm font-medium py-1 group"
        >
          Contact
          <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-orange transition-all duration-300 group-hover:w-full" />
        </Link>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 -mr-2 text-navy min-w-11 min-h-11 flex items-center justify-center transition-transform duration-200 active:scale-90"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-200 ease-in-out ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-4 sm:px-6 py-4 gap-4 border-t border-gray-200 bg-white">
          {[...navLinks, { label: "Contact", href: "/contact" }].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-navy text-sm font-medium py-2 min-h-11 flex items-center hover:text-orange hover:translate-x-1 transition-all duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}