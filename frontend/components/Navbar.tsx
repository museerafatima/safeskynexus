import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Defense", href: "/defense" },
  { label: "Sub-Conventional Warfare", href: "/sub-conventional-warfare" },
  { label: "About Us", href: "/about" },
];

export default function Navbar() {
  return (
    <header className="w-full border-b border-gray-200">
      <div className="max-w-container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo-icon.png"
            alt="SafeSky Nexus logo"
            width={48}
            height={21}
            priority
          />
        </Link>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-navy text-sm font-medium hover:text-orange transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Contact */}
        <Link
          href="/contact"
          className="text-navy text-sm font-medium hover:text-orange transition-colors"
        >
          Contact
        </Link>
      </div>
    </header>
  );
}