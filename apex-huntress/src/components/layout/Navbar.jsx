import { useState } from "react";
import { Link } from "react-router-dom";
import favicon from '../../assets/img/favicon.jpeg'
import { RocketIcon, Menu, X } from "lucide-react";

const LINKS = [
  { label: "Home", href: "/", index: "01" },
  { label: "Holders", href: "/holders", index: "02" },
  { label: "Comic", href: "/comic", index: "03" },
  { label: "Team", href: "/team", index: "04" },
];

export default function Navbar({ active = "Home" }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#060B14]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <img src={favicon} alt="Favicon" className="h-8 w-8 rounded-full" />
          <span className="text-sm font-bold tracking-wide">
            APEX <span className="text-cyan-400">HUNTRESS</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden gap-6 font-mono text-[11px] uppercase tracking-widest text-slate-400 md:flex">
          {LINKS.map((l) => (
            <Link
              key={l.label}
              to={l.href}
              className={`transition-colors hover:text-cyan-300 ${
                l.label === active ? "text-cyan-300" : ""
              }`}
            >
              <span className="mr-1 text-slate-600">{l.index}</span>
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-2 text-xs font-bold uppercase tracking-wide text-[#060B14] shadow-[0_0_20px_rgba(34,211,238,0.4)] transition hover:brightness-110 sm:flex">
            <RocketIcon className="w-4" /> Enter
          </button>

          {/* Hamburger toggle — mobile only */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-200 md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown panel */}
      <div
        className={`overflow-hidden border-t border-white/5 transition-all duration-300 ease-in-out md:hidden ${
          open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-6 py-4 font-mono text-xs uppercase tracking-widest text-slate-400">
          {LINKS.map((l) => (
            <Link
              key={l.label}
              to={l.href}
              onClick={() => setOpen(false)}
              className={`rounded-lg px-3 py-3 transition-colors hover:bg-white/5 hover:text-cyan-300 ${
                l.label === active ? "text-cyan-300" : ""
              }`}
            >
              <span className="mr-2 text-slate-600">{l.index}</span>
              {l.label}
            </Link>
          ))}
          <button className="mt-2 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-2.5 text-xs font-bold uppercase tracking-wide text-[#060B14]">
            <RocketIcon className="w-4" /> Enter
          </button>
        </nav>
      </div>
    </header>
  );
}