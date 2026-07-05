import comicBg from '../../assets/img/img4.jpeg'

export default function ComicHero() {
  return (
    <section className="relative overflow-hidden px-6 pb-14 pt-16 text-center" data-aos="fade-up">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${comicBg})` }}
      />
      <div className="absolute inset-0 bg-[#060B14]/80" />

      <div className="relative">
        <p className="mb-3 font-mono text-xs uppercase tracking-widest text-cyan-400">
          // The Chronicles
        </p>
        <h1 className="text-4xl font-black md:text-5xl">
          The Apex Huntress <br />
          <span className="text-cyan-400">Chronicles</span>
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-slate-400">
          Experience the story behind the Apex Huntress universe through regularly released comic
          chapters.
        </p>
      </div>
    </section>
  );
}