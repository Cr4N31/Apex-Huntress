import { TrophyIcon } from "lucide-react";
export default function ClaimCTA() {
    const MintLink = "https://www.croarmy.site/marketplace/collection/0x7e9c0ed6433f1425b218f7cc721ba60d6be9e9b9";
  return (
    <section className="px-6 py-20"  data-aos="fade-up">
      <div className="mx-auto max-w-3xl rounded-3xl border border-cyan-400/20 bg-gradient-to-b from-cyan-400/[0.06] to-transparent px-8 py-14 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-400/10 text-2xl">
            <TrophyIcon className="h-6 w-6 text-cyan-400" />
        </div>
        <h2 className="text-3xl font-bold">Claim Your Hunter</h2>
        <p className="mx-auto mt-3 max-w-md text-slate-400">
          Join an elite pride of 369. The hunt is just beginning. Secure your place before the
          next chapter unfolds.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <a href={MintLink} target="_blank" rel="noopener noreferrer" className="rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 text-sm font-bold text-[#060B14] shadow-[0_0_25px_rgba(34,211,238,0.35)]">
            View Collection
          </a>
          <a href="#" className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-slate-200">
            What Holders Get
          </a>
        </div>
      </div>
    </section>
  );
}