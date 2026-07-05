export default function FinalCTA() {
  return (
    <section className="px-6 py-20 text-center">
      <h2 className="text-3xl font-black leading-tight md:text-5xl">
        <span className="text-cyan-400">One Pride.</span>
        <br />
        One Queen.
        <br />
        One Future.
      </h2>
      <p className="mx-auto mt-5 max-w-md text-slate-400">
        The hunt is just beginning. Make sure you're holding at least one Apex Huntress before
        the next chapter unfolds.
      </p>
      <div className="mt-7 flex flex-wrap justify-center gap-3">
        <button className="rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 text-sm font-bold text-[#060B14] shadow-[0_0_25px_rgba(34,211,238,0.35)]">
          Secure a Hunter
        </button>
        <button className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-slate-200">
          Read the Chronicles
        </button>
      </div>
    </section>
  );
}