import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Demo contact page for the Court Developments redesign concept. Form submissions are not delivered.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="We would be glad to hear from you."
        description="Use the demonstration form to explore the interaction design. Submissions are not delivered. For genuine enquiries, please visit the official Court Developments website."
      />

      <section className="mx-auto max-w-6xl px-5 py-14 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <aside className="space-y-6">
            <div className="glass-panel futuristic-frame p-6">
              <p className="font-mono-label text-[10px] uppercase tracking-[0.22em] text-bronze">
                Location
              </p>
              <p className="font-display mt-3 text-3xl font-semibold tracking-[-0.03em] text-ink">
                Robertsbridge
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                East Sussex, United Kingdom
              </p>
            </div>

            <div className="glass-panel futuristic-frame p-6">
              <p className="font-mono-label text-[10px] uppercase tracking-[0.22em] text-bronze">
                Official channels
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                This redesign concept does not publish invented telephone
                numbers, email addresses or office details. Please refer to the
                official Court Developments website for current contact
                information.
              </p>
              <a
                href={site.officialWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono-label mt-5 inline-flex text-[11px] uppercase tracking-[0.14em] text-bronze-dark underline underline-offset-4"
              >
                Visit courtdevelopments.com
              </a>
            </div>

            <div className="border border-signal/30 bg-signal/10 p-6">
              <p className="text-sm leading-relaxed text-muted">
                <strong className="font-medium text-ink">Demo notice:</strong>{" "}
                form submissions on this page are validated in the browser only
                and are never sent to Court Developments or AccellionX.
              </p>
            </div>
          </aside>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
