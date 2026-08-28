// Content pulled from the live mnblockchain.org (Events, Membership, News &
// Articles pages) on 2026-08-28, plus items still marked placeholder below.
// Keeping it in one file makes a content swap a data edit, not a design edit.

export const nextEvent = {
  title: "Spotlight Meetup — How to Spot Red Flags in the Industry",
  date: "2026-08-31T17:00:00-05:00",
  dateLabel: "Monday, August 31, 2026",
  time: "5:00 – 8:00 PM",
  location: "3556 Winnetka Ave N, New Hope, MN 55427",
  description:
    "Crypto consultant Josiah Wilson (LIBREX Crypto Consulting) leads a discussion on how to spot danger in the industry — beyond the obvious scams, what red flags should actually put you on guard.",
  learn: [
    "How to spot scams and red flags before they cost you",
    "What separates a legitimate project from a dangerous one",
    "Practical due-diligence habits for evaluating anything in the space",
    "Open Q&A and networking with the community",
  ],
  speakers: [{ name: "Josiah Wilson", title: "Owner, LIBREX Crypto Consulting" }],
};

export const stats = [
  { value: "4+", label: "Years Running" },
  { value: "12", label: "Events / Year" },
  { value: "3", label: "Flagship Events" },
  { value: "100%", label: "Volunteer-Run" },
];

export const pastEvents = [
  {
    date: "June 22, 2026",
    title: "A Team of One",
    blurb: "Builder Ben Carlson (\"Mr. Fun Guy\") on using AI to do the work of many — presented at Frankie's.",
  },
  {
    date: "June 22, 2026",
    title: "Impressive Turnout at Crypto Spring",
    blurb: "A packed room, topical discussion, and buzzing networking before and after the presentations.",
  },
  {
    date: "July 11, 2025",
    title: "“Bookmarks for Your Life”",
    blurb: "Jamie Thingelstad on the power of POAPs and the “612” Summer Scavenger Hunt — a full house at Frankie's.",
  },
  {
    date: "May 23, 2025",
    title: "MNblockchain Went to D.C.",
    blurb: "Stand With Crypto flew Brook Oldre and Brandon Ferdig to D.C. for Stand With Crypto Day, alongside 60 blockchain professionals from around the country.",
  },
];

// Real past speakers, pulled from News & Articles coverage of past events.
export const speakers = [
  { name: "Josiah Wilson", title: "Owner, LIBREX Crypto Consulting" },
  { name: "Ben Carlson", title: "Builder — AI & Automation (\"Mr. Fun Guy\")" },
  { name: "Jamie Thingelstad", title: "POAPs & the “612” Summer Scavenger Hunt" },
  { name: "Eric Thompson", title: "CFP® — Bitcoin ETF Presentation" },
];

export const sponsorTiers = [
  {
    name: "Community Sponsor",
    price: "$500 / year",
    perks: [
      "Logo on mnblockchain.org",
      "Recognition at monthly meetups",
      "2 complimentary memberships",
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
    ],
  },
];

// Real sponsor/partner logos pulled from the live site into /public/sponsors/.
// The old site doesn't clearly distinguish paid sponsors from policy/community
// partners (e.g. Stand With Crypto reads more like a partner) — flagged so
// Brandon/Colin can correct the framing once real tiers are assigned.
export const sponsors = [
  { name: "Spencer Fane", blurb: "Law firm partner.", logo: "/sponsors/spencer-fane.png" },
  { name: "Fredrikson", blurb: "Law firm partner.", logo: "/sponsors/fredrikson.png" },
  { name: "Quantum Lex", blurb: "Partner.", logo: "/sponsors/quantum-lex.jpg" },
  { name: "Dropchain", blurb: "Partner.", logo: "/sponsors/dropchain.svg" },
  { name: "Stand With Crypto", blurb: "Policy partner.", logo: "/sponsors/stand-with-crypto.png" },
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
// Photos pulled from the live site into /public/team/. LinkedIn links are
// placeholders ("#") until real profile URLs are supplied.
export const boardOfficers = [
  { name: "Brandon Ferdig", role: "President", linkedin: "#", photo: "/team/brandon-ferdig.png" },
];

export const boardMembers = [
  { name: "Alex Schoephoerster", role: "Board Member", linkedin: "#", photo: "/team/alex-schoephoerster.png" },
  { name: "Colin Hirdman", role: "Board Member", linkedin: "#", photo: "/team/colin-hirdman.jpg" },
  { name: "Rafael Mojden", role: "Board Member", linkedin: "#", photo: "/team/rafael-mojden.jpg" },
  { name: "Matt Rogers", role: "Board Member", linkedin: "#", photo: "/team/matt-rogers.png" },
  { name: "Ben-Collins Asongwe", role: "Board Member", linkedin: "#", photo: "/team/ben-collins-asongwe.jpg" },
  { name: "Andy Adams", role: "Board Member", linkedin: "#", photo: "/team/andy-adams.png" },
];

export const staffAdvisors = [
  { name: "Caulden Baumann", role: "Operations", linkedin: "#", photo: "/team/caulden-baumann.png" },
  { name: "Mickey Mikeworth", role: "Advisor", linkedin: "#", photo: "/team/mickey-mikeworth.jpg" },
  { name: "Graham Christopherson", role: "Accounting", linkedin: "#", photo: "/team/graham-christopherson.png" },
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
