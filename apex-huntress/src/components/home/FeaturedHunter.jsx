import ImagePlaceholder from "../shared/ImagePlaceholder";
import image from '../../assets/img/img1.jpeg'

function Trait({ label, value }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3">
      <p className="font-mono text-[10px] uppercase tracking-widest text-slate-500">{label}</p>
      <p className="mt-0.5 text-sm font-semibold text-cyan-300">{value}</p>
    </div>
  );
}

export default function FeaturedHunter() {
  return (
    <section className="px-6 py-20"  data-aos="fade-up">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-center">
        <img src={image} alt="Aurora — Royal Vanguard, full armored portrait" className="aspect-[4/5] border border-cyan-500 shadow-[0_0_25px_rgba(34,211,238,0.35)] w-full rounded-2xl object-cover" />
        <div>
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-cyan-400">
            // Featured Hunter · #019
          </p>
          <h2 className="text-3xl font-bold md:text-4xl">Aurora · The Vanguard</h2>
          <p className="mt-4 max-w-md text-slate-400">
            Forged in the storms of Cronos VII. Wields the Pulse Lance and carries the Vanguard
            Crest. One of only nine Royal class hunters in the Genesis drop.
          </p>
          <div className="mt-6 grid max-w-sm grid-cols-2 gap-3">
            <Trait label="Class" value="Vanguard" />
            <Trait label="Armor" value="Nano-Plated MK-IV" />
            <Trait label="Weapon" value="Pulse Lance" />
            <Trait label="Rarity" value="Royal · 0.27%" />
          </div>
        </div>
      </div>
    </section>
  );
}