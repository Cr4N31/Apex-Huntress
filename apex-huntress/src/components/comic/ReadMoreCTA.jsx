export default function ReadMoreCTA() {
  return (
    <section className="px-6 pt-8 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-4 rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 via-slate-900/80 to-blue-500/10 p-6 shadow-[0_0_30px_rgba(34,211,238,0.12)] md:flex-row md:items-center md:p-8">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-400">
            ● Read More
          </p>
          <h2 className="mt-2 text-xl font-semibold text-white sm:text-2xl">
            Dive deeper into the lore and community updates.
          </h2>
        </div>
        <a
          href="https://discord.com/channels/1466853019999146161/1467488660063522869"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-2.5 text-sm font-bold text-[#060B14] transition hover:brightness-110"
        >
          Open Discord Channel →
        </a>
      </div>
    </section>
  );
}
