import type { Metadata } from "next";
import Image from "next/image";
import { Badge, InvolvementCard, PrimaryButton, SectionLabel } from "../components/ui";
import { committees, volunteerRoles, slackInviteUrl } from "@/data/content";

export const metadata: Metadata = {
  title: "Get Involved — MNblockchain",
  description:
    "Join a committee, volunteer for a role, speak at an event, or partner with MNblockchain — real ways to plug in, not just a signup form.",
};

export default function GetInvolvedPage() {
  return (
    <>
      <section className="relative overflow-hidden py-20 text-center">
        <Image
          src="/get-involved/header-collage.jpg"
          alt="MNblockchain members at various events"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Solid scrim so headline text stays legible over the photo collage. */}
        <div className="absolute inset-0 bg-navy-black/70" />
        <div className="relative mx-auto max-w-3xl px-6">
          <Badge>No membership required to get involved</Badge>
          <h1 className="mt-6 font-heading text-4xl font-extrabold text-white sm:text-5xl">
            Get Involved
          </h1>
          <p className="mt-4 text-xl font-medium text-white/90">
            MNblockchain runs on committee members, volunteers, and people willing to show up.
            Here&rsquo;s how to plug in.
          </p>
        </div>
      </section>

      {/* Committees */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionLabel>Committees</SectionLabel>
          <h2 className="font-heading text-3xl font-extrabold text-navy-black sm:text-4xl">
            Find Your Committee
          </h2>
          <p className="mt-3 max-w-2xl text-slate">
            Each committee owns a real part of the organization — not just advice from the
            sidelines.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {committees.map((c) => (
              <InvolvementCard
                key={c.name}
                title={c.name}
                blurb={c.blurb}
                ctaLabel="Get in Touch"
                ctaHref="/contact"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer roles */}
      <section className="bg-cloud py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionLabel>Volunteer</SectionLabel>
          <h2 className="font-heading text-3xl font-extrabold text-navy-black sm:text-4xl">
            Pitch In on Something Specific
          </h2>
          <p className="mt-3 max-w-2xl text-slate">
            Not ready for a committee? These are standing, concrete roles the org actually needs
            filled.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {volunteerRoles.map((r) => (
              <InvolvementCard
                key={r.name}
                title={r.name}
                blurb={r.blurb}
                ctaLabel="I'm Interested"
                ctaHref="/contact"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Speak */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <SectionLabel>Speak</SectionLabel>
          <h2 className="font-heading text-3xl font-extrabold text-navy-black">
            Have Something Worth Sharing?
          </h2>
          <p className="mt-4 text-slate">
            We&rsquo;re always looking for operators, builders, and policy voices for our monthly
            meetups, remote spotlight series, and flagship events.
          </p>
          <div className="mt-8">
            <PrimaryButton href="/contact">Pitch Yourself as a Speaker</PrimaryButton>
          </div>
        </div>
      </section>

      {/* Partner / Sponsor */}
      <section className="bg-cloud py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <SectionLabel>Partner</SectionLabel>
          <h2 className="font-heading text-3xl font-extrabold text-navy-black">
            Sponsor or Partner With Us
          </h2>
          <p className="mt-4 text-slate">
            Free events, expert speakers, and real networking are only possible with sponsor and
            partner support.
          </p>
          <div className="mt-8">
            <PrimaryButton href="/sponsors">Become a Sponsor</PrimaryButton>
          </div>
        </div>
      </section>

      {/* Stay connected */}
      <section className="bg-navy-black py-16">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="font-heading text-2xl font-extrabold text-white sm:text-3xl">
            Join the Community on Slack
          </h2>
          <p className="mt-3 text-sm text-white/70">
            Where members, volunteers, and committee leads actually talk between events.
          </p>
          <div className="mt-6 flex justify-center">
            <a
              href={slackInviteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-bitcoin-orange px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-navy-black transition-colors hover:bg-bitcoin-orange/80"
            >
              Join Our Slack →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
