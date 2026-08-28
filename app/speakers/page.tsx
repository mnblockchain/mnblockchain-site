import type { Metadata } from "next";
import { Badge, PrimaryButton, SectionLabel, SpeakerCard } from "../components/ui";
import { speakers } from "@/data/content";

export const metadata: Metadata = {
  title: "Speakers — MNblockchain",
  description: "Meet the speakers who've shaped MNblockchain events — local builders, national voices, and everything in between.",
};

export default function SpeakersPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-black-soft via-brand-black to-brand-black-soft py-20 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <Badge>Local builders. National voices.</Badge>
          <h1 className="mt-6 font-heading text-4xl font-extrabold text-white sm:text-5xl">
            Speakers
          </h1>
          <p className="mt-4 text-lg text-white/70">
            Every speaker is an active operator, investor, or policymaker — no theory, no fluff.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
            {speakers.map((s, i) => (
              <SpeakerCard key={i} name={s.name} title={s.title} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cloud py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <SectionLabel>Want to Speak?</SectionLabel>
          <h2 className="font-heading text-3xl font-extrabold text-brand-black">
            Have Something Worth Sharing?
          </h2>
          <p className="mt-4 text-slate">
            We're always looking for operators, builders, and policy voices for our monthly
            meetups, remote spotlight series, and flagship events.
          </p>
          <div className="mt-8">
            <PrimaryButton href="/contact">Pitch Yourself as a Speaker</PrimaryButton>
          </div>
        </div>
      </section>
    </>
  );
}
