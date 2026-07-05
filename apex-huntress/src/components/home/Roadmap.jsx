const PHASES = [
  { n: "01", title: "Genesis Mint", desc: "Launch 369 founding hunters across Cronos." },
  { n: "02", title: "Battlefield Live", desc: "Deployed inside Cronos Army with playable utility." },
  { n: "03", title: "Staking & Rewards", desc: "Passive income, raffles and milestone giveaways." },
  { n: "04", title: "Gaming Universe", desc: "Expanded titles, lore drops and franchise growth." },
];

export default function Roadmap() {
  return (
    <section className="px-6 py-20"  data-aos="fade-up">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-cyan-400">
              // Roadmap Preview
            </p>
            <h2 className="text-3xl font-bold md:text-4xl">Phases of the Hunt</h2>
          </div>
          <button className="rounded-full border border-white/15 px-5 py-2 text-xs font-semibold text-slate-300">
            See Holder Utility
          </button>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {PHASES.map((p) => (
            <div key={p.n} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <p className="font-mono text-xs text-cyan-400">Phase {p.n}</p>
              <p className="mt-2 font-semibold">{p.title}</p>
              <p className="mt-1 text-sm text-slate-400">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}