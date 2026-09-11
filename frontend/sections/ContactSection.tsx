import ContactForm from "@/components/ContactForm";

const contactInfo = [
  { label: "Email", value: "info@safeskynexus.com", icon: "@" },
  { label: "Phone Number", value: "+92 334 2388218", icon: "📞" },
  { label: "Office", value: "Alpha Square, NICAT, NASTP, Rawalpindi, Pakistan", icon: "📍" },
];

export default function ContactSection() {
  return (
    <section className="max-w-container mx-auto px-6 py-16">
      <div className="grid md:grid-cols-2 gap-6 items-start">
        {/* Left: map + info */}
        <div className="space-y-6">
          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm h-64">
            <iframe
              title="SafeSky Nexus location"
              src="https://maps.google.com/maps?q=NASTP+Alpha+Rawalpindi&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
            <div className="space-y-5">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <span className="w-10 h-10 shrink-0 rounded-full bg-navy/10 text-navy flex items-center justify-center text-base">
                    {item.icon}
                  </span>
                  <div>
                    <h3 className="text-navy font-semibold text-sm mb-0.5">
                      {item.label}
                    </h3>
                    <p className="text-body text-sm leading-relaxed">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: form */}
        <ContactForm />
      </div>
    </section>
  );
}