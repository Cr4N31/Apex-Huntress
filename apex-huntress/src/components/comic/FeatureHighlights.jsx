import { Calendar1Icon, FilmIcon, Stars } from 'lucide-react'
const icons = {
  "📅": <Calendar1Icon className="h-6 w-6 text-cyan-400" />,
  "📖": <FilmIcon className="h-6 w-6 text-cyan-400" />,
  "✨": <Stars className="h-6 w-6 text-cyan-400" />,
};

const FEATURES = [
  { icon: "📅", title: "Daily Releases", desc: "A new chapter every day during the saga arc." },
  { icon: "📖", title: "Cinematic Lore", desc: "Hand-illustrated panels expanding the Cronos universe." },
  { icon: "✨", title: "Holder Bonus Panels", desc: "Exclusive scenes unlocked for verified holders." },
];

export default function FeatureHighlights() {
  return (
    <section className="px-6 py-10"  data-aos="fade-up">
      <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-3">
        {FEATURES.map((f) => (
          <div key={f.title} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
            <div className="mb-2 text-xl">{icons[f.icon]}</div>
            <p className="font-semibold">{f.title}</p>
            <p className="mt-1 text-sm text-slate-400">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}