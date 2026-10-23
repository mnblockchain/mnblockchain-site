import type { Metadata } from "next";
import Image from "next/image";
import { Badge, SectionLabel } from "../components/ui";
import NewsletterForm from "../components/NewsletterForm";
import ZeffySignup from "./ZeffySignup";

export const metadata: Metadata = {
  title: "Membership - MNblockchain",
  description: "MNblockchain membership tiers and benefits.",
};

// TODO(Colin): hidden per request (2026-09-26) - bring back once ready.
// Content/data is untouched, just not rendered.
const SHOW_ALTERNATE_PAYMENT_METHODS = false;

// One new NFT per membership year. Add the next one here when it's ready -
// same images used on the (unlinked) /membership/nft claim page.
const nftCollection = [
  { year: "2024", name: "From the Lakes to the Moon", image: "/membership/nft/2024-lakes-to-the-moon.jpg" },
  { year: "2025", name: "Let's Go", image: "/membership/nft/2025-lets-go.jpg" },
  { year: "2026", name: "EMBARK", image: "/membership/nft/2026-embark.jpg" },
];

// MOCKUP (committee review, Oct 2026): sample levels and sample names only.
// Real names/aliases come from members at sign-up. Not final.
const levels = [
  {
    name: "Community",
    price: "Free",
    tagline: "Stay in the loop and show up.",
    perks: [
      "Monthly newsletter and event invites",
      "Join the MNblockchain Slack",
      "Informal member hangouts (no speaker, no agenda)",
    ],
  },
  {
    name: "Member",
    price: "$99 / year",
    tagline: "Belong to the community.",
    perks: [
      "Everything in Community",
      "Exclusive MNblockchain Membership NFT",
      "Special member pricing on all paid events",
      "Members-only events",
      "15 free courses via partner The Blockchain Academy",
      "Your name (or alias) on the supporter wall",
    ],
    featured: true,
  },
  {
    name: "Supporter",
    price: "$250 / year",
    tagline: "Help us do more.",
    perks: [
      "Everything in Member",
      "Early registration for events",
      "MNblockchain shirt",
      "Featured placement on the supporter wall",
    ],
  },
];

// alias: true means the person chose to be listed under a handle, not a real name.
const wall = [
  {
    level: "Supporters",
    names: [
      { name: "Jordan Example" },
      { name: "Block Wizard", alias: true },
      { name: "Sample Supporter" },
    ],
  },
  {
    level: "Members",
    names: [
      { name: "Alex Sample" },
      { name: "Satoshi's Neighbor", alias: true },
      { name: "Morgan Placeholder" },
      { name: "Anonymous Member", alias: true },
      { name: "Taylor Example" },
      { name: "HODL Hockey Fan", alias: true },
      { name: "Casey Sample" },
      { name: "Riley Placeholder" },
    ],
  },
];

export default function MembershipPage() {
  return (
    <>
      <div className="bg-bitcoin-orange px-6 py-2 text-center text-xs font-bold uppercase tracking-widest text-navy-black">
        Draft mockup for committee review - levels, prices, and names are samples
      </div>
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
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {levels.map((tier) => (
              <div
                key={tier.name}
                className={`flex flex-col rounded-2xl border p-8 ${
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
                <p className={`mt-2 text-sm ${tier.featured ? "text-white/70" : "text-slate"}`}>{tier.tagline}</p>
                <ul className="mt-6 space-y-3">
                  {tier.perks.map((perk) => (
                    <li key={perk} className={`flex gap-2 text-sm ${tier.featured ? "text-white/80" : "text-slate"}`}>
                      <span className={tier.featured ? "text-brand-blue" : "text-navy-black"}>✦</span>
                      {perk}
                    </li>
                  ))}
                </ul>
                {tier.name === "Community" && (
                  <div className="mt-6 rounded-xl bg-navy-black p-4">
                    <NewsletterForm />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16">
            <p className="text-center text-xs font-bold uppercase tracking-widest text-brand-blue">
              Thank You
            </p>
            <h3 className="mt-2 text-center font-heading text-2xl font-extrabold text-navy-black">
              Our Members &amp; Supporters
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-center text-sm text-slate">
              These are the people who make MNblockchain possible. Prefer not to use your real name?
              List yourself under an alias or stay anonymous - just tell us when you join.
            </p>
            <div className="mt-8 space-y-8">
              {wall.map((group) => (
                <div key={group.level} className="rounded-2xl border border-slate-200 bg-cloud p-6">
                  <p className="font-heading text-sm font-bold uppercase tracking-widest text-navy-black">
                    {group.level}
                  </p>
                  <ul className="mt-4 grid gap-x-6 gap-y-2 text-sm text-slate sm:grid-cols-2 md:grid-cols-3">
                    {group.names.map((n) => (
                      <li key={n.name} className={n.alias ? "italic" : ""}>
                        {n.name}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mx-auto mt-14 max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-brand-blue">
              A New Collectible Every Year
            </p>
            <h3 className="mt-2 font-heading text-2xl font-extrabold text-navy-black">
              The Member NFT Collection
            </h3>
            <div className="mt-6 grid grid-cols-3 gap-4 sm:gap-6">
              {nftCollection.map((nft) => (
                <div key={nft.year}>
                  <div className="relative aspect-square overflow-hidden rounded-xl border border-slate-200 shadow-sm">
                    <Image src={nft.image} alt={`${nft.year} MNblockchain Membership NFT: ${nft.name}`} fill sizes="(min-width: 640px) 200px, 33vw" className="object-cover" />
                  </div>
                  <p className="mt-2 text-xs font-bold uppercase tracking-widest text-slate">{nft.year}</p>
                </div>
              ))}
            </div>
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
