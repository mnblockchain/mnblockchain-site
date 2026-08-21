import type { Metadata } from "next";
import { Badge, SectionLabel, SponsorCard } from "../components/ui";
import { sponsors, sponsorTiers } from "@/data/content";
import SponsorForm from "./SponsorForm";

export const metadata: Metadata = {
  title: "Sponsors — MNblockchain",
  description: "Sponsorship tiers and partnership opportunities with MNblockchain.",
};

export default function SponsorsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-navy-dark via-brand-navy to-brand-navy-dark py-20 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <Badge>Reach an engaged, active community</Badge>
          <h1 className="mt-6 font-heading text-4xl font-extrabold text-white sm:text-5xl">
            Sponsor MNblockchain
          </h1>
          <p className="mt-4 text-lg text-white/70">
            Your support keeps our events free and our community growing — with real visibility
            in front of Minnesota&rsquo;s blockchain builders and investors.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionLabel>Sponsorship Tiers</SectionLabel>
          <h2 className="font-heading text-3xl font-extrabold text-brand-navy">
            Packages Built for Real Value
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {sponsorTiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-2xl border p-8 ${
                  tier.featured
                    ? "border-brand-gold bg-brand-navy text-white shadow-lg"
                    : "border-slate-200 bg-cloud"
                }`}
              >
                <p
                  className={`font-heading text-xl font-bold ${
                    tier.featured ? "text-white" : "text-brand-navy"
                  }`}
                >
                  {tier.name}
                </p>
                <p className={`mt-1 text-2xl font-extrabold ${tier.featured ? "text-brand-gold" : "text-brand-navy"}`}>
                  {tier.price}
                </p>
                <ul className="mt-6 space-y-3">
                  {tier.perks.map((perk) => (
                    <li
                      key={perk}
                      className={`flex gap-2 text-sm ${tier.featured ? "text-white/80" : "text-slate"}`}
                    >
                      <span className="text-brand-gold-dark">✦</span>
                      {perk}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cloud py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionLabel>Current Sponsors</SectionLabel>
          <h2 className="font-heading text-3xl font-extrabold text-brand-navy">
            Free Events, Powered by Great Partners
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {sponsors.map((s) => (
              <SponsorCard key={s.name} name={s.name} blurb={s.blurb} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-2xl px-6">
          <SectionLabel>Become a Sponsor</SectionLabel>
          <h2 className="font-heading text-3xl font-extrabold text-brand-navy">
            Let&rsquo;s Talk Partnership
          </h2>
          <p className="mt-4 text-slate">
            Tell us a bit about your company and which tier interests you — we&rsquo;ll follow up
            within a few days.
          </p>
          <div className="mt-8">
            <SponsorForm />
          </div>
        </div>
      </section>
    </>
  );
}
