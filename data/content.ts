// Placeholder content for the MNblockchain.org rebuild.
// Everything here is illustrative — swap in real speakers, sponsors, events,
// team bios, and testimonials once available. Keeping it in one file makes
// that swap a data edit, not a design edit.

export const nextEvent = {
  title: "Spotlight Meetup — Roundtable Discussion",
  date: "2026-09-14T17:30:00-05:00", // placeholder — update to the real next event
  dateLabel: "Monday, September 14, 2026",
  time: "5:30 – 8:00 PM",
  location: "Frankie's Chicago Style, New Hope, MN",
  description:
    "Our monthly spotlight meetup — open discussion on where Minnesota blockchain policy and industry stand right now, plus open networking.",
  learn: [
    "What's moving in Minnesota blockchain policy this quarter",
    "How local builders and investors are using the technology today",
    "Where the state stands relative to federal crypto legislation",
    "Open Q&A and networking with the community",
  ],
  speakers: [
    { name: "Featured Speaker TBA", title: "Confirming for this slot" },
  ],
};

export const stats = [
  { value: "4+", label: "Years Running" },
  { value: "12", label: "Events / Year" },
  { value: "3", label: "Flagship Events" },
  { value: "100%", label: "Volunteer-Run" },
];

export const pastEvents = [
  {
    date: "August 3, 2026",
    title: "Policy Roundtable: What CLARITY Means for Minnesota",
    blurb: "A closed-door discussion on federal market-structure legislation and what it means for MN builders.",
  },
  {
    date: "July 6, 2026",
    title: "Stablecoins & Community Banking",
    blurb: "Local credit union and fintech leaders on what GENIUS Act rules mean for Main Street finance.",
  },
  {
    date: "June 1, 2026",
    title: "Bitcoin Treasury 101 for Small Business",
    blurb: "A practical session for SMB owners exploring Bitcoin as a treasury asset.",
  },
  {
    date: "May 4, 2026",
    title: "Layer 2s and What They Mean for Builders",
    blurb: "A technical-but-approachable look at where real economic value is being created on-chain.",
  },
];

export const speakers = [
  { name: "Speaker Name", title: "Title, Company", tier: "flagship" },
  { name: "Speaker Name", title: "Title, Company", tier: "flagship" },
  { name: "Speaker Name", title: "Title, Company", tier: "monthly" },
  { name: "Speaker Name", title: "Title, Company", tier: "monthly" },
  { name: "Speaker Name", title: "Title, Company", tier: "remote" },
  { name: "Speaker Name", title: "Title, Company", tier: "monthly" },
  { name: "Speaker Name", title: "Title, Company", tier: "remote" },
  { name: "Speaker Name", title: "Title, Company", tier: "monthly" },
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

export const sponsors = [
  { name: "Sponsor One", blurb: "Placeholder sponsor — supporting Minnesota blockchain education." },
  { name: "Sponsor Two", blurb: "Placeholder sponsor — financial services partner." },
  { name: "Sponsor Three", blurb: "Placeholder sponsor — legal & compliance partner." },
  { name: "Sponsor Four", blurb: "Placeholder sponsor — Bitcoin-native financial services." },
];

export const membershipTiers = [
  {
    name: "Individual",
    price: "$50 / year",
    perks: [
      "Priority RSVP for all monthly meetups",
      "Member-only newsletter",
      "Access to the member directory",
    ],
  },
  {
    name: "Professional",
    price: "$150 / year",
    perks: [
      "Everything in Individual, plus:",
      "Early access to flagship event tickets",
      "Listed in the member directory as a professional resource",
      "Invitations to member-only socials",
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
