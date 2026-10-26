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
    title: "Decisions so far (Colin and Brandon, Oct 23)",
    points: [
      "Keep \"Member\" as the term, with two levels: free community (email, Slack, hangouts) and $99 a year.",
      "$99 stays. Colin wouldn't go lower. A level above it is possible later.",
      "Member name wall (aliases allowed) is a fun idea but parked for later.",
      "Approach: keep doing what we're doing, but do it better, the way Minnestar does. More shout-outs, a member name tag sticker, welcome emails, and a shirt.",
      "Board members: all added as members, with honorary members noted separately.",
      "Open disagreement to settle: Andy leans toward free membership to grow the count toward the 1,200 email list; Brandon wants a clear line so membership means something.",
    ],
  },
  {
    title: "Monday 4:00 PM check-in (Colin and Brandon, about 30 min)",
    points: [
      "Review this page and make edits before Tuesday.",
      "Agree on the 2027 membership proposal to bring to Andy and Ben-Collins, who are unlikely to bring ideas themselves.",
      "Decide the holiday party location: last year's dance studio was far west and drew under 30. Options are Colin's office at University and 280 (free, chairs, kitchen, big room) or the Just for Kix space through Alex.",
      "Start on ideas for the Stand With Crypto proposal and for guests.",
      "Mailchimp vs. Resend, and whether to clean the email list now or wait until Mailchimp's price goes up.",
    ],
  },
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
      "Board members: decided to add all as members. Still worth asking every board member to give something, since funders often ask about 100% board giving.",
      "Report paid and comped members separately.",
    ],
  },
  {
    title: "Housekeeping on the platform",
    points: [
      "Zeffy already sends a thank-you, an expiration notice, and an auto-renew notice. Rewrite them in MNblockchain's voice (friendly, not prompting cancellations). Not urgent, since it won't apply until next fall.",
      "Define \"priority access,\" which is on the site today but not explained.",
      "Email list: about 1,200 contacts, and we want it under 1,000. A cleaning pass and a \"Still want to hear from us?\" email would get us there. Needs a Mailchimp export.",
    ],
  },
  {
    title: "Out-of-left-field idea (to explore later)",
    points: [
      "Points and rewards (Colin, shared with Brandon Oct 26): do something creative and fun for the community, members, and sponsors, where people earn points or a reward for actions we want, like retailer rewards emails. Example: attend an event, bring a friend, claim your NFT, or volunteer.",
      "Partner with a sponsor on the promos, so a sponsor funds or features the reward and gets visibility with members.",
      "Start simple and manual. If prizes depend on paying for something, check Minnesota raffle rules first.",
    ],
  },
  {
    title: "Monthly payment option (Zeffy)",
    points: [
      "A $10 a month membership is set up in Zeffy next to the $99 yearly one. Zeffy can't split the $99 into installments, so monthly is its own product that renews every month until the member cancels.",
      "$10 a month is $120 a year, about $21 more than $99. Is that the right premium, or would $9 a month work better?",
      "Risk: someone could join for one month, get the NFT, shirt, and member pricing, then cancel. Option: give the shirt and NFT only after a set number of paid months, or keep them for yearly members.",
      "Decide whether it shows on the public Membership page now or waits until the committee agrees.",
    ],
  },
  {
    title: "Questions to settle",
    points: [
      "Does free mean newsletter only, or newsletter plus Slack?",
      "Who chairs the hangouts, and how often do they happen?",
      "Who owns welcome emails and renewal reminders?",
      "Shirt: free for new members and discounted each renewal year? Brandon and Colin liked that idea.",
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
