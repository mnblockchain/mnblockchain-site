import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Board Hub - MNblockchain",
  description: "Internal reference for the MNblockchain board and committee chairs.",
  robots: { index: false, follow: false },
};

// Internal pages. All are noindex and unlinked from the public nav/footer.
// Add new internal pages here as they are built.
const pages = [
  {
    title: "Committee Chairs",
    href: "/committee-chairs",
    blurb: "What each committee chair is responsible for, plus expectations that apply to every chair.",
  },
  {
    title: "Brand Standards",
    href: "/brand-standards",
    blurb: "Logo files, colors, fonts, and how the brand is used on the site.",
  },
  {
    title: "Membership NFT Claim",
    href: "/membership/nft",
    blurb: "The page members use to claim their yearly Membership NFT through DropChain.",
  },
  {
    title: "Speakers Directory",
    href: "/speakers",
    blurb: "Past and prospective speakers. Hidden from the public site while this section is reworked.",
  },
];

export default function BoardHubPage() {
  return (
    <>
      <section className="bg-navy-black py-16 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="font-heading text-4xl font-extrabold text-white">Board Hub</h1>
          <p className="mt-4 text-white/70">
            Internal reference for the board and committee chairs. Not indexed and not linked from
            the public site, but anyone with the link can open it, so keep sensitive material elsewhere.
          </p>
        </div>
      </section>

      <section className="bg-cloud py-16">
        <div className="mx-auto grid max-w-5xl gap-6 px-6 sm:grid-cols-2">
          {pages.map((p) => (
            <div key={p.href} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
              <p className="font-heading text-lg font-bold text-navy-black">{p.title}</p>
              <p className="mt-2 text-sm text-slate">{p.blurb}</p>
              <Link
                href={p.href}
                className="mt-4 inline-block text-sm font-bold text-navy-black underline decoration-brand-blue decoration-2 underline-offset-4"
              >
                Open →
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
