type Stat = {
  label: string;
  value: string;
  caption: string;
};

const stats: Stat[] = [
  { label: "Incorporated as", value: "SECP", caption: "Private Limited" },
  { label: "Incubated at", value: "NICAT", caption: "NASTP,Islamabad" },
  { label: "Selected among Top", value: "2%", caption: "nationwide applicants" },
  { label: "Pakistan based", value: "Defense", caption: "Technology Company" },
];

export default function StatsBar() {
  return (
    <section className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4 sm:gap-x-6 md:gap-x-8 text-center">
        {stats.map((stat) => (
          <div key={stat.label} className="px-2">
            <p className="text-body text-xs sm:text-sm mb-1">{stat.label}</p>
            <p className="text-orange text-2xl sm:text-3xl md:text-4xl font-bold mb-1 break-words">
              {stat.value}
            </p>
            <p className="text-navy text-xs sm:text-sm font-medium">{stat.caption}</p>
          </div>
        ))}
      </div>
    </section>
  );
}