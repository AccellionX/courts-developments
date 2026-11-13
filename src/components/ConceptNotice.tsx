import { site } from "@/lib/content";

export function ConceptNotice({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <p className="font-mono-label text-[10px] tracking-[0.12em] text-paper/55">
        {site.conceptNotice} · Not an official website
      </p>
    );
  }

  return (
    <aside
      className="border-b border-white/10 bg-[#070a0e] text-paper"
      aria-label="Concept disclaimer"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-2.5 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <p className="text-[12px] leading-relaxed tracking-[0.02em] text-paper/85">
          <span className="font-mono-label text-[10px] uppercase tracking-[0.18em] text-bronze-soft">
            {site.conceptNotice}
          </span>
          <span className="mx-2 hidden text-paper/25 sm:inline">·</span>
          <span className="block sm:inline">
            Not an official Court Developments website. No endorsement or
            affiliation implied.
          </span>
        </p>
        <a
          href={site.officialWebsite}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono-label shrink-0 text-[10px] uppercase tracking-[0.16em] text-bronze-soft underline-offset-4 transition hover:text-paper hover:underline"
        >
          Visit official site
        </a>
      </div>
    </aside>
  );
}
