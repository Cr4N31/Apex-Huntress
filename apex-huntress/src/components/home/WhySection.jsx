import { LucideGem, Rocket, User2Icon } from 'lucide-react'

const icons = {
  "💎": <LucideGem className="h-6 w-6 text-cyan-400" />,
  "🚀": <Rocket className="h-6 w-6 text-cyan-400" />,
  "👥": <User2Icon className="h-6 w-6 text-cyan-400" />,
}

const REASONS = [
  { icon: "💎", title: "True Scarcity", desc: "Only 369 hunters exist. Each one a permanent stake in the empire." },
  { icon: "🚀", title: "Live Gaming Utility", desc: "Already deployed on the Cronos Army battlefield with more integrations incoming." },
  { icon: "👥", title: "Elite Pride", desc: "A tight, vetted community of holders driving the franchise forward." },
];

export default function WhySection() {
  return (
    <section className="px-6 py-20"  data-aos="fade-up">
      <div className="mx-auto max-w-6xl text-center">
        <p className="mb-3 font-mono text-xs uppercase tracking-widest text-cyan-400">
          // Why Apex Huntress
        </p>
        <h2 className="text-3xl font-bold md:text-4xl">A Pride Built for Players</h2>
        <p className="mx-auto mt-3 max-w-xl text-slate-400">
          Rarity, utility, and community converge in a universe designed for collectors, gamers,
          and Web3 enthusiasts alike.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {REASONS.map((r) => (
            <div key={r.title} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-left">
              {icons[r.icon]}
              <p className="font-semibold">{r.title}</p>
              <p className="mt-1 text-sm text-slate-400">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}