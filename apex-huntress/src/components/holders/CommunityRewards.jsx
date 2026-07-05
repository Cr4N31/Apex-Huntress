import { TrophyIcon, GiftIcon, CrownIcon, User, Package, Circle } from "lucide-react";

const icons = {
  "🎁": <GiftIcon className="h-6 w-6 text-cyan-400" />,
  "👑": <CrownIcon className="h-6 w-6 text-cyan-400" />,
  "🏆": <TrophyIcon className="h-6 w-6 text-cyan-400" />,
  "👥": <User className="h-6 w-6 text-cyan-400" />,
  "🎟️": <Package className="h-6 w-6 text-cyan-400" />,
  "◔": <Circle className="h-6 w-6 text-cyan-400" />,
};

const REWARDS = [
  { icon: "🎁", title: "Mint Milestone Giveaways", desc: "Major rewards triggered at every supply milestone." },
  { icon: "👑", title: "Top 2 Holder Giveaway", desc: "Elite prizes airdropped to top holders after mint-out." },
  { icon: "🏆", title: "Future Competitions", desc: "In-game tournaments with exclusive Apex prize pools." },
  { icon: "👥", title: "Community Events", desc: "Private AMAs, lore drops, alpha calls and gatherings." },
  { icon: "🎟️", title: "Exclusive Raffles", desc: "Holder-only raffles for rare gear, art and tokens." },
  { icon: "◔", title: "Loyalty Tiers", desc: "Long-term holders unlock compounding perks." },
];

export default function CommunityRewards() {
  return (
    <section className="px-6 py-14"  data-aos="fade-up">
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 font-mono text-xs uppercase tracking-widest text-cyan-400">
          // Community Rewards
        </p>
        <h2 className="text-2xl flex items-center gap-2 font-bold md:text-3xl"><TrophyIcon/> The Pride Always Eats</h2>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {REWARDS.map((r) => (
            <div key={r.title} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <div className="mb-2 text-xl">{icons[r.icon]}</div>
              <p className="font-semibold">{r.title}</p>
              <p className="mt-1 text-sm text-slate-400">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}