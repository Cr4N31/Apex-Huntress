import teamBg from '../../assets/img/img3.jpeg'

export default function TeamHero() {
  return (
    <section className="relative overflow-hidden px-6 pb-14 pt-16 text-center" data-aos="fade-up">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${teamBg})` }}
      />
      <div className="absolute inset-0 bg-[#060B14]/80" />

      <div className="relative">
        <p className="mb-3 font-mono text-xs uppercase tracking-widest text-cyan-400">
          // The Team
        </p>
        <h1 className="text-4xl font-black md:text-5xl">
          Meet the <span className="text-cyan-400">Pride</span>
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-slate-400">
          The architects, artists and operators forging the Apex Huntress empire across the Cronos
          galaxy.
        </p>
      </div>
    </section>
  );
}