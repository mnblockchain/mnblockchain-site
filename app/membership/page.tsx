import type { Metadata } from "next";
import Image from "next/image";
import { Badge, SectionLabel } from "../components/ui";
import { membershipTiers } from "@/data/content";
import ZeffySignup from "./ZeffySignup";

export const metadata: Metadata = {
  title: "Membership - MNblockchain",
  description: "MNblockchain membership tiers and benefits.",
};

// TODO(Colin): hidden per request (2026-09-26) - bring back once ready.
// Content/data is untouched, just not rendered.
const SHOW_ALTERNATE_PAYMENT_METHODS = false;

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
          <Badge>Free monthly meetups, priority access to everything else</Badge>
          <h1 className="mt-6 font-heading text-4xl font-extrabold text-white sm:text-5xl">
            Membership
          </h1>
          <p className="mt-4 text-xl font-medium text-white/90">
            Priority access, a real community, and a direct line into Minnesota&rsquo;s blockchain
            ecosystem.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-6">
          <SectionLabel>Membership</SectionLabel>
          <h2 className="font-heading text-3xl font-extrabold text-navy-black">
            Belong to Minnesota&rsquo;s Blockchain Community
          </h2>
          <p className="mt-4 max-w-2xl text-slate">
            As a volunteer-run nonprofit, membership dues go straight back into keeping our events
            free, bringing in great speakers, and growing this community - that support matters
            more than the price tag suggests. Every member is a real part of how far we can take
            this, not just a name on a list.
          </p>
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
              </div>
            ))}
          </div>

          <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-slate-200 bg-cloud p-6">
            <ZeffySignup />
          </div>

          {SHOW_ALTERNATE_PAYMENT_METHODS && (
            <div className="mx-auto mt-12 max-w-3xl border-t border-slate-200 pt-10">
              <p className="text-center text-xs font-bold uppercase tracking-widest text-navy-black">
                Prefer to Pay Another Way?
              </p>
              <div className="mt-6 grid gap-6 sm:grid-cols-3">
                {[
                  { label: "PayPal", src: "/membership/qr-paypal.png" },
                  { label: "Venmo", src: "/membership/qr-venmo.png" },
                  { label: "Coinbase", src: "/membership/qr-coinbase.png" },
                ].map((qr) => (
                  <div key={qr.label} className="rounded-2xl border border-slate-200 bg-cloud p-6 text-center">
                    <div className="relative mx-auto h-36 w-36">
                      <Image src={qr.src} alt={`${qr.label} QR code`} fill sizes="144px" className="object-contain" />
                    </div>
                    <p className="mt-4 font-heading font-bold text-navy-black">{qr.label}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-center text-xs text-slate">
                Paying via USDC on Coinbase? Send to{" "}
                <span className="font-mono">0x6c680fEa814196C07D0E9C72dAA6013842Ac23ec</span> and email{" "}
                connect@mnblockchain.org so we can activate your membership.
              </p>
            </div>
          )}

          <p className="mt-10 text-center text-sm text-slate">
            All of our monthly meetups remain free and open to everyone; membership adds priority
            access and deeper involvement.
          </p>
        </div>
      </section>
    </>
  );
}
