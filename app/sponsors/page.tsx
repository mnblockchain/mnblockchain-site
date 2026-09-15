import type { Metadata } from "next";
import Image from "next/image";
import { Badge, PrimaryButton, SectionLabel, SponsorCard, StatBlock } from "../components/ui";
import { sponsorComparison, sponsors, sponsorStats, sponsorTiers, testimonials } from "@/data/content";
import SponsorForm from "./SponsorForm";

const sponsorTestimonial = testimonials.find((t) => t.name === "Sponsor Contact");

export const metadata: Metadata = {
  title: "Sponsors — MNblockchain",
  description: "Sponsorship tiers and partnership opportunities with MNblockchain.",
};

export default function SponsorsPage() {
  return (
    <>
      <section className="relative overflow-hidden py-20 text-center">
        <Image
          src="/sponsors/header-photo-cropped.jpg"
          alt="MNblockchain community members celebrating at a flagship event"
          fill
          priority
          sizes="100vw"
          className="object-cover object-top"
        />
        {/* Solid scrim so headline text stays legible over the photo. */}
        <div className="absolute inset-0 bg-navy-black/70" />
        <div className="relative mx-auto max-w-3xl px-6">
          <Badge>Minnesota&rsquo;s largest &amp; longest-running blockchain community</Badge>
          <h1 className="mt-6 font-heading text-4xl font-extrabold text-white sm:text-5xl">
            Sponsor MNblockchain
          </h1>
          <p className="mt-4 text-xl font-medium text-white/90">
            Your support keeps our events free and our community growing — with real visibility
            in front of Minnesota&rsquo;s blockchain builders and investors.
          </p>
          <div className="mt-8">
            <PrimaryButton href="#sponsor-form">Become a Sponsor</PrimaryButton>
          </div>
        </div>
      </section>

      <section className="bg-navy-black py-14">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-blue">
            Minnesota&rsquo;s Leading Blockchain Organization, By the Numbers
          </p>
          <div className="mt-8 grid grid-cols-2 gap-8 sm:grid-cols-4">
            {sponsorStats.map((s) => (
              <StatBlock key={s.label} value={s.value} label={s.label} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionLabel>Thank You</SectionLabel>
          <h2 className="font-heading text-3xl font-extrabold text-navy-black">
            The Partners Who Make This Possible
          </h2>
          <p className="mt-3 max-w-2xl text-slate">
            Every free event, every speaker, every gathering — powered by the companies below.
            We&rsquo;re grateful for their support of Minnesota&rsquo;s blockchain community.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {sponsors.map((s) => (
              <SponsorCard key={s.name} name={s.name} blurb={s.blurb} logo={s.logo} url={s.url} />
            ))}
          </div>
        </div>
      </section>

      {sponsorTestimonial && (
        <section className="bg-cloud py-16">
          <div className="mx-auto max-w-2xl px-6 text-center">
            <p className="font-heading text-xl font-medium leading-relaxed text-navy-black sm:text-2xl">
              &ldquo;{sponsorTestimonial.quote}&rdquo;
            </p>
            <p className="mt-4 text-sm font-bold uppercase tracking-widest text-brand-blue">
              {sponsorTestimonial.name} · {sponsorTestimonial.detail}
            </p>
          </div>
        </section>
      )}

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionLabel>Sponsorship Tiers</SectionLabel>
          <h2 className="font-heading text-3xl font-extrabold text-navy-black">
            Packages Built for Real Value
          </h2>
          <p className="mt-3 max-w-2xl text-slate">
            Every tier includes real access to our community — not just a logo. Compare what each
            level unlocks below.
          </p>

          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[720px] border-separate border-spacing-0">
              <thead>
                <tr>
                  <th className="sticky left-0 z-10 w-1/3 min-w-[160px] bg-white" />
                  {sponsorTiers.map((tier) => (
                    <th
                      key={tier.name}
                      className={`rounded-t-2xl border p-6 text-left align-bottom ${
                        tier.featured
                          ? "border-brand-blue bg-navy-black"
                          : "border-slate-200 bg-cloud"
                      }`}
                    >
                      <p className={`font-heading text-lg font-bold ${tier.featured ? "text-white" : "text-navy-black"}`}>
                        {tier.name}
                      </p>
                      <p className={`mt-1 text-xl font-extrabold ${tier.featured ? "text-brand-blue" : "text-navy-black"}`}>
                        {tier.price}
                      </p>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {sponsorComparison.map((row, i) => (
                  <tr key={row.feature}>
                    <td
                      className={`sticky left-0 z-10 border-x border-slate-200 bg-white p-4 text-sm text-slate ${
                        i === sponsorComparison.length - 1 ? "rounded-bl-2xl border-b" : ""
                      }`}
                    >
                      {row.feature}
                    </td>
                    {row.values.map((value, j) => {
                      const tier = sponsorTiers[j];
                      const isLast = i === sponsorComparison.length - 1;
                      return (
                        <td
                          key={tier.name}
                          className={`border-x p-4 text-center text-sm ${
                            tier.featured
                              ? "border-brand-blue bg-navy-black/[0.03]"
                              : "border-slate-200 bg-white"
                          } ${isLast ? "border-b" : ""} ${isLast && j === row.values.length - 1 ? "rounded-br-2xl" : ""}`}
                        >
                          {value === true ? (
                            <span className="text-brand-blue">✓</span>
                          ) : value === false ? (
                            <span className="text-slate-300">—</span>
                          ) : (
                            <span className="text-navy-black">{value}</span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="sponsor-form" className="bg-cloud py-20">
        <div className="mx-auto max-w-2xl px-6">
          <SectionLabel>Become a Sponsor</SectionLabel>
          <h2 className="font-heading text-3xl font-extrabold text-navy-black">
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
