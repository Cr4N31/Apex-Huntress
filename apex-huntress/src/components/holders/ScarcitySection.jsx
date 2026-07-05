import { CatIcon } from "lucide-react";
const FACTS = [
  { value: "0.27%", label: "Per-Hunter Share" },
  { value: "Forever", label: "Capped Supply" },
  { value: "1 of 369", label: "Membership" },
];

export default function ScarcitySection() {
  return (
    <section className="px-6 py-14"  data-aos="fade-up">
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 font-mono text-xs uppercase tracking-widest text-cyan-400">
          // Exclusive Holder Benefits
        </p>
        <h2 className="text-2xl flex items-center gap-2 font-bold md:text-3xl"><CatIcon/> Only 369 Will Ever Exist</h2>

        <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.02] p-8">
          <p className="max-w-2xl text-sm text-slate-400">
            With only 369 NFTs in existence, ownership remains permanently scarce. Every holder
            commands a measurable share of the empire, the lore, and every future drop the
            franchise produces.
          </p>
          <div className="mt-6 grid grid-cols-3 gap-4 text-center">
            {FACTS.map((f) => (
              <div key={f.label}>
                <p className="text-2xl font-black text-cyan-300 md:text-3xl">{f.value}</p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-slate-500">
                  {f.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}