import type { Metadata } from "next";
import Logo from "../components/Logo";
import { PrimaryButton } from "../components/ui";

export const metadata: Metadata = {
  title: "Brand Standards — MNblockchain",
  description: "Internal reference: MNblockchain's brand standards as implemented on this site.",
  robots: { index: false, follow: false },
};

const colors = [
  { name: "Brand Blue", hex: "#6495ed", usage: "Primary accent — logo \"MN\", headline highlights, badges, links." },
  { name: "Brand Blue Dark", hex: "#4a7bd4", usage: "Darker blue, used sparingly for text needing more contrast on white." },
  { name: "Bitcoin Orange", hex: "#f7931a", usage: "Every action button site-wide (standing rule, set 2026-09-11) — not in the original brand PDF." },
  { name: "Brand Black", hex: "#000000", usage: "Primary dark background/text (per original brand PDF)." },
  { name: "Brand Black Soft", hex: "#0a0a0a", usage: "Near-black — header, dark cards, countdown box." },
  { name: "Brand Orange (coral)", hex: "#ff7f50", usage: "Secondary color from the original PDF — reserved for policy/legislative content, not used as a button color." },
  { name: "Brand Plum", hex: "#342e37", usage: "Secondary color from the original PDF, marked \"work in progress\" — not currently used anywhere on the site." },
  { name: "Cloud", hex: "#f5f7fa", usage: "Light neutral section background (alternates with white for visual rhythm)." },
  { name: "Slate", hex: "#4b5563", usage: "Body copy / secondary text gray." },
];

const darkAlternatives = [
  { name: "Slate Navy", hex: "#0f172a", note: "Same hue family as brand blue — common in fintech/crypto dark UIs. Recommended." },
  { name: "Cool Charcoal", hex: "#0d1117", note: "Barely-there cool tint (GitHub dark mode). Safest, most minimal change from pure black." },
  { name: "Deep Plum", hex: "#1e1b29", note: "Darkened version of the existing (unused) brand plum — ties back to an already-approved color." },
];

function Swatch({ hex, name, usage }: { hex: string; name: string; usage: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="h-16 w-full rounded-xl border border-slate-200" style={{ backgroundColor: hex }} />
      <p className="mt-3 font-heading text-sm font-bold text-brand-black">{name}</p>
      <p className="font-mono text-xs text-slate">{hex}</p>
      <p className="mt-2 text-xs leading-relaxed text-slate">{usage}</p>
    </div>
  );
}

export default function BrandStandardsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-black-soft via-brand-black to-brand-black-soft py-16 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="font-heading text-4xl font-extrabold text-white">Brand Standards</h1>
          <p className="mt-4 text-white/70">
            Internal reference only — not indexed, not linked from nav. Documents what&rsquo;s actually
            implemented on this site as of 2026-09-12, which in a few places has evolved past the
            original draft brand-standards PDF.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="font-heading text-2xl font-extrabold text-brand-black">Logo &amp; Wordmark</h2>
          <p className="mt-2 max-w-2xl text-sm text-slate">
            Font: <strong>Cloud Bold</strong> (self-hosted). &ldquo;MN&rdquo; is always blue; &ldquo;blockchain&rdquo;
            is black on light backgrounds, white on dark backgrounds. Safe-zone and 2&rdquo; minimum size
            still apply per the original PDF.
          </p>
          <div className="mt-6 flex flex-wrap gap-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-8">
              <Logo dark />
            </div>
            <div className="rounded-2xl border border-slate-200 bg-brand-black p-8">
              <Logo />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cloud py-16">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="font-heading text-2xl font-extrabold text-brand-black">Colors</h2>
          <p className="mt-2 max-w-2xl text-sm text-slate">
            All defined as CSS theme tokens in <code>app/globals.css</code> — this grid is generated from
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
          <h2 className="font-heading text-2xl font-extrabold text-brand-black">
            Dark Background — Open Question
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-slate">
            Currently pure black (<code>#000000</code> / <code>#0a0a0a</code>). Candidate alternatives that
            pair better with the blue + Bitcoin orange accents, discussed 2026-09-12 — not yet decided.
          </p>
          <div className="mt-6 grid gap-5 sm:grid-cols-3">
            {darkAlternatives.map((c) => (
              <div key={c.hex} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="h-16 w-full rounded-xl border border-slate-200" style={{ backgroundColor: c.hex }} />
                <p className="mt-3 font-heading text-sm font-bold text-brand-black">{c.name}</p>
                <p className="font-mono text-xs text-slate">{c.hex}</p>
                <p className="mt-2 text-xs leading-relaxed text-slate">{c.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cloud py-16">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="font-heading text-2xl font-extrabold text-brand-black">Typography</h2>
          <ul className="mt-4 space-y-2 text-sm text-slate">
            <li><strong>Headings &amp; body:</strong> Manrope (Google Font) — the original PDF left this unspecified ("default fonts").</li>
            <li><strong>Wordmark only:</strong> Cloud Bold (self-hosted, single weight).</li>
          </ul>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="font-heading text-2xl font-extrabold text-brand-black">Buttons &amp; Links</h2>
          <ul className="mt-4 space-y-2 text-sm text-slate">
            <li>Every action button site-wide is Bitcoin Orange, dark text, no exceptions.</li>
            <li>Hover state is the same color at 80% opacity — never a different color, never white.</li>
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
