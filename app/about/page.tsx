import type { Metadata } from "next";
import Image from "next/image";
import { Badge, SectionLabel, TeamCard } from "../components/ui";
import { boardMembers, boardOfficers, committees, staffAdvisors } from "@/data/content";

export const metadata: Metadata = {
  title: "About — MNblockchain",
  description: "MNblockchain's mission, board of directors, and committee structure.",
};

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden py-24 text-center">
        <Image
          src="/about/community-photo.jpg"
          alt="MNblockchain community members at an event"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Solid scrim so headline text stays legible over a busy indoor
            photo — no separate card behind the text on this page, unlike
            the homepage hero. */}
        <div className="absolute inset-0 bg-navy-black/70" />
        <div className="relative mx-auto max-w-3xl px-6">
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
          <h2 className="font-heading text-3xl font-extrabold text-navy-black">
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
          <SectionLabel>Meet Our Team</SectionLabel>
          <h2 className="font-heading text-3xl font-extrabold text-navy-black">
            MNblockchain Board of Directors
          </h2>
          <div className="mt-8 grid gap-6 grid-cols-2 sm:grid-cols-3">
            {[...boardOfficers, ...boardMembers].map((p) => (
              <TeamCard key={p.name} name={p.name} role={p.role} linkedin={p.linkedin} photo={p.photo} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionLabel>Staff &amp; Advisors</SectionLabel>
          <h2 className="font-heading text-3xl font-extrabold text-navy-black">
            Keeping the Engine Running
          </h2>
          <div className="mt-8 grid gap-6 grid-cols-2 sm:grid-cols-3">
            {staffAdvisors.map((p) => (
              <TeamCard key={p.name} name={p.name} role={p.role} linkedin={p.linkedin} photo={p.photo} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cloud py-20">
        <div className="mx-auto max-w-4xl px-6">
          <SectionLabel>Our Committees</SectionLabel>
          <h2 className="font-heading text-3xl font-extrabold text-navy-black">How We&rsquo;re Organized</h2>
          <p className="mt-4 text-slate">
            Beyond the board, our work runs through four committees. Committee leads are being
            assigned — check back soon for who&rsquo;s driving each one.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {committees.map((c) => (
              <div key={c.name} className="rounded-2xl border border-slate-200 bg-white p-6">
                <p className="font-heading font-bold text-navy-black">{c.name}</p>
                <p className="mt-2 text-sm text-slate">{c.blurb}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
