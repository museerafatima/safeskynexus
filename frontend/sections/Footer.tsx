import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/public/safeskynexus-logo.png";

const drones = [
  "Surveillance Drone",
  "Rescue Drone",
  "Transport Drone",
  "Natural Disaster Drone",
];

const systems = ["Delivery Systems", "Anti-Drone Systems"];

const about = ["Mission", "Vission", "History", "Founder's Message"];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-[1.3fr_1fr_1fr_1fr_1fr] gap-10">
        {/* Brand + contact */}
        <div className="flex flex-col gap-4">
          <div className="bg-white rounded-md px-3 py-2 w-fit">
            <Image src={logo} alt="SafeSkyNexus logo" className="h-12 w-auto" />
          </div>
          <div className="flex flex-col gap-2 text-sm text-white/90">
            <a href="mailto:info@safeskynexus.com" className="flex items-center gap-2 hover:text-white">
              <Mail size={16} /> info@safeskynexus.com
            </a>
            <a href="tel:+923342388218" className="flex items-center gap-2 hover:text-white">
              <Phone size={16} /> +92 334 2388218
            </a>
            <div className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 flex-none" />
              <span>Alpha Square, NICAT, NASTP, Rawalpindi, Pakistan</span>
            </div>
          </div>
        </div>

        {/* Drones */}
        <div>
          <h4 className="font-semibold mb-4">Drones</h4>
          <ul className="space-y-3 text-sm text-white/90">
            {drones.map((item) => (
              <li key={item}>
                <Link href="#" className="hover:text-white">{item}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Systems */}
        <div>
          <h4 className="font-semibold mb-4">Systems</h4>
          <ul className="space-y-3 text-sm text-white/90">
            {systems.map((item) => (
              <li key={item}>
                <Link href="#" className="hover:text-white">{item}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* About */}
        <div>
          <h4 className="font-semibold mb-4">About</h4>
          <ul className="space-y-3 text-sm text-white/90">
            {about.map((item) => (
              <li key={item}>
                <Link href="#" className="hover:text-white">{item}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <div className="flex flex-col gap-3 text-sm text-white/90">
            <a href="#" className="flex items-center gap-2 hover:text-white">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
              Instagram
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-white">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
                <path d="M10 9v12M10 13a4 4 0 0 1 8 0v8" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/15">
        <div className="max-w-container mx-auto px-6 py-4 flex flex-col md:flex-row justify-between gap-2 text-xs text-white/70">
          <p>SSN Privacy Policy &bull; Use of Cookies &bull; Terms of Use</p>
          <p>Copyright &copy; 2026 SSN All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}