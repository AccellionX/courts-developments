import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { IllustrativeBadge } from "@/components/IllustrativeBadge";
import { PageHero } from "@/components/PageHero";
import { aboutContent, coreValues, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Court Developments’ approach to thoughtful residential design, craftsmanship and carefully considered development.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Creating homes with lasting character."
        description="A considered approach to residential development, rooted in craftsmanship, design sensitivity and respect for place."
      />

      <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <p className="font-display text-3xl font-semibold leading-snug tracking-[-0.03em] text-ink md:text-4xl">
              {aboutContent.intro}
            </p>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-muted">
              {aboutContent.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <aside className="glass-panel futuristic-frame p-6 md:p-8">
            <p className="font-mono-label text-[10px] uppercase tracking-[0.22em] text-bronze">
              Based in
            </p>
            <p className="font-display mt-3 text-3xl font-semibold tracking-[-0.03em] text-ink">
              {site.location}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              The team operates from Robertsbridge, East Sussex, and from active
              development sites — collaborating with highways, transportation,
              ecological, archaeological and conservation authorities where
              projects require it.
            </p>
            <div className="mt-8 border-t border-border pt-6">
              <p className="text-sm text-muted">
                For the official company website, visit{" "}
                <a
                  href={site.officialWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-bronze-dark underline underline-offset-2"
                >
                  courtdevelopments.com
                </a>
                .
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-y border-border bg-paper/50">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div className="relative aspect-[4/3] overflow-hidden bg-stone">
              <Image
                src="https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&w=1600&q=80"
                alt="Illustrative photograph of architectural craftsmanship detail"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <IllustrativeBadge className="absolute left-4 top-4" />
            </div>
            <div>
              <p className="font-mono-label text-[11px] uppercase tracking-[0.24em] text-bronze">
                Ethos
              </p>
              <h2 className="font-display mt-3 text-4xl font-semibold tracking-[-0.04em] text-ink">
                Design that complements its surroundings.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Court Developments is known for attention to detail and for
                producing homes that sit comfortably within their context —
                complementing and enhancing the area while achieving excellent
                construction standards.
              </p>
              <Link
                href="/expertise"
                className="btn-primary mt-8 inline-flex bg-ink px-5 py-3 text-[12px] uppercase tracking-[0.14em] text-paper transition hover:bg-bronze-dark"
              >
                Explore expertise
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <p className="font-mono-label text-[11px] uppercase tracking-[0.24em] text-bronze">
          Core Values
        </p>
        <h2 className="font-display mt-3 text-4xl font-semibold tracking-[-0.04em] text-ink">
          What guides the work.
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {coreValues.map((value, index) => (
            <article
              key={value.title}
              className="glass-panel futuristic-frame p-6"
            >
              <p className="font-mono-label text-[10px] tracking-[0.18em] text-signal">
                0{index + 1}
              </p>
              <h3 className="font-display mt-2 text-2xl font-semibold tracking-[-0.03em] text-ink">
                {value.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {value.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
