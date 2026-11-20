import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SWC Proposal 2027 - MNblockchain",
  description: "Internal draft: the 2027 Stand With Crypto proposal and community levels.",
  robots: { index: false, follow: false },
};

// PDFs live in /public/board-docs. Replace a file there to update it here.
const docs = [
  {
    title: "SWC Proposal: TL;DR",
    blurb: "The one-page version.",
    file: "/board-docs/swc-proposal-2027-tldr.pdf",
  },
  {
    title: "SWC Proposal: Full Plan",
    blurb: "Three pages: what we'll do in 2027, how we grow, and what partners get.",
    file: "/board-docs/swc-proposal-2027.pdf",
  },
  {
    title: "Community Levels",
    blurb: "Our Network, Community Members, Supporters, and Sponsors.",
    file: "/board-docs/community-levels-2027.pdf",
  },
];

export default function SwcProposalPage() {
  return (
    <>
      <section className="bg-navy-black py-16 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="font-heading text-4xl font-extrabold text-white">SWC Proposal 2027</h1>
          <p className="mt-4 text-white/70">
            Internal drafts for the board. Not indexed and not linked from the public site, but
            anyone with the link can open it.
          </p>
          <div className="mt-6">
            <Link href="/board" className="text-sm font-bold text-white underline decoration-brand-blue decoration-2 underline-offset-4">
              ← Back to Board Hub
            </Link>
          </div>
        </div>
      </section>

      {docs.map((d, i) => (
        <section key={d.file} className={i % 2 === 0 ? "bg-cloud py-14" : "bg-white py-14"}>
          <div className="mx-auto max-w-4xl px-6">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <h2 className="font-heading text-2xl font-extrabold text-navy-black">{d.title}</h2>
                <p className="mt-1 text-sm text-slate">{d.blurb}</p>
              </div>
              <a
                href={d.file}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="inline-flex items-center justify-center rounded-full bg-bitcoin-orange px-6 py-3 text-sm font-bold uppercase tracking-wide text-navy-black transition-colors hover:bg-bitcoin-orange/80"
              >
                Download PDF
              </a>
            </div>
            {/* Phones can't show PDFs inline, so the viewer is desktop-only; the button covers phones. */}
            <iframe
              src={`${d.file}#view=FitH`}
              title={d.title}
              className="mt-6 hidden h-[900px] w-full rounded-2xl border border-slate-200 bg-white sm:block"
            />
          </div>
        </section>
      ))}
    </>
  );
}
