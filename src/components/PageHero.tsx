type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-ink text-paper">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-bronze/25 blur-3xl" />
        <div className="absolute -right-10 bottom-0 h-72 w-72 rounded-full bg-signal/20 blur-3xl" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>
      <div className="relative mx-auto max-w-6xl px-5 py-16 md:py-20">
        {eyebrow ? (
          <p className="reveal font-mono-label flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-bronze-soft">
            <span className="pulse-dot" aria-hidden />
            {eyebrow}
          </p>
        ) : null}
        <h1 className="reveal reveal-delay-1 font-display mt-4 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-paper sm:text-5xl md:text-6xl">
          {title}
        </h1>
        {description ? (
          <p className="reveal reveal-delay-2 mt-5 max-w-2xl text-base leading-relaxed text-paper/70 md:text-lg">
            {description}
          </p>
        ) : null}
        <div className="reveal reveal-delay-3 accent-line mt-10 max-w-md" />
      </div>
    </section>
  );
}
