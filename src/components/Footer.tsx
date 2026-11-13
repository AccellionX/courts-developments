import Link from "next/link";
import { ConceptNotice } from "@/components/ConceptNotice";
import { navItems, site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10 bg-[#070a0e] text-paper">
      <div className="accent-line opacity-60" />
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-3xl font-semibold tracking-[-0.03em]">
            {site.companyName}
          </p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-paper/65">
            An independent AccellionX redesign concept inspired by Court
            Developments — a residential developer based in {site.location}.
          </p>
          <p className="font-mono-label mt-5 text-[11px] tracking-[0.14em] text-paper/45">
            {site.location}
          </p>
        </div>

        <div>
          <p className="font-mono-label text-[10px] uppercase tracking-[0.22em] text-bronze-soft">
            Explore
          </p>
          <ul className="mt-4 space-y-2.5">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-paper/70 transition hover:text-paper"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono-label text-[10px] uppercase tracking-[0.22em] text-bronze-soft">
            Reference
          </p>
          <ul className="mt-4 space-y-2.5 text-sm text-paper/70">
            <li>
              <a
                href={site.officialWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-paper"
              >
                Official Court Developments website
              </a>
            </li>
            <li>
              <a
                href="https://www.accellionx.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-paper"
              >
                AccellionX
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-5 sm:flex-row sm:items-center sm:justify-between">
          <ConceptNotice compact />
          <p className="font-mono-label text-[10px] tracking-[0.12em] text-paper/40">
            © {new Date().getFullYear()} AccellionX concept demo · Photography
            illustrative
          </p>
        </div>
      </div>
    </footer>
  );
}
