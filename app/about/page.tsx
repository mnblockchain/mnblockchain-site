import type { Metadata } from "next";
import { Badge, SectionLabel } from "../components/ui";
import { team } from "@/data/content";

export const metadata: Metadata = {
  title: "About — MNblockchain",
  description: "MNblockchain's mission, history, and the people behind it.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-navy-dark via-brand-navy to-brand-navy-dark py-20 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <Badge>A Minnesota nonprofit, volunteer-run</Badge>
          <h1 className="mt-6 font-heading text-4xl font-extrabold text-white sm:text-5xl">
            About MNblockchain
          </h1>
          <p className="mt-4 text-lg text-white/70">
            Building community and industry in blockchain &amp; web3 — driving education and policy
            across Minnesota.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-6">
          <SectionLabel>Our Mission</SectionLabel>
          <h2 className="font-heading text-3xl font-extrabold text-brand-navy">
            A Hub for Blockchain in Minnesota
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate">
            Minnesota is unlike any other state — a high per-capita number of Fortune 500
            companies, globally respected institutions in education, finance, and medicine, and a
            vibrant arts and culture community make it a prime location for nurturing the
            blockchain industry.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-slate">
            MNblockchain exists to build community and industry around blockchain and web3
            technologies in Minnesota — through free monthly events, flagship gatherings,
            education, and policy advocacy with state and federal lawmakers.
          </p>
        </div>
      </section>

      <section className="bg-cloud py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionLabel>Leadership</SectionLabel>
          <h2 className="font-heading text-3xl font-extrabold text-brand-navy">
            The People Behind MNblockchain
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((t) => (
              <div key={t.role} className="rounded-2xl border border-slate-200 bg-white p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-brand-gold-dark">
                  {t.role}
                </p>
                <p className="mt-2 font-heading text-lg font-bold text-brand-navy">{t.name}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate">{t.blurb}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-6">
          <SectionLabel>Our Committees</SectionLabel>
          <h2 className="font-heading text-3xl font-extrabold text-brand-navy">How We&rsquo;re Organized</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {[
              { name: "Events & Programming", blurb: "Monthly meetups, flagship events, and the speaker pipeline." },
              { name: "Membership", blurb: "The member experience, from benefits to renewals." },
              { name: "Sponsorships & Corporate Partnerships", blurb: "Sponsor relationships and revenue." },
              { name: "Government & Law", blurb: "Policy tracking and lawmaker relationships." },
            ].map((c) => (
              <div key={c.name} className="rounded-2xl border border-slate-200 bg-cloud p-6">
                <p className="font-heading font-bold text-brand-navy">{c.name}</p>
                <p className="mt-2 text-sm text-slate">{c.blurb}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
