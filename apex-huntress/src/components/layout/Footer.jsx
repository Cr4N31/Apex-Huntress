import { Link } from "react-router-dom";
import favicon from '../../assets/img/favicon.jpeg'
import { FaDiscord, FaXTwitter } from "react-icons/fa6";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Holders", href: "/holders" },
  { label: "Comic", href: "/comic" },
  { label: "Team", href: "/team" },
];

const CHANNEL_LINKS = [
  { label: "Discord", href: "https://discord.gg/qCdSNzh7KM" },
  { label: "X / Twitter", href: "https://x.com/Apex_Huntress_" },
  { label: "Marketplace", href: "#" },
  { label: "Cronos Army", href: "#" },
];

function FooterCol({ title, links }) {
  return (
    <div>
      <p className="mb-3 font-mono text-[11px] uppercase tracking-widest text-cyan-400/70">
        {title}
      </p>
      <ul className="space-y-2 text-sm text-slate-400">
        {links.map((l) => {
          const isExternal = l.href.startsWith("http");
          return (
            <li key={l.href}>
              {isExternal ? (
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-cyan-300"
                >
                  {l.label}
                </a>
              ) : (
                <Link to={l.href} className="transition-colors hover:text-cyan-300">
                  {l.label}
                </Link>
              )}
            </li>
          );
        })}
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
            <img src={favicon} alt="Favicon" className="h-8 w-8 rounded-full" />
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

          {/* social icons */}
          <div className="mt-4 flex gap-3">
            <a
              href="https://discord.gg/qCdSNzh7KM"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Join our Discord"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-400 transition hover:border-cyan-400/40 hover:text-cyan-300"
            >
              <FaDiscord className="h-4 w-4" />
            </a>
            <a
              href="https://x.com/Apex_Huntress_"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on X"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-400 transition hover:border-cyan-400/40 hover:text-cyan-300"
            >
              <FaXTwitter className="h-4 w-4" />
            </a>
          </div>
        </div>

        <FooterCol title="Navigate" links={NAV_LINKS} />
        <FooterCol title="Channels" links={CHANNEL_LINKS} />
      </div>
      <p className="mx-auto mt-12 max-w-6xl text-center font-mono text-[11px] text-slate-600">
        © 2026 Apex Huntress · All rights reserved
      </p>
    </footer>
  );
}