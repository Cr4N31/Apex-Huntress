import { Shield, SwordIcon, User2Icon, Rocket } from "lucide-react";

const icons = {
  "🛡️": <Shield className="h-6 w-6 text-cyan-400" />,
  "⚔️": <SwordIcon className="h-6 w-6 text-cyan-400" />,
  "👑": <User2Icon className="h-6 w-6 text-cyan-400" />,
  "⚡": <Rocket className="h-6 w-6 text-cyan-400" />,
};


const FEATURES = [
  { icon: "🛡️", title: "Cyber Armor", desc: "Layered nano-plating with adaptive camouflage cores." },
  { icon: "⚔️", title: "Signature Weapons", desc: "Rail rifles, plasma sabers and pulse cannons." },
  { icon: "👑", title: "Rare Royal Traits", desc: "1/1 Queens with crown halos and aurora manes." },
  { icon: "⚡", title: "Class System", desc: "Hunter, Sentinel, Stalker, Vanguard and more." },
];

export default function CollectionOverview() {
  return (
    <section className="px-6 py-20" data-aos="fade-up">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 font-mono text-xs uppercase tracking-widest text-cyan-400">
          // Collection Overview
        </p>
        <h2 className="max-w-lg text-3xl font-bold md:text-4xl">Forged in the Cronos Galaxy</h2>
        <p className="mt-4 max-w-lg text-slate-400">
          Each unique NFT features distinct classes, armor, weapons, and rare traits that define
          its status within the collection.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition hover:border-cyan-400/30"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-400/10 text-lg">
                {icons[f.icon]}
              </div>
              <p className="font-semibold">{f.title}</p>
              <p className="mt-1 text-sm text-slate-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}