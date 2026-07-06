import { useEffect, useRef, useState } from "react";
import img1 from '../../assets/comicpageimg1.jpeg';
import img2 from '../../assets/comicpageimg2.jpeg'
import img3 from '../../assets/comicpageimg3.jpeg'
import img4 from '../../assets/comicpageimg4.jpeg'

const CHAPTERS = [
  { day: "Day 001", img: img1, title: "Return to the Pride", desc: "Genesis hunters descend on Cronos VII.", status: "live" },
  { day: "Day 002", img: img2, title: "Steel Mane", desc: "Aurora forges her first alliance in the Iron Wastes.", status: "live" },
  { day: "Day 003", img: img3, title: "Signal of the Queen", desc: "A broadcast unites the scattered prides.", status: "live" },
  { day: "Day 004", img: img4, title: "Hunters of Echo-9", desc: "An ambush behind enemy lines.", status: "live" },
];

/**
 * The vertical spine runs down the center of the timeline. A glowing segment
 * tracks how far the reader has scrolled through the section: 0% at the top
 * of the list, 100% once the last chapter has passed the middle of the
 * viewport. Driven by scroll position, not time, so it always matches where
 * the reader actually is.
 */
export default function ChapterTimeline() {
  const trackRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = null;

    const update = () => {
      raf = null;
      const el = trackRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const viewportH = window.innerHeight;
      const viewportCenter = viewportH * 0.5;

      const raw = (viewportCenter - rect.top) / rect.height;
      setProgress(Math.min(1, Math.max(0, raw)));
    };

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(update);
    };

    update();

    if (!prefersReducedMotion) {
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll);
    } else {
      setProgress(1);
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="px-4 py-14 sm:px-6 sm:py-20" data-aos="fade-up">
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 font-mono text-xs uppercase tracking-widest text-cyan-400">
          // Archive
        </p>
        <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">Previous Chapters</h2>

        <div ref={trackRef} className="relative mt-10 sm:mt-14">
          {/* base line — always visible, faint */}
          <div className="absolute left-4 top-0 h-full w-px bg-white/10 sm:left-6 md:left-1/2 md:-translate-x-1/2" />

          {/* glow segment that fills down the line as the user scrolls */}
          <div
            className="absolute left-4 top-0 w-px overflow-visible sm:left-6 md:left-1/2 md:-translate-x-1/2"
            style={{ height: `${progress * 100}%`, transition: "height 120ms linear" }}
          >
            <div className="absolute inset-x-0 top-0 h-full bg-gradient-to-b from-cyan-300 via-cyan-400/70 to-cyan-400/10" />
            {/* traveling glow "head" at the leading edge — smaller on mobile */}
            <div
              className="absolute bottom-0 left-1/2 h-12 w-12 -translate-x-1/2 translate-y-1/2 rounded-full bg-cyan-300/50 blur-xl sm:h-20 sm:w-20 sm:blur-2xl"
              aria-hidden
            />
            <div
              className="absolute bottom-0 left-1/2 h-2.5 w-2.5 -translate-x-1/2 translate-y-1/2 rounded-full bg-cyan-200 shadow-[0_0_14px_5px_rgba(34,211,238,0.7)] sm:h-3 sm:w-3 sm:shadow-[0_0_18px_6px_rgba(34,211,238,0.7)]"
              aria-hidden
            />
          </div>

          <ul className="space-y-10 sm:space-y-16">
            {CHAPTERS.map((c, i) => {
              const isLeft = i % 2 === 0;
              return (
                <li
                  key={c.day}
                  className={`relative flex flex-col gap-4 sm:gap-6 md:flex-row md:items-center ${
                    isLeft ? "" : "md:flex-row-reverse"
                  }`}
                >
                  {/* dot marker on the spine */}
                  <span className="absolute left-4 top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.8)] sm:left-6 sm:h-2.5 sm:w-2.5 md:left-1/2" />

                  <div
                    className={`pl-9 sm:pl-12 md:w-1/2 md:pl-0 ${
                      isLeft ? "md:pr-14 md:text-right" : "md:pl-14"
                    }`}
                  >
                    <p className="font-mono text-xs text-cyan-400/70">{c.day}</p>
                    <p className="mt-1 text-sm text-slate-400">{c.desc}</p>
                  </div>

                  <div className="pl-9 sm:pl-12 md:w-1/2 md:pl-14">
                    <img
                      src={c.img}
                      alt={`${c.title} — chapter cover art`}
                      className="aspect-video w-full max-w-sm rounded-2xl object-cover"
                    />
                    <div className="mt-2 flex items-center justify-between gap-2">
                      <p className="font-semibold">{c.title}</p>
                      <span
                        className={`shrink-0 rounded-full px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide ${
                          c.status === "live"
                            ? "bg-cyan-400/10 text-cyan-300"
                            : "bg-white/5 text-slate-500"
                        }`}
                      >
                        {c.status === "live" ? "Live" : "Soon"}
                      </span>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}