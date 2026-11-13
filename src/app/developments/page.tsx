import type { Metadata } from "next";
import { DevelopmentsFilter } from "@/components/DevelopmentsFilter";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Our Developments",
  description:
    "Browse illustrative residential development concepts created for the Court Developments website redesign demo.",
};

export default function DevelopmentsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Developments"
        title="Homes shaped by place and craft."
        description="Filter illustrative project concepts by type. These placeholders are for design demonstration only and do not represent official Court Developments schemes, availability or statistics."
      />

      <section className="mx-auto max-w-6xl px-5 py-14 md:py-16">
        <div className="mb-10 border border-bronze/25 bg-stone/40 px-4 py-3 font-mono-label text-[11px] tracking-[0.08em] text-muted">
          All developments, photography and project details on this page are
          illustrative placeholders prepared for this AccellionX redesign
          concept.
        </div>
        <DevelopmentsFilter />
      </section>
    </>
  );
}
