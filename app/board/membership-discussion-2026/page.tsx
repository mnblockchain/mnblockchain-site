import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Membership Discussion 2026 - MNblockchain",
  description: "Internal talking points for the membership committee.",
  robots: { index: false, follow: false },
};

// Talking points for the membership committee (Oct 2026). Plain data so
// they are easy to edit as decisions get made.
const sections = [
  {
    title: "Where we are",
    points: [
      "29 members, down from 31. Most of the drop is normal attrition, and two joined at the last meetup.",
      "The core problem is a lack of community feel. Members get perks but don't feel part of something.",
      "The plan is due at the Dec 8 board meeting, with a launch around January 2027.",
    ],
  },
  {
    title: "Levels and pricing",
    points: [
      "Proposed: Community (free) and Member ($99 a year). A higher level, like a $250 \"Patron,\" is parked for now.",
      "Keep \"Member\" as the term. It's already used everywhere (NFT, pricing, Slack).",
      "On the page, the paid Member card is the main choice. The free community option is a quiet link under it, because a prominent free card could pull people away from paying.",
      "Watch the Zeffy signups for the first couple of months. If they drop, hide the free line.",
      "A staging mockup is ready to show (Vercel login needed, so bring screenshots).",
    ],
  },
  {
    title: "Making membership meaningful",
    points: [
      "Onboarding: a 3-email welcome series and a personal welcome from a board member.",
      "Hangouts: four a year to start, hosted by rotating members, with no speaker or agenda. Rafael suggested alternating them with speaker meetups.",
      "Involvement: small jobs for members, like greeting at the door or finding a venue.",
      "Listening: a 3-question survey to members and to anyone who left.",
      "Perks: early registration for events that sell out, a pre-event Q&A with the speaker, and partner discounts such as the 50% off Culture Convergence.",
      "Name wall with aliases is built and hidden. Park it for a later discussion.",
    ],
  },
  {
    title: "Swag",
    points: [
      "One good shirt for paid members, ideally using the year's NFT artwork, picked up at meetups.",
      "Stickers for the free community and hangouts.",
      "Rough budget: about $450-725 for 29 members, but get a real quote first.",
    ],
  },
  {
    title: "Holiday party",
    points: [
      "Keep it open to everyone, with a member sign-up table and QR code, shirt pickup, and help claiming the NFT.",
      "Add a members' toast and a separate set of members' door prizes.",
      "Offer a bonus for joining that night, like a guest pass, not a lower price.",
      "Check Minnesota raffle rules first. Don't tie a prize drawing to paying for membership.",
    ],
  },
  {
    title: "Referrals and the board",
    points: [
      "\"Bring a friend\": both people get a small thank-you, with no cash and no discount on the $99, and a cap on rewards.",
      "Referral thank-you ideas: a public shout-out in the newsletter or Slack plus a sticker pack for a first referral; a guest pass or a second shirt for three or more.",
      "Other low-cost thank-yous: an enamel pin, a \"Community Builder\" Slack tag, a coffee or drink at the next meetup, early event registration, or a personal note from a board member.",
      "Avoid prize-drawing entries as the thank-you, since tying a drawing to paying for membership can trigger Minnesota raffle rules.",
      "Track referrals with a \"Who referred you?\" question on the Zeffy form, if Zeffy supports one.",
      "Board members: free membership, plus an ask that every board member gives something. Funders often ask about 100% board giving.",
      "Report paid and comped members separately.",
    ],
  },
  {
    title: "Housekeeping on the platform",
    points: [
      "Zeffy auto-renew: confirm it's set to yearly, and check when reminder emails go out.",
      "Define \"priority access,\" which is on the site today but not explained.",
      "Email list: about 1,200 contacts, and we want it under 1,000. A cleaning pass and a \"Still want to hear from us?\" email would get us there. Needs a Mailchimp export.",
    ],
  },
  {
    title: "Questions to settle",
    points: [
      "Does free mean newsletter only, or newsletter plus Slack?",
      "Who chairs the hangouts, and how often do they happen?",
      "Who owns welcome emails and renewal reminders?",
      "Is the shirt for all members, or only new ones?",
      "Do we publish member names, or wait?",
    ],
  },
  {
    title: "Other items (for the board, not this meeting)",
    points: [
      "Funding beyond Stand With Crypto: Ethereum Foundation, Solana and Superteam, Shavlik, and exchange sponsors.",
      "Crypto donations: PayPal's Pay with Crypto converts to dollars, and nonprofit eligibility is unconfirmed.",
      "Committee chair responsibilities draft is at /committee-chairs.",
      "The 2027 Stand With Crypto proposal is due by December.",
    ],
  },
];

export default function MembershipDiscussionPage() {
  return (
    <>
      <section className="bg-navy-black py-16 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="font-heading text-4xl font-extrabold text-white">Membership Discussion 2026</h1>
          <p className="mt-4 text-white/70">
            Talking points for the membership committee. Internal reference only - not indexed and
            not linked from the public site.
          </p>
          <Link href="/board" className="mt-4 inline-block text-sm text-white/60 underline underline-offset-4 hover:text-white">
            ← Back to Board Hub
          </Link>
        </div>
      </section>

      <section className="bg-cloud py-16">
        <div className="mx-auto max-w-3xl space-y-6 px-6">
          {sections.map((s) => (
            <div key={s.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="font-heading text-xl font-bold text-navy-black">{s.title}</h2>
              <ul className="mt-4 space-y-2">
                {s.points.map((p) => (
                  <li key={p} className="flex gap-3 text-sm text-slate">
                    <span className="mt-0.5 text-brand-blue">✦</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
