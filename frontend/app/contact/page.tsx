import type { Metadata } from "next";
import ContactSection from "@/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the SafeSky Nexus team in Rawalpindi about autonomous aerial systems, deployments and partnerships.",
};

export default function ContactPage() {
  return (
    <main id="content">
      <ContactSection />
    </main>
  );
}