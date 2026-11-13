import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { newsArticles } from "@/lib/content";

export const metadata: Metadata = {
  title: "News & Insights",
  description:
    "Illustrative editorial concepts exploring design, craftsmanship and conservation-minded development.",
};

export default function NewsPage() {
  return (
    <>
      <PageHero
        eyebrow="News & Insights"
        title="Perspectives on design and delivery."
        description="Illustrative articles prepared for this redesign concept. They are not published Court Developments news items."
      />

      <section className="mx-auto max-w-6xl px-5 py-14 md:py-16">
        <div className="mb-10 border border-bronze/25 bg-stone/40 px-4 py-3 font-mono-label text-[11px] tracking-[0.08em] text-muted">
          All articles below are illustrative placeholders for layout and tone.
          No real company announcements, dates or claims are implied.
        </div>

        <div className="divide-y divide-border border-y border-border">
          {newsArticles.map((article) => (
            <article key={article.slug} className="group py-8 md:py-10">
              <div className="font-mono-label flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-bronze">
                <span>{article.category}</span>
                <span className="text-border">·</span>
                <span>{article.date}</span>
                <span className="border border-border bg-paper px-2 py-1 text-[10px] tracking-[0.14em] text-muted">
                  Illustrative
                </span>
              </div>
              <h2 className="font-display mt-3 text-3xl font-semibold tracking-[-0.03em] text-ink transition group-hover:text-bronze-dark md:text-4xl">
                {article.title}
              </h2>
              <p className="mt-3 max-w-3xl text-base leading-relaxed text-muted">
                {article.excerpt}
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
