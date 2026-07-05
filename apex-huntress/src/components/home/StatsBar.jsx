const STATS = [
  { value: "369", label: "Total Supply" },
  { value: "12+", label: "Warrior Classes" },
  { value: "60+", label: "Rare Traits" },
  { value: "1/1", label: "Royal Queens" },
];

export default function StatsBar() {
  return (
    <section className="px-6"  data-aos="fade-up">
      <div className="mx-auto max-w-6xl rounded-2xl border border-white/10 bg-white/[0.02] px-6 py-10">
        <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label}>
              <p className="text-3xl font-black text-cyan-300 md:text-4xl">{s.value}</p>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-slate-500">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}