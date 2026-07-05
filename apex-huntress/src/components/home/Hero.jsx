import ImagePlaceholder from "../shared/ImagePlaceholder";
import image from '../../assets/img/img1.jpeg'

function Stat({ label, value }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3">
      <p className="font-mono text-[10px] uppercase tracking-widest text-slate-500">{label}</p>
      <p className="text-lg font-bold text-cyan-300">{value}</p>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-16" data-aos="fade-up">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(34,211,238,0.12),transparent_60%)]" />
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-center">
        <div>
          <p className="mb-4 font-mono text-xs uppercase tracking-widest text-cyan-400">
            ● Cronos · Genesis Drop · 369 Supply
          </p>
          <h1 className="text-5xl font-black leading-[1.05] md:text-6xl">
            The <span className="text-cyan-400">Apex</span> Huntress
          </h1>
          <p className="mt-5 max-w-md text-slate-400">
            An exclusive collection of 369 cyber-enhanced lioness warriors forged in the far
            reaches of the Cronos galaxy. Elite hunters reclaiming dominance of the pride.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button className="rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 text-sm font-bold text-[#060B14] shadow-[0_0_25px_rgba(34,211,238,0.35)]">
              Enter the Pride →
            </button>
            <button className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-slate-200">
              Read Comic
            </button>
          </div>

          <div className="mt-10 grid max-w-md grid-cols-3 gap-3">
            <Stat label="Supply" value="369" />
            <Stat label="Chain" value="Cronos" />
            <Stat label="Classes" value="12+" />
          </div>
        </div>

        <img
        src={image}
        alt="Genesis huntress in full armor"
        className="aspect-[4/5] w-full motion-safe:animate-float motion-safe:animate-glow-pulse rounded-2xl border border-cyan-500 object-cover"
        />
      </div>
    </section>
  );
}