import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Committee Chairs - MNblockchain",
  description: "Internal reference: what each MNblockchain committee chair is responsible for.",
  robots: { index: false, follow: false },
};

// Draft responsibilities for each committee chair. Committee names match
// `committees` in data/content.ts (the public Get Involved page).
const chairResponsibilities = [
  {
    committee: "Events & Programming",
    summary: "Makes sure there is a great event on the calendar every month and a speaker pipeline behind it.",
    duties: [
      "Keep the 12-month event calendar: monthly meetups, remote spotlights, and 2-3 flagship events.",
      "Recruit, confirm, and prep speakers, and keep a running list of future guests.",
      "Lock venues, dates, and run-of-show well ahead of each event.",
      "Coordinate with partners on co-hosted events, including ticketing and member discount codes.",
      "Make sure each event gets a recap article and photos on the site and in the newsletter.",
      "Report upcoming events, attendance, and needs to the board.",
    ],
  },
  {
    committee: "Membership",
    summary: "Owns what members get, how they join, and how they stay.",
    duties: [
      "Define and maintain the member benefits, pricing, and renewal approach.",
      "Welcome new members and make sure they get their NFT, discount codes, and Slack access.",
      "Track member count, renewals, and feedback, and report them to the board.",
      "Propose member-only events, perks, and recognition.",
      "Keep the Membership page, Zeffy form, and member emails accurate.",
      "Work with Events and Sponsors so member perks line up with what partners offer.",
    ],
  },
  {
    committee: "Sponsorships & Corporate Partnerships",
    summary: "Owns sponsor relationships and the revenue that keeps events free.",
    duties: [
      "Maintain the sponsor tiers, pricing, and benefits package.",
      "Build and work a prospect list of Minnesota companies, exchanges, and professional firms.",
      "Respond to sponsor inquiries from the website and follow up promptly.",
      "Deliver what sponsors were promised: logo placement, event mentions, and introductions.",
      "Manage the Stand With Crypto relationship, including the proactive yearly plan.",
      "Research grants and other funding, and report pipeline and revenue to the board.",
    ],
  },
  {
    committee: "Government & Law",
    summary: "Keeps the organization informed and credible on blockchain policy, without taking sides in elections.",
    duties: [
      "Track state and federal legislation and regulation affecting blockchain in Minnesota.",
      "Maintain relationships with lawmakers, regulators, and policy groups.",
      "Brief the board and members on what is changing and why it matters.",
      "Recommend policy-focused events, speakers, and educational content.",
      "Keep MNblockchain nonpartisan: review requests for political activity before the organization says yes.",
      "Coordinate with legal and compliance advisors on the nonprofit's own obligations.",
    ],
  },
];

const everyChair = [
  "Hold a regular committee meeting and keep short notes.",
  "Recruit and support committee members and volunteers.",
  "Give the board a brief update at each board meeting.",
  "Bring decisions, budget requests, and conflicts to the board early.",
  "Hand off files, contacts, and logins cleanly when the chair changes.",
];

export default function CommitteeChairsPage() {
  return (
    <>
      <section className="bg-navy-black py-16 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="font-heading text-4xl font-extrabold text-white">Committee Chairs</h1>
          <p className="mt-4 text-white/70">
            Internal reference only - not indexed, not linked from nav. Draft responsibilities for
            each committee chair, for the board to review and adjust.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="font-heading text-2xl font-extrabold text-navy-black">Every chair</h2>
          <ul className="mt-4 space-y-2">
            {everyChair.map((d) => (
              <li key={d} className="flex gap-3 text-sm text-slate">
                <span className="mt-0.5 text-brand-blue">✦</span>
                {d}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-cloud py-16">
        <div className="mx-auto grid max-w-5xl gap-6 px-6 sm:grid-cols-2">
          {chairResponsibilities.map((c) => (
            <div key={c.committee} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-widest text-brand-blue">Chair</p>
              <h2 className="mt-1 font-heading text-xl font-bold text-navy-black">{c.committee}</h2>
              <p className="mt-2 text-sm text-slate">{c.summary}</p>
              <ul className="mt-4 space-y-2">
                {c.duties.map((d) => (
                  <li key={d} className="flex gap-3 text-sm text-slate">
                    <span className="mt-0.5 text-brand-blue">✦</span>
                    {d}
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
