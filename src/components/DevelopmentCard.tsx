import Image from "next/image";
import { IllustrativeBadge } from "@/components/IllustrativeBadge";
import type { Development } from "@/lib/content";

export function DevelopmentCard({ development }: { development: Development }) {
  return (
    <article className="futuristic-frame group flex h-full flex-col overflow-hidden border border-border bg-paper/90 transition duration-500 hover:border-bronze/50 hover:shadow-[0_20px_50px_rgba(11,15,20,0.08)]">
      <div className="relative aspect-[4/3] overflow-hidden bg-stone">
        <Image
          src={development.image}
          alt={development.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition duration-700 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-ink/10" />
        <IllustrativeBadge className="absolute left-3 top-3" />
        <span className="font-mono-label absolute bottom-3 left-3 border border-white/15 bg-ink/70 px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-paper backdrop-blur-md">
          {development.status}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="font-mono-label text-[10px] uppercase tracking-[0.18em] text-bronze">
          {development.type} · {development.location}
        </p>
        <h3 className="font-display mt-2 text-2xl font-semibold tracking-[-0.03em] text-ink">
          {development.name}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
          {development.summary}
        </p>
        <p className="font-mono-label mt-4 text-[10px] tracking-[0.12em] text-muted/80">
          Placeholder project · redesign concept only
        </p>
      </div>
    </article>
  );
}
