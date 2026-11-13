import Image from "next/image";
import Link from "next/link";
import { DevelopmentCard } from "@/components/DevelopmentCard";
import { IllustrativeBadge } from "@/components/IllustrativeBadge";
import { SectionHeading } from "@/components/SectionHeading";
import {
  coreValues,
  developments,
  hero,
  services,
  site,
} from "@/lib/content";

export default function HomePage() {
  const featured = developments.slice(0, 3);

  return (
    <>
      <section className="relative min-h-[90vh] overflow-hidden bg-ink text-paper">
        <div className="absolute inset-0 hero-scan">
          <Image
            src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=2400&q=80"
            alt="Illustrative architectural photograph of a refined residential exterior"
            fill
            priority
            sizes="100vw"
            className="hero-media object-cover opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/50" />
          <div
            className="absolute inset-0 opacity-25"
            style={{
              backgroundImage:
                "linear-gradient(rgba(212,184,138,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(212,184,138,0.12) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />
        </div>

        <div className="relative mx-auto flex min-h-[90vh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28 md:justify-center md:pb-24 md:pt-24">
          <div className="reveal mb-6 flex flex-wrap items-center gap-3">
            <IllustrativeBadge className="bg-paper/10" />
            <span className="font-mono-label text-[10px] uppercase tracking-[0.22em] text-paper/55">
              AccellionX concept · East Sussex
            </span>
          </div>
          <p className="reveal reveal-delay-1 font-mono-label flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-bronze-soft">
            <span className="pulse-dot" aria-hidden />
            {site.companyName}
          </p>
          <h1 className="reveal reveal-delay-1 font-display mt-4 max-w-3xl text-5xl font-semibold leading-[0.98] tracking-[-0.05em] sm:text-6xl md:text-7xl lg:text-[5rem]">
            {hero.headline}
          </h1>
          <p className="reveal reveal-delay-2 mt-6 max-w-xl text-base leading-relaxed text-paper/75 md:text-lg">
            {hero.subheading}
          </p>
          <div className="reveal reveal-delay-3 mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href={hero.primaryCta.href}
              className="btn-primary inline-flex items-center justify-center bg-paper px-6 py-3.5 text-[12px] uppercase tracking-[0.14em] text-ink transition hover:bg-bronze-soft"
            >
              {hero.primaryCta.label}
            </Link>
            <Link
              href={hero.secondaryCta.href}
              className="inline-flex items-center justify-center border border-paper/25 bg-white/5 px-6 py-3.5 text-[12px] uppercase tracking-[0.14em] text-paper backdrop-blur-sm transition hover:border-bronze-soft/60 hover:bg-white/10"
            >
              {hero.secondaryCta.label}
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <SectionHeading
            eyebrow="Approach"
            title="Contemporary architecture. Precision craft."
            description="A futuristic redesign concept exploring how Court Developments’ ethos — thoughtful design, skilled tradesmanship and meticulous detail — can feel forward-looking while remaining grounded in place."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="glass-panel futuristic-frame p-6">
              <p className="font-mono-label text-[10px] uppercase tracking-[0.18em] text-signal">
                Locale
              </p>
              <p className="font-display mt-3 text-3xl font-semibold tracking-[-0.03em] text-ink">
                East Sussex
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Based in Robertsbridge, with work shaped by the character of
                local places and surroundings.
              </p>
            </div>
            <div className="glass-panel futuristic-frame p-6">
              <p className="font-mono-label text-[10px] uppercase tracking-[0.18em] text-signal">
                Standard
              </p>
              <p className="font-display mt-3 text-3xl font-semibold tracking-[-0.03em] text-ink">
                Careful Build
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                From new homes to conservation-sensitive projects, quality is
                pursued at every stage.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-paper/50">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
          <SectionHeading
            eyebrow="Core Values"
            title="Principles that shape every home."
          />
          <div className="mt-12 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-5">
            {coreValues.map((value, index) => (
              <article
                key={value.title}
                className="bg-background/90 px-5 py-7 transition hover:bg-paper"
              >
                <p className="font-mono-label text-[10px] tracking-[0.18em] text-bronze">
                  0{index + 1}
                </p>
                <h3 className="font-display mt-3 text-xl font-semibold tracking-[-0.03em] text-ink">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:py-24">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Our Developments"
            title="Illustrative project concepts."
            description="Placeholder schemes created for this redesign demo. They do not represent live Court Developments listings."
          />
          <Link
            href="/developments"
            className="font-mono-label text-[11px] uppercase tracking-[0.16em] text-bronze-dark underline-offset-4 hover:underline"
          >
            View all developments →
          </Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {featured.map((development) => (
            <DevelopmentCard key={development.id} development={development} />
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-border bg-ink text-paper">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/4 top-0 h-64 w-64 rounded-full bg-bronze/15 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-signal/15 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-6xl px-5 py-20 md:py-24">
          <SectionHeading
            eyebrow="Expertise & Services"
            title="Capability across the development journey."
            inverted
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {services.map((service, index) => (
              <Link
                key={service.slug}
                href="/expertise"
                className="group border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition hover:border-bronze-soft/40 hover:bg-white/[0.06]"
              >
                <p className="font-mono-label text-[11px] tracking-[0.2em] text-bronze-soft">
                  0{index + 1}
                </p>
                <h3 className="font-display mt-3 text-3xl font-semibold tracking-[-0.03em]">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-paper/70">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:py-24">
        <div className="grid gap-0 overflow-hidden border border-border bg-paper lg:grid-cols-2">
          <div className="relative min-h-[300px]">
            <Image
              src="https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&w=1600&q=80"
              alt="Illustrative interior architecture photograph"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-ink/10" />
            <IllustrativeBadge className="absolute left-4 top-4" />
          </div>
          <div className="flex flex-col justify-center px-6 py-10 md:px-10">
            <p className="font-mono-label text-[11px] uppercase tracking-[0.24em] text-bronze">
              About Us
            </p>
            <h2 className="font-display mt-3 text-4xl font-semibold tracking-[-0.04em] text-ink">
              Homes created with care, context and craft.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Court Developments combines contemporary and traditional
              architecture with highly skilled tradespeople and meticulous
              attention to detail — creating distinctive homes across East
              Sussex and beyond.
            </p>
            <Link
              href="/about"
              className="btn-primary mt-8 inline-flex w-fit items-center justify-center bg-ink px-5 py-3 text-[12px] uppercase tracking-[0.14em] text-paper transition hover:bg-bronze-dark"
            >
              Read our story
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
