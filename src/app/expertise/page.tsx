import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Expertise & Services",
  description:
    "Residential developments, refurbishment and conversions, listed buildings and conservation, and land acquisition.",
};

const expertiseNotes = [
  {
    title: "Technical collaboration",
    body: "Experience working closely with highways, transportation, ecological, archaeological and conservation authorities on projects that demand careful coordination.",
  },
  {
    title: "Sensitive settings",
    body: "Capability across conservation areas, listed buildings and schemes delivered in proximity to residents and businesses.",
  },
  {
    title: "Enduring standards",
    body: "A focus on practicality, comfort, durability and innovation — with meticulous attention to detail throughout design and construction.",
  },
];

export default function ExpertisePage() {
  return (
    <>
      <PageHero
        eyebrow="Expertise & Services"
        title="Capability with care and precision."
        description="From new residential developments to technically challenging conservation work, Court Developments brings design sensitivity and construction expertise together."
      />

      <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <div className="grid gap-5">
          {services.map((service, index) => (
            <article
              key={service.slug}
              id={service.slug}
              className="futuristic-frame grid gap-4 border border-border bg-paper/90 p-6 transition hover:border-bronze/40 md:grid-cols-[120px_1fr] md:gap-8 md:p-8"
            >
              <p className="font-mono-label text-4xl tracking-[-0.04em] text-bronze/80">
                0{index + 1}
              </p>
              <div>
                <h2 className="font-display text-3xl font-semibold tracking-[-0.03em] text-ink md:text-4xl">
                  {service.title}
                </h2>
                <p className="mt-3 max-w-3xl text-base leading-relaxed text-muted">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-paper/50">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <p className="font-mono-label text-[11px] uppercase tracking-[0.24em] text-bronze">
            Working Method
          </p>
          <h2 className="font-display mt-3 max-w-2xl text-4xl font-semibold tracking-[-0.04em] text-ink">
            Thoughtful delivery in complex contexts.
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {expertiseNotes.map((note) => (
              <article
                key={note.title}
                className="glass-panel futuristic-frame p-6"
              >
                <h3 className="font-display text-2xl font-semibold tracking-[-0.03em] text-ink">
                  {note.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {note.body}
                </p>
              </article>
            ))}
          </div>
          <Link
            href="/contact"
            className="btn-primary mt-10 inline-flex bg-ink px-5 py-3 text-[12px] uppercase tracking-[0.14em] text-paper transition hover:bg-bronze-dark"
          >
            Start a conversation
          </Link>
        </div>
      </section>
    </>
  );
}
