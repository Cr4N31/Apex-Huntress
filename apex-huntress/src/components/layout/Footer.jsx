import { Link } from "react-router-dom";
import favicon from '../../assets/img/favicon.jpeg'
function FooterCol({ title, links }) {
  return (
    <div>
      <p className="mb-3 font-mono text-[11px] uppercase tracking-widest text-cyan-400/70">
        {title}
      </p>
      <ul className="space-y-2 text-sm text-slate-400">
        {links.map((l) => (
          <li key={l.href}>
            <Link to={l.href} className="transition-colors hover:text-cyan-300">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-14">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:justify-between">
        <div className="max-w-xs">
          <div className="mb-3 flex items-center gap-2">
            <img src={favicon} alt="Favicon" className="h-8 w-8" />
            <div>
              <p className="text-sm font-bold">APEX HUNTRESS</p>
              <p className="font-mono text-[10px] uppercase tracking-widest text-slate-500">
                369 Cyber Lionesses · Cronos
              </p>
            </div>
          </div>
          <p className="text-sm text-slate-400">
            One Pride. One Queen. One Future. An expanding gaming universe forged in the far
            reaches of the Cronos galaxy.
          </p>
        </div>

        <FooterCol title="Navigate" links={["Home", "Holders", "Comic", "Team"]} />
        <FooterCol title="Channels" links={["Discord", "X / Twitter", "Marketplace", "Cronos Army"]} />
      </div>
      <p className="mx-auto mt-12 max-w-6xl text-center font-mono text-[11px] text-slate-600">
        © 2026 Apex Huntress · All rights reserved
      </p>
    </footer>
  );
}