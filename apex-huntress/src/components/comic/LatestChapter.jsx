import { Link } from "react-router-dom";
import image from "../../assets/img/img1.jpeg";

export default function LatestChapter() {
  return (
    <section className="px-6 py-10"  data-aos="fade-up">
      <div className="mx-auto grid max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] md:grid-cols-2">
        <img
          src={image}
          alt="Chapter 01 cover art — Aurora, full armored portrait"
          className="aspect-[4/5] w-full rounded-none border-0 object-cover"
        />
        <div className="flex flex-col justify-center p-8">
          <p className="font-mono text-xs uppercase tracking-widest text-cyan-400">
            ● Latest Comic · Day 001
          </p>
          <h2 className="mt-3 text-2xl font-bold md:text-3xl">Chapter 01: Return to the Pride</h2>
          <p className="mt-3 text-sm text-slate-400">
            Genesis hunters descend on Cronos VII. Follow the genesis pride as they reclaim
            dominance of the Cronos galaxy in a cinematic, daily-released saga.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/comic/read/01"
              className="rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-2.5 text-xs font-bold text-[#060B14]"
            >
              Read Comic →
            </Link>
            <button className="rounded-full border border-white/15 px-5 py-2.5 text-xs font-semibold text-slate-200">
              Browse Archive
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}