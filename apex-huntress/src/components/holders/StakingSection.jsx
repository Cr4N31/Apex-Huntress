import ImagePlaceholder from "../shared/ImagePlaceholder";
import { GemIcon, Star, CoinsIcon } from "lucide-react";

const PERKS = [
  "Passive token rewards",
  "Tiered loot unlocks",
  "Priority drop access",
  "Compounding loyalty bonuses",
];

export default function StakingSection() {
  return (
    <section className="px-6 py-14"  data-aos="fade-up">
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 font-mono text-xs uppercase tracking-widest text-cyan-400">
          // NFT Staking
        </p>
        <h2 className="text-2xl flex items-center gap-2 font-bold md:text-3xl"><GemIcon/> Stake the Pride. Earn From the Hunt.</h2>

        <div className="mt-8 grid gap-10 rounded-2xl border border-white/10 bg-white/[0.02] p-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="max-w-md text-sm text-slate-400">
              Apex Huntress staking rewards holders for long-term commitment. Lock your hunter to
              earn ongoing pride tokens, unlock tiered loot, and gain priority access to upcoming
              drops and franchise titles.
            </p>
            <div className="mt-5 grid grid-cols-2 gap-3">
              {PERKS.map((p) => (
                <div key={p} className="rounded-lg flex items-center gap-2 border border-white/10 px-3 py-2 text-xs text-slate-300">
                  <Star/> {p}
                </div>
              ))}
            </div>
          </div>
        <div className="relative mx-auto flex h-40 w-40 items-center justify-center rounded-full border border-cyan-500 p-10 shadow">
        {/* pulsing glow ring */}
        <div className="absolute inset-0 animate-ping rounded-full border border-cyan-400" />
        <div className="absolute inset-0 rounded-full shadow-[0_0_20px_4px_rgba(34,211,238,0.5)] animate-pulse" />

        <CoinsIcon className="relative h-full w-full text-cyan-400" />
        </div>
        </div>
      </div>
    </section>
  );
}