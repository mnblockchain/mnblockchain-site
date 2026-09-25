import type { Metadata } from "next";
import Logo from "../components/Logo";
import { PrimaryButton } from "../components/ui";

export const metadata: Metadata = {
  title: "Brand Standards - MNblockchain",
  description: "Internal reference: MNblockchain's brand standards as implemented on this site.",
  robots: { index: false, follow: false },
};

const logoFiles = [
  { slug: "mnblockchain-logo-on-white", label: "On White", previewBg: "#ffffff", lightText: false },
  { slug: "mnblockchain-logo-on-navy", label: "On Navy", previewBg: "#0b0e11", lightText: true },
  { slug: "mnblockchain-logo-dark-text", label: "Transparent, Dark Text", previewBg: "#f5f7fa", lightText: false },
  { slug: "mnblockchain-logo-white-text", label: "Transparent, White Text", previewBg: "#0b0e11", lightText: true },
];

const colors = [
  { name: "Brand Blue", hex: "#6495ed", usage: "The one blue - logo \"MN\", headline highlights, badges, links. Also used as plain text where a second darker blue used to be (removed 2026-09-12)." },
  { name: "Bitcoin Orange", hex: "#f7931a", usage: "The one orange - every action button site-wide, no exceptions (standing rule, set 2026-09-11) - not in the original brand PDF." },
  { name: "Navy Black", hex: "#0b0e11", usage: "The one dark neutral - replaces plain black/near-black everywhere (headings, dark backgrounds, header, footer). Adopted 2026-09-12 after piloting plum first and rejecting it; navy-black's cool undertone pairs with brand blue and slate instead of fighting them." },
  { name: "Cloud", hex: "#f5f7fa", usage: "Light neutral section background (alternates with white for visual rhythm)." },
  { name: "Slate", hex: "#4b5563", usage: "Body copy / secondary text gray." },
];

function Swatch({ hex, name, usage }: { hex: string; name: string; usage: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="h-16 w-full rounded-xl border border-slate-200" style={{ backgroundColor: hex }} />
      <p className="mt-3 font-heading text-sm font-bold text-navy-black">{name}</p>
      <p className="font-mono text-xs text-slate">{hex}</p>
      <p className="mt-2 text-xs leading-relaxed text-slate">{usage}</p>
    </div>
  );
}

export default function BrandStandardsPage() {
  return (
    <>
      <section className="bg-navy-black py-16 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="font-heading text-4xl font-extrabold text-white">Brand Standards</h1>
          <p className="mt-4 text-white/70">
            Internal reference only - not indexed, not linked from nav. Documents what&rsquo;s actually
            implemented on this site as of 2026-09-12, which in a few places has evolved past the
            original draft brand-standards PDF.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="font-heading text-2xl font-extrabold text-navy-black">Logo &amp; Wordmark</h2>
          <p className="mt-2 max-w-2xl text-sm text-slate">
            Font: <strong>Cloud Bold</strong> (self-hosted). &ldquo;MN&rdquo; is always blue; &ldquo;blockchain&rdquo;
            is black on light backgrounds, white on dark backgrounds. Safe-zone and 2&rdquo; minimum size
            still apply per the original PDF.
          </p>
          <div className="mt-6 flex flex-wrap gap-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-8">
              <Logo dark />
            </div>
            <div className="rounded-2xl border border-slate-200 bg-navy-black p-8">
              <Logo />
            </div>
          </div>

          <h3 className="mt-10 font-heading text-lg font-bold text-navy-black">Download Logo Files</h3>
          <p className="mt-1 max-w-2xl text-sm text-slate">
            Vector paths traced from the real Cloud Bold font, so these match the site exactly and
            scale to any size. SVG for print/design work, PNG for quick use (both transparent
            background except the two solid-background versions below).
          </p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {logoFiles.map((f) => (
              <div key={f.slug} className="rounded-2xl border border-slate-200 p-4" style={{ backgroundColor: f.previewBg }}>
                <div className="flex h-16 items-center justify-center">
                  <img src={`/logo/${f.slug}.png`} alt={f.label} className="max-h-10 max-w-full" />
                </div>
                <p className={`mt-3 text-xs font-bold uppercase tracking-widest ${f.lightText ? "text-white" : "text-navy-black"}`}>
                  {f.label}
                </p>
                <div className="mt-2 flex gap-3 text-xs font-bold uppercase tracking-widest">
                  <a href={`/logo/${f.slug}.svg`} download className={f.lightText ? "text-white underline" : "text-brand-blue underline"}>
                    SVG
                  </a>
                  <a href={`/logo/${f.slug}.png`} download className={f.lightText ? "text-white underline" : "text-brand-blue underline"}>
                    PNG
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cloud py-16">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="font-heading text-2xl font-extrabold text-navy-black">Colors</h2>
          <p className="mt-2 max-w-2xl text-sm text-slate">
            All defined as CSS theme tokens in <code>app/globals.css</code> - this grid is generated from
            the same hex values, so it stays accurate as those change.
          </p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {colors.map((c) => (
              <Swatch key={c.hex} {...c} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="font-heading text-2xl font-extrabold text-navy-black">Typography</h2>
          <ul className="mt-4 space-y-2 text-sm text-slate">
            <li><strong>Headings &amp; body:</strong> Manrope (Google Font) - the original PDF left this unspecified ("default fonts").</li>
            <li><strong>Wordmark only:</strong> Cloud Bold (self-hosted, single weight).</li>
          </ul>
        </div>
      </section>

      <section className="bg-cloud py-16">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="font-heading text-2xl font-extrabold text-navy-black">Buttons &amp; Links</h2>
          <ul className="mt-4 space-y-2 text-sm text-slate">
            <li>Every action button site-wide is Bitcoin Orange, dark text, no exceptions.</li>
            <li>Hover state is the same color at 80% opacity - never a different color, never white.</li>
            <li>Every button shows the pointer/hand cursor (enforced globally in CSS).</li>
            <li>Every external link opens in a new tab (<code>target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot;</code>).</li>
          </ul>
          <div className="mt-6">
            <PrimaryButton href="/brand-standards">Example Button</PrimaryButton>
          </div>
        </div>
      </section>
    </>
  );
}
