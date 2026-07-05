import { useParams, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ImagePlaceholder from "../components/shared/ImagePlaceholder";

import comic1Page1 from "../assets/comic/comicImg1.jpeg";
import comic1Page2 from "../assets/comic/comicImg2.jpeg";
import comic1Page3 from "../assets/comic/comicImg3.jpeg";
import comic1Page4 from "../assets/comic/comicImg4.jpeg";
import comic1Page5 from "../assets/comic/comicImg5.jpeg";

const CHAPTERS = {
  "01": {
    title: "Return to the Pride",
    panels: [comic1Page1, comic1Page2, comic1Page3, comic1Page4, comic1Page5],
    prev: null,
    next: "02",
  },
  "02": { title: "Steel Mane", panelCount: 5, prev: "01", next: "03" },
  "03": { title: "Signal of the Queen", panelCount: 7, prev: "02", next: "04" },
  "04": { title: "Hunters of Echo-9", panelCount: 6, prev: "03", next: "05" },
};

export default function ComicReader() {
  const { chapterId = "01" } = useParams();
  const chapter = CHAPTERS[chapterId];

  if (!chapter) {
    return (
      <div className="flex min-h-screen flex-col bg-[#060B14] text-white">
        <Navbar active="Comic" />
        <div className="flex flex-1 items-center justify-center px-6 text-center">
          <div>
            <p className="text-lg font-semibold">Chapter not found</p>
            <Link to="/comic" className="mt-3 inline-block text-sm text-cyan-400 hover:underline">
              ← Back to Chronicles
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#060B14] text-white">
      <Navbar active="Comic" />

      <section className="px-6 pb-8 pt-16 text-center">
        <Link
          to="/comic"
          className="font-mono text-xs uppercase tracking-widest text-cyan-400/70 hover:text-cyan-300"
        >
          ← Back to Chronicles
        </Link>
        <p className="mt-4 font-mono text-xs uppercase tracking-widest text-cyan-400">
          Chapter {chapterId}
        </p>
        <h1 className="mt-2 text-3xl font-black md:text-4xl">{chapter.title}</h1>
      </section>

      {/* Panels — stacked full-width, reader scrolls straight down */}
      <section className="mx-auto flex max-w-3xl flex-col gap-6 px-6 py-6">
        {chapter.panels
          ? chapter.panels.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Chapter ${chapterId} — Page ${i + 1}`}
                className="aspect-[3/4] w-full rounded-2xl object-cover"
              />
            ))
          : Array.from({ length: chapter.panelCount }, (_, i) => i + 1).map((panelNum) => (
              <ImagePlaceholder
                key={panelNum}
                label={`Chapter ${chapterId} — Panel ${panelNum}`}
                aspect="aspect-[3/4]"
                className="w-full"
              />
            ))}
      </section>

      {/* Prev / Next chapter nav */}
      <section className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-6 py-14">
        {chapter.prev ? (
          <Link
            to={`/comic/read/${chapter.prev}`}
            className="rounded-full border border-white/15 px-5 py-2.5 text-xs font-semibold text-slate-200 hover:border-cyan-400/40"
          >
            ← Chapter {chapter.prev}
          </Link>
        ) : (
          <span />
        )}

        {chapter.next ? (
          <Link
            to={`/comic/read/${chapter.next}`}
            className="rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-2.5 text-xs font-bold text-[#060B14]"
          >
            Chapter {chapter.next} →
          </Link>
        ) : (
          <span className="font-mono text-xs uppercase tracking-widest text-slate-500">
            More coming soon
          </span>
        )}
      </section>

      <Footer />
    </div>
  );
}