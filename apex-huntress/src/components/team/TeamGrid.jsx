import favicon from '../../assets/img/favicon.jpeg'
import { CrownIcon, User } from 'lucide-react'
import { FaTwitter, FaGithub} from 'react-icons/fa'

const icons = {
  "👑": <CrownIcon className="h-3 w-3 text-cyan-400" />,
  "👥": <User className="h-3 w-3 text-cyan-400" />,
};

const TEAM = [
  {
    name: "Crypto Joe",
    role: "Founder",
    icon: "👑",
    desc: "Architect of the Apex universe and keeper of the genesis lore. Steering the franchise across Cronos.",
  },
  {
    name: "Alessandro",
    role: "Community Manager",
    icon: "👥",
    desc: "Voice of the pride. Bridges holders, mods and the studio across every channel, every day.",
  },
  {
    name: "Wisdom777",
    role: "Community Manager",
    icon: "👥",
    desc: "Keeps the alpha flowing and the pride aligned. The signal stays clean on his watch.",
  },
];

function SocialDot({ label }) {
  return (
    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-[10px] text-slate-400">
      {label}
    </span>
  );
}

export default function TeamGrid() {
  return (
    <section className="px-6 py-10"  data-aos="fade-up">
      <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
        {TEAM.map((m) => (
          <div key={m.name} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
            <div className="flex items-center gap-3">
              <img
                src={favicon}
                alt={`${m.name} avatar`}
                className="h-12 w-12 flex-none rounded-full"
              />
              <div>
                <p className="font-semibold">{m.name}</p>
                <p className="font-mono flex items-center gap-2 text-[10px] uppercase tracking-widest text-slate-500">
                  {icons[m.icon]} {m.role}
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm text-slate-400">{m.desc}</p>
            <div className="mt-4 flex gap-2">
                <FaTwitter className="h-4 w-4 text-slate-400" />
                <FaGithub className="h-4 w-4 text-slate-400" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}