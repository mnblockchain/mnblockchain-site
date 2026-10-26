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
    title: "Where Colin and Brandon landed (Oct 23 and Oct 26)",
    points: [
      "Direction: keep doing what we're doing, and do it better. Brandon moved away from building a \"club\" because it matches the Minnestar model (people support the organization because of what it does), it matches who we have in leadership today, and we can still add club-like touches if it feels right.",
      "Build value first. If the events, speakers, and partnerships are strong, people will want to join and give.",
      "Keep \"Member\" as the term, with two levels: free community (email, Slack, hangouts) and $99 a year. Colin's framing: the free community is open to anyone, and members choose to support the organization and get extra access.",
      "$99 stays. A level above it is possible later. Member name wall (aliases allowed) is parked for later.",
      "Thank and acknowledge members: shout-outs, a member name tag or sticker, welcome emails, and a shirt. Today nobody can tell who has paid at an event.",
      "Board members: all added as members, with honorary members noted separately.",
      "Holiday party: hold it at Colin's office (University and 280). Still need a date.",
    ],
  },
  {
    title: "Andy's question: 1,200 emails vs. 30 members",
    points: [
      "Andy's point: we have a large community and a small membership. Do we lower the bar for what a member is, sell more memberships, or both?",
      "Our numbers: about 1,200 live emails, about 300 in Slack (some may be bots), 15-30 at a typical monthly event (low 20s on average), and about 30 paying members.",
      "Minnestar may be a useful comparison. Brandon's guess is roughly 150-200 members against 500 at a big event, but that's unverified. We counted about 266 supporters listed on their page.",
      "Options raised: a lower-priced tier (Brandon floated $40-$60 a year), specific member-drive campaigns, and promoting membership in the newsletter around each event, which is how Minnestar sells it.",
      "A lower tier means more work: new perks, a name, and a clear difference from the $99 level.",
      "Proof of value this year: member discounts on three events (Crypto Spring, the Bitcoin Mining Tour, and Culture Convergence). Use \"here's what members got in 2026\" at the holiday party.",
    ],
  },
  {
    title: "Tuesday committee meeting (Oct 27, 3:45 PM)",
    points: [
      "Present where Colin and Brandon landed: keep doing what we do, do it better, and acknowledge members.",
      "Hear Andy's concern about the gap between the email list and membership, and decide whether to try a lower tier or a member drive.",
      "Decide whether to test the $10 a month option for 2027 and announce it at the holiday party.",
      "Agree the 2027 membership proposal to bring to the Dec 8 board meeting.",
      "Set the holiday party date and who handles what.",
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
      "Other ideas raised Oct 26: custom name tags members bring to every meetup, a member sticker next to the name tag (Minnestar does this), a wearable NFT member button instead of a shirt, and asking Stand With Crypto about co-branded shirts (quantities may be too small for them).",
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
      "Zeffy can't split the $99 into installments or quarterly payments. A $10 a month membership is set up next to the $99 yearly one as its own product, which renews every month until the member cancels. It isn't published yet.",
      "$10 a month is $120 a year, about $21 more than $99. Brandon likes that: it meets people where they are, and even a member who drops off midyear still pays something.",
      "Brandon's idea of a 6-month membership at $50: Zeffy doesn't offer a 6-month duration. Workarounds are a custom yearly expiration twice a year, or monthly with cancelling after six months.",
      "Risk: someone could join for one month to get a discount, then cancel. Brandon doesn't expect many to do that at our size. Option: give the shirt and NFT only after a set number of paid months, or keep them for yearly members.",
      "Brandon would try it for 2027 as an experiment and announce it at the holiday party. Bounce it off Andy and Ben-Collins first.",
    ],
  },
  {
    title: "Questions to settle",
    points: [
      "Lower the bar, sell more, or both? Is a lower tier worth the extra work?",
      "Test the $10 a month option for 2027? When does it go live?",
      "Who chairs the hangouts, and how often do they happen?",
      "Who owns welcome emails and renewal reminders?",
      "Shirt: free for new members and discounted each renewal year? Brandon and Colin liked that idea. Or name tags and member stickers first?",
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
