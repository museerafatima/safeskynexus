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
    <section className="max-w-container mx-auto px-6 py-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="text-body text-sm mb-1">{stat.label}</p>
            <p className="text-orange text-3xl md:text-4xl font-bold mb-1">
              {stat.value}
            </p>
            <p className="text-navy text-sm font-medium">{stat.caption}</p>
          </div>
        ))}
      </div>
    </section>
  );
}