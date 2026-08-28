import type { Metadata } from "next";
import { Badge, PrimaryButton, SectionLabel } from "../components/ui";
import { policyFocus } from "@/data/content";

export const metadata: Metadata = {
  title: "Policy — MNblockchain",
  description: "MNblockchain's Government & Law committee — policy tracking and lawmaker relationships.",
};

export default function PolicyPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-black-soft via-brand-black to-brand-black-soft py-20 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <Badge accent="orange">Government &amp; Law Committee</Badge>
          <h1 className="mt-6 font-heading text-4xl font-extrabold text-white sm:text-5xl">
            Policy &amp; Advocacy
          </h1>
          <p className="mt-4 text-lg text-white/70">
            Keeping Minnesota&rsquo;s blockchain community informed and represented — nonpartisan,
            fact-based, and engaged early.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6">
          <SectionLabel accent="orange">What We Track</SectionLabel>
          <h2 className="font-heading text-3xl font-extrabold text-brand-black">Our Focus Areas</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {policyFocus.map((p) => (
              <div key={p.title} className="rounded-2xl border border-slate-200 bg-cloud p-6">
                <p className="font-heading font-bold text-brand-black">{p.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate">{p.blurb}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cloud py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <SectionLabel accent="orange">Our Approach</SectionLabel>
          <h2 className="font-heading text-3xl font-extrabold text-brand-black">
            Nonpartisan by Design
          </h2>
          <p className="mt-4 text-slate">
            We engage lawmakers and candidates evenhandedly, regardless of party, because
            blockchain policy is a knowledge issue — not a partisan one. Our goal is an informed
            Minnesota delegation, not a specific outcome for any one campaign.
          </p>
          <div className="mt-8">
            <PrimaryButton href="/contact">Get Involved in Advocacy</PrimaryButton>
          </div>
        </div>
      </section>
    </>
  );
}
