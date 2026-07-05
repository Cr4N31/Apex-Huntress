import { Gamepad } from "lucide-react";
function Card({ tag, title, desc, list }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
      <p className="font-mono text-[10px] uppercase tracking-widest text-cyan-400/70">{tag}</p>
      <p className="mt-2 text-lg font-semibold">{title}</p>
      {desc && <p className="mt-2 text-sm text-slate-400">{desc}</p>}
      {list && (
        <ul className="mt-2 space-y-1 text-sm text-slate-400">
          {list.map((l) => (
            <li key={l}>· {l}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function GamingUtility() {
  return (
    <section className="px-6 py-14"  data-aos="fade-up">
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 font-mono text-xs uppercase tracking-widest text-cyan-400">
          // Gaming-Focused Utility
        </p>
        <h2 className="text-2xl flex items-center gap-2 font-bold md:text-3xl"><Gamepad/> Built for Players, Powered by the Pride</h2>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <Card
            tag="✓ Current"
            title="Live on the Battlefield"
            desc="Currently deployed inside Cronos Army. Your hunter is already in the fight."
          />
          <Card
            tag="◔ Coming Soon"
            title="Expanding Universe"
            list={["Additional gaming integrations", "Future playable experiences", "Exclusive in-game utilities"]}
          />
        </div>
      </div>
    </section>
  );
}