import type { Metadata } from "next";
import Image from "next/image";
import { Badge, PrimaryButton, SectionLabel } from "../components/ui";
import { membershipTiers } from "@/data/content";

export const metadata: Metadata = {
  title: "Membership — MNblockchain",
  description: "MNblockchain membership tiers and benefits.",
};

export default function MembershipPage() {
  return (
    <>
      <section className="relative overflow-hidden py-20 text-center">
        <Image
          src="/membership/header-collage.jpg"
          alt="MNblockchain members at various meetups"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Solid scrim so headline text stays legible over the photo collage. */}
        <div className="absolute inset-0 bg-navy-black/70" />
        <div className="relative mx-auto max-w-3xl px-6">
          <Badge>Events are free — membership makes it easier to stay plugged in</Badge>
          <h1 className="mt-6 font-heading text-4xl font-extrabold text-white sm:text-5xl">
            Membership
          </h1>
          <p className="mt-4 text-lg text-white/70">
            Priority access, a real community, and a direct line into Minnesota&rsquo;s blockchain
            ecosystem.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-6">
          <SectionLabel>Membership</SectionLabel>
          <h2 className="font-heading text-3xl font-extrabold text-navy-black">
            One Membership, Real Benefits
          </h2>
          <div className="mx-auto mt-8 grid max-w-md gap-6">
            {membershipTiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-2xl border p-8 ${
                  tier.featured
                    ? "border-brand-blue bg-navy-black text-white shadow-lg"
                    : "border-slate-200 bg-cloud"
                }`}
              >
                <p className={`font-heading text-xl font-bold ${tier.featured ? "text-white" : "text-navy-black"}`}>
                  {tier.name}
                </p>
                <p className={`mt-1 text-2xl font-extrabold ${tier.featured ? "text-brand-blue" : "text-navy-black"}`}>
                  {tier.price}
                </p>
                <ul className="mt-6 space-y-3">
                  {tier.perks.map((perk) => (
                    <li key={perk} className={`flex gap-2 text-sm ${tier.featured ? "text-white/80" : "text-slate"}`}>
                      <span className="text-navy-black">✦</span>
                      {perk}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <PrimaryButton href="/contact">Become a Member</PrimaryButton>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-slate">
            All of our monthly meetups remain free and open to everyone — membership adds priority
            access and deeper involvement, it&rsquo;s never required to attend.
          </p>
        </div>
      </section>
    </>
  );
}
