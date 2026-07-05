import { CatIcon } from "lucide-react";
import holdersBg from '../../assets/img/img2.jpeg'

export default function HoldersHero() {
  return (
    <section className="relative overflow-hidden px-6 pb-14 pt-16 text-center" data-aos="fade-up">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${holdersBg})` }}
      />
      <div className="absolute inset-0 bg-[#060B14]/80" />

      <div className="relative">
        <p className="mb-3 font-mono text-xs uppercase tracking-widest text-cyan-400">
          // Holder Benefits
        </p>
        <h1 className="text-4xl font-black md:text-5xl">
          What <span className="text-cyan-400">Holders</span> Get
        </h1>
        <p className="mt-4 flex items-center justify-center gap-2 text-lg text-slate-300">
          <CatIcon /> More Than an NFT. A Gaming Empire in the Making.
        </p>
        <div className="mx-auto mt-8 max-w-lg rounded-2xl border border-white/10 bg-white/[0.02] px-6 py-5">
          <p className="font-mono text-[10px] uppercase tracking-widest text-cyan-400/70">
            // Mission
          </p>
          <p className="mt-2 text-sm text-slate-300">
            Become the most recognized and respected gaming-focused NFT collection on Cronos.
          </p>
        </div>
      </div>
    </section>
  );
}