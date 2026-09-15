// Content pulled from the live mnblockchain.org (Events, Membership, News &
// Articles pages) on 2026-08-28, plus items still marked placeholder below.
// Keeping it in one file makes a content swap a data edit, not a design edit.

export const nextEvent = {
  // Real details confirmed from the event flyer (2026-09-12): speaker,
  // topic, venue (Frankie's), and timing.
  title: "Building Stablecoins Under the GENIUS Act",
  eventbriteUrl:
    "https://www.eventbrite.com/e/spotlight-meetup-sept-28-lets-talk-stablecoins-tickets-2000731804686?aff=oddtdtcreator",
  date: "2026-09-28T17:00:00-05:00",
  dateLabel: "Monday, September 28, 2026",
  time: "5:00 PM arrival · 6:00 PM presentations",
  location: "Frankie's, 3556 Winnetka Ave N, New Hope, MN 55427",
  description:
    "Zach Robins, Head of Legal at Brale, joins us to talk about building stablecoins under the new GENIUS Act — plus free pizza and open networking. Presented with Stand With Crypto.",
  learn: [
    "How stablecoins went from a niche crypto tool to a mainstream payment rail",
    "What the GENIUS Act means for stablecoin issuers, in plain terms",
    "How Brale approaches building compliant, programmable money",
    "Open Q&A and networking with the community",
  ],
  speakers: [
    {
      name: "Zach Robins",
      title: "Head of Legal, Brale",
      bio: "Passionate about crypto, programmable money, and building the future of finance.",
      photo: "/speakers/zach-robins.jpg",
      companyLogo: "/speakers/brale-logo.png",
    },
  ],
};

export const stats = [
  { value: "2018", label: "Founded" },
  { value: "12+", label: "Events / Year" },
];

export const pastEvents = [
  {
    date: "August 31, 2026",
    title: "How to Spot Red Flags in the Industry",
    blurb: "Crypto consultant Josiah Wilson (LIBREX Crypto Consulting) on spotting danger in the industry — beyond the obvious scams.",
    image: "/news/red-flags-aug2026.jpeg",
    type: "meetup" as const,
    slug: "spotlight-meetup-aug-31-red-flags",
  },
  {
    date: "May 13, 2026",
    title: "Impressive Turnout at Crypto Spring",
    blurb: "A packed room, topical discussion, and buzzing networking before and after the presentations.",
    image: "/news/crypto-spring-2026.jpg",
    type: "flagship" as const,
    slug: "impressive-turnout-at-crypto-spring",
  },
  {
    date: "April 5, 2026",
    title: "A Team of One",
    blurb: "Builder Ben Carlson (\"Mr. Fun Guy\") on using AI to do the work of many — presented at Frankie's.",
    image: "/news/team-of-one.jpg",
    type: "meetup" as const,
    slug: "a-team-of-one",
  },
];

// Real past speakers, pulled from News & Articles coverage of past events.
export const speakers = [
  { name: "Josiah Wilson", title: "Owner, LIBREX Crypto Consulting" },
  { name: "Ben Carlson", title: "Builder — AI & Automation (\"Mr. Fun Guy\")" },
  { name: "Jamie Thingelstad", title: "POAPs & the “612” Summer Scavenger Hunt" },
  { name: "Eric Thompson", title: "CFP® — Bitcoin ETF Presentation" },
];

// Stats used to open the sponsors page with real proof of audience/reach
// before asking anyone to pay — every number here also appears elsewhere on
// the site (homepage stats, hero copy), so this stays truthful by construction.
export const sponsorStats = [
  { value: "2018", label: "Founded" },
  { value: "12+", label: "Events / Year" },
  { value: "2-3", label: "Flagship Events / Year" },
];

export const sponsorTiers = [
  {
    name: "Community Sponsor",
    price: "$500 / year",
    perks: [
      "Logo on mnblockchain.org",
      "Recognition at monthly meetups",
      "2 complimentary memberships",
      "Job postings to our Slack + site",
    ],
  },
  {
    name: "Partner Sponsor",
    price: "$2,500 / year",
    perks: [
      "Everything in Community, plus:",
      "Logo on all event materials",
      "One speaking slot per year",
      "Newsletter mention (2x / year)",
      "Guaranteed demo/table at every meetup",
      "Recurring naming rights (e.g. a sponsored happy hour)",
      "Post-event opt-in attendee intro list",
    ],
    featured: true,
  },
  {
    name: "Flagship Sponsor",
    price: "$10,000 / year",
    perks: [
      "Everything in Partner, plus:",
      "Title sponsorship of one flagship event",
      "Dedicated speaking slot at flagship event",
      "First-look access for hosting/venue opportunities",
      "Private roundtable with the board",
      "Policy committee briefings on MN blockchain legislation",
    ],
  },
];

// Feature-by-feature breakdown of sponsorTiers above, for a side-by-side
// comparison table. Keep in sync with the perks lists above by hand — small
// enough list that a shared source-of-truth isn't worth the indirection yet.
// Values: true = included, false = not included, string = tier-specific detail.
export const sponsorComparison: {
  feature: string;
  values: [boolean | string, boolean | string, boolean | string];
}[] = [
  { feature: "Logo on mnblockchain.org", values: [true, true, true] },
  { feature: "Recognition at monthly meetups", values: [true, true, true] },
  { feature: "Complimentary memberships", values: ["2", "4", "8"] },
  { feature: "Job postings to Slack + site", values: [true, true, true] },
  { feature: "Logo on all event materials", values: [false, true, true] },
  { feature: "Speaking slot per year", values: [false, "1", "Dedicated flagship slot"] },
  { feature: "Newsletter mention", values: [false, "2x / year", "Every issue"] },
  { feature: "Guaranteed demo/table at meetups", values: [false, true, true] },
  { feature: "Recurring naming rights (e.g. sponsored happy hour)", values: [false, true, true] },
  { feature: "Post-event opt-in attendee intro list", values: [false, true, true] },
  { feature: "Title sponsorship of a flagship event", values: [false, false, true] },
  { feature: "First-look access to hosting/venue opportunities", values: [false, false, true] },
  { feature: "Private roundtable with the board", values: [false, false, true] },
  { feature: "Policy committee legislative briefings", values: [false, false, true] },
];

// Real sponsor/partner logos pulled from the live site into /public/sponsors/.
// The old site doesn't clearly distinguish paid sponsors from policy/community
// partners (e.g. Stand With Crypto reads more like a partner), and none of
// them have a confirmed dollar tier yet — flagged so Brandon/Colin can assign
// real tiers once known, at which point the wall can size logos by tier.
export const sponsors = [
  { name: "Stand With Crypto", blurb: "Policy partner.", logo: "/sponsors/stand-with-crypto.png", url: "https://www.standwithcrypto.org/" },
  { name: "Spencer Fane", blurb: "Law firm partner.", logo: "/sponsors/spencer-fane.png", url: "https://www.spencerfane.com/" },
  { name: "Fredrikson", blurb: "Law firm partner.", logo: "/sponsors/fredrikson.png", url: "https://www.fredlaw.com/" },
  { name: "Quantum Lex", blurb: "Partner.", logo: "/sponsors/quantum-lex.jpg", url: "https://www.quantumlex.io/" },
];

// Real membership program, from mnblockchain.org/membership/ — a single paid
// tier, not the multi-tier structure this page used to have. Skips the
// NFT/crypto-payment mechanics (PayPal/Venmo/Coinbase QR codes) — described
// here as plain pricing/benefits; wire up real payment flow separately if
// wanted.
export const membershipTiers = [
  {
    name: "Annual Membership",
    price: "$99 / year",
    perks: [
      "Exclusive MNblockchain Membership NFT",
      "Special member pricing on all paid events",
      "Members-only events",
      "15 free courses via partner The Blockchain Academy",
    ],
    featured: true,
  },
];

// Real board & staff roster (mirrors mnblockchain.org/our-team/ as of 2026-08-21).
// Photos pulled from the live site into /public/team/. LinkedIn links pulled
// from mnblockchain.org/our-team/ on 2026-09-11.
export const boardOfficers = [
  { name: "Brandon Ferdig", role: "President", linkedin: "https://www.linkedin.com/in/brandonferdig", photo: "/team/brandon-ferdig.png" },
  { name: "Colin Hirdman", role: "Vice President", linkedin: "https://www.linkedin.com/in/colinhirdman/", photo: "/team/colin-hirdman.jpg" },
];

export const boardMembers = [
  { name: "Alex Schoephoerster", role: "Board Member", linkedin: "https://www.linkedin.com/in/alex-schoephoerster/", photo: "/team/alex-schoephoerster.png" },
  { name: "Rafael Mojden", role: "Board Member", linkedin: "https://www.linkedin.com/in/rafael-mojden-4a28211/", photo: "/team/rafael-mojden.jpg" },
  { name: "Matt Rogers", role: "Board Member", linkedin: "https://www.linkedin.com/in/matthew-abraham-rogers/", photo: "/team/matt-rogers.png" },
  { name: "Ben-Collins Asongwe", role: "Board Member", linkedin: "https://www.linkedin.com/in/ben-collins-asongwe-1962358b/", photo: "/team/ben-collins-asongwe.jpg" },
  { name: "Andy Adams", role: "Board Member", linkedin: "https://www.linkedin.com/in/andrewdcadams/", photo: "/team/andy-adams.png" },
];

export const staffAdvisors = [
  { name: "Caulden Baumann", role: "Operations", linkedin: "https://www.linkedin.com/in/caulden-baumann-3b7bb8217/", photo: "/team/caulden-baumann.png" },
  { name: "Mickey Mikeworth", role: "Advisor", linkedin: "https://www.linkedin.com/in/mickeymikeworth/", photo: "/team/mickey-mikeworth.jpg" },
  { name: "Graham Christopherson", role: "Accounting", linkedin: "https://www.linkedin.com/in/graham-christopherson-37041b107/", photo: "/team/graham-christopherson.png" },
];

// Committee structure — leads not yet assigned to individuals (as of 2026-08-21).
export const committees = [
  {
    name: "Events & Programming",
    blurb: "Owns the event calendar and speaker pipeline — monthly meetups, flagship events, and the remote spotlight series.",
  },
  {
    name: "Membership",
    blurb: "Owns the member experience — benefits, renewals, and growing a community worth belonging to.",
  },
  {
    name: "Sponsorships & Corporate Partnerships",
    blurb: "Owns sponsor relationships and revenue — packaging, prospecting, and delivering real value to partners.",
  },
  {
    name: "Government & Law",
    blurb: "Tracks state and federal policy affecting blockchain in Minnesota and maintains relationships with lawmakers.",
  },
];

// From mnblockchain.org/get-involved-with-minnesota-blockchain/ — the three
// standing volunteer roles the org has actually asked for.
export const volunteerRoles = [
  {
    name: "Event Planning & Operations",
    blurb: "Help run monthly meetups and flagship events — logistics, day-of operations, and venue coordination.",
  },
  {
    name: "Community Management & Memberships",
    blurb: "Help members feel like members — onboarding, renewals, Slack engagement, and member communication.",
  },
  {
    name: "Podcast & Video Editing",
    blurb: "Help produce the podcast and event video/photo content — editing, publishing, and promotion.",
  },
];

// Real invite link, pulled from a migrated news article (2026-09-04).
// Slack invite links can expire — verify this still works before relying
// on it for a launch push.
export const slackInviteUrl =
  "https://join.slack.com/t/mnblockchain/shared_invite/zt-1ms7z9uc0-FESZ7iuHr4OaHYStwDD77Q";

export const testimonials = [
  {
    quote:
      "I've made most of my real connections in this space through MNblockchain — consistent, welcoming, and never salesy.",
    name: "Member Name One",
    detail: "Member since 2022",
  },
  {
    quote:
      "As a sponsor, the visibility and access to genuinely engaged builders has been worth it every year.",
    name: "Sponsor Contact",
    detail: "Annual Sponsor",
  },
  {
    quote:
      "I came to my first meetup knowing no one and left with three new contacts and a clearer picture of where this industry is headed in Minnesota.",
    name: "Member Name Two",
    detail: "Member since 2025",
  },
];

export const policyFocus = [
  {
    title: "State legislation",
    blurb:
      "Tracking Minnesota bills that affect blockchain and digital asset businesses so members aren't caught off guard.",
  },
  {
    title: "Federal legislation",
    blurb:
      "Following federal market-structure and stablecoin legislation (e.g. the CLARITY and GENIUS Acts) and what it means for Minnesota.",
  },
  {
    title: "Lawmaker relationships",
    blurb:
      "Building relationships with Minnesota's congressional delegation and state legislators — evenhandedly, across both parties.",
  },
];
