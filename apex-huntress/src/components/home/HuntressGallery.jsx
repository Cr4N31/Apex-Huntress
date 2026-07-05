import { useRef } from "react";
import ImagePlaceholder from "../shared/ImagePlaceholder";
import img2 from '../../assets/img/img2.jpeg'
import img3 from '../../assets/img/img3.jpeg'
import img4 from '../../assets/img/img4.jpeg'
import img5 from '../../assets/img/img5.jpeg'


const HUNTERS = [
  { id: "#001", img: img2, name: "Scarlet Vex", tag: "Stalker" },
  { id: "#006", img: img3, name: "Verdant Solace", tag: "Sentinel" },
  { id: "#012", img: img4, name: "Azure Rune", tag: "Hunter" },
  { id: "#004", img: img5, name: "Solar Nyx", tag: "Vanguard" },
];

function ArrowBtn({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="h-9 w-9 rounded-full border border-white/15 text-slate-300 transition hover:border-cyan-400/50 hover:text-cyan-300"
    >
      {children}
    </button>
  );
}

export default function HuntressGallery() {
  const trackRef = useRef(null);
  const scroll = (dir) => trackRef.current?.scrollBy({ left: dir * 300, behavior: "smooth" });

  return (
    <section className="px-6 py-20"  data-aos="fade-up">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-end justify-between">
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-cyan-400">
              // Huntress Gallery
            </p>
            <h2 className="text-3xl font-bold md:text-4xl">
              The <span className="text-cyan-400">Pride</span>, Unleashed
            </h2>
            <p className="mt-3 max-w-md text-slate-400">
              Slide through the gallery and witness the elite hunters of Cronos.
            </p>
          </div>
          <div className="hidden gap-2 md:flex">
            <ArrowBtn onClick={() => scroll(-1)}>‹</ArrowBtn>
            <ArrowBtn onClick={() => scroll(1)}>›</ArrowBtn>
          </div>
        </div>

        <div
          ref={trackRef}
          className="mt-8 flex gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {HUNTERS.map((h) => (
            <div key={h.id} className="w-fit flex-none">
              <img src={h.img} alt={h.name} className="aspect-[4/5] hover:scale-105 border border-cyan-500 shadow-[0_0_25px_rgba(34,211,238,0.35)] transition-transform duration-300 w-62 rounded-2xl object-cover" />
              <div className="mt-3 flex items-center justify-between text-xs font-mono text-slate-500">
                <span>{h.id}</span>
                <span className="rounded-full border border-cyan-400/30 px-2 py-0.5 text-cyan-300">
                  {h.tag}
                </span>
              </div>
              <p className="mt-1 font-semibold">{h.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}