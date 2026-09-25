import type { Metadata } from "next";
import { Badge, PrimaryButton, SectionLabel } from "../../components/ui";

export const metadata: Metadata = {
  title: "Claim Your Membership NFT - MNblockchain",
  description: "How current MNblockchain members claim their annual Membership NFT via DropChain.",
  // Orphaned on purpose: reachable only via direct link/redirect, not linked
  // from anywhere else on the site, and kept out of search results.
  robots: { index: false, follow: false },
};

// Rotates each year when a new NFT is issued - update alongside the claim
// copy below if the process ever changes.
const claimUrl = "https://claim.dropchain.network/claim/v3/93bb6a6e-7903-431d-b2fa-4dcf294a6243";

export default function MembershipNftPage() {
  return (
    <>
      <section className="bg-navy-black py-20 text-center">
        <div className="mx-auto max-w-2xl px-6">
          <Badge>For current MNblockchain members</Badge>
          <h1 className="mt-6 font-heading text-4xl font-extrabold text-white sm:text-5xl">
            Claim Your Membership NFT
          </h1>
          <p className="mt-4 text-xl font-medium text-white/90">
            We team up with local company DropChain to deliver each year&rsquo;s Membership NFT to
            our members.
          </p>
          <div className="mt-8">
            <PrimaryButton href={claimUrl}>Claim Your NFT</PrimaryButton>
          </div>
          <p className="mt-3 text-xs text-white/60">You&rsquo;ll need to sign in to DropChain.</p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-2xl px-6">
          <SectionLabel>How It Works</SectionLabel>
          <h2 className="font-heading text-2xl font-extrabold text-navy-black">Steps to Claim</h2>

          <ol className="mt-8 space-y-6">
            <li className="flex gap-4">
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-brand-blue/10 font-heading font-bold text-brand-blue">
                1
              </span>
              <p className="text-slate">
                Claim your NFT at the link above. This delivers it to a wallet custodied by
                DropChain, which is the easiest option and all you need to do if you&rsquo;re happy
                keeping it there.
              </p>
            </li>
            <li className="flex gap-4">
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-brand-blue/10 font-heading font-bold text-brand-blue">
                2
              </span>
              <p className="text-slate">
                Prefer your own wallet? The NFT is minted on Polygon, so it can be sent there
                instead. Check your email for two messages: a claim confirmation, and a separate
                notice that you&rsquo;ve received an NFT on Polygon.
              </p>
            </li>
            <li className="flex gap-4">
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-brand-blue/10 font-heading font-bold text-brand-blue">
                3
              </span>
              <p className="text-slate">
                Click the Claim NFT button in that second email, then sign in and sign the
                transaction with your preferred wallet. Delivery takes less than 10 seconds.
              </p>
            </li>
            <li className="flex gap-4">
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-brand-blue/10 font-heading font-bold text-brand-blue">
                4
              </span>
              <p className="text-slate">
                You&rsquo;ll get a final confirmation email with a link to your transaction on
                Polygonscan.
              </p>
            </li>
          </ol>

          <p className="mt-10 text-center text-sm text-slate">
            Questions? Email{" "}
            <a href="mailto:connect@mnblockchain.org" className="font-bold text-navy-black underline decoration-brand-blue decoration-2">
              connect@mnblockchain.org
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
