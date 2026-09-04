# Project Context: MNblockchain.org Rebuild

## What This Is
The public marketing/nonprofit site for MNblockchain (mnblockchain.org), a Minnesota nonprofit. This is the actual website code — separate from `/Users/colinhirdman/projects/MNblockchain`, which holds Colin's board-member planning notes.

Rebuilding the current WordPress site. Structured around the org's 4 growth pillars: awareness, event participation, quality speakers, and revenue (sponsorships + membership).

## Stack
- Next.js (App Router) + TypeScript + Tailwind v4, following the same pattern as `/Users/colinhirdman/ruggedai`.
- **Single font family**: Manrope, via `next/font/google` (used for both body and headings — see `app/globals.css`'s `--font-heading`/`--font-sans`). The wordmark logo also uses Manrope extrabold as a close substitute for the brand doc's "Cloud Bold" — real font file not yet supplied.
- **Brand colors** (per `mnblockchain brand standards.pdf`, not the old WordPress site's navy/gold): black `#000000` / white primary, soft blue `#6495ed` for accents/rollovers, orange `#ff7f50` reserved for policy/legislative content, dark plum `#342e37` defined but unused (marked "work in progress" in the brand doc). All tokens in `app/globals.css`'s `@theme` block (`brand-black`, `brand-black-soft`, `brand-blue`, `brand-blue-dark`, `brand-orange`, `brand-plum`).
- Contact/sponsor/newsletter forms are server actions in `actions/contact.action.ts`, emailing via Resend — gracefully no-ops (logs to console) until a `RESEND_API_KEY` is set in `.env.local`, same pattern as RuggedAI.
- All page content lives in `data/content.ts` — update it directly rather than editing JSX when changing speakers, sponsors, events, team bios, or testimonials.
- Deployed via Vercel Git integration (no `vercel.json`) — GitHub repo `mnblockchain/mnblockchain-site` (dedicated account, separate from Colin's personal/MIV accounts) → auto-deploys to Vercel on push to `main`.

## Pages / Routes
`/` (home), `/about`, `/events`, `/speakers`, `/sponsors`, `/membership`, `/policy`, `/contact`. Favicon/social icon at `app/icon.svg` (the brand's square "MN/blockchain" mark, white background).

## Components (`app/components/`)
- `Nav.tsx`, `Footer.tsx`, `Logo.tsx`, `Ticker.tsx` (scrolling next-event banner)
- `Countdown.tsx` — client component, countdown to `nextEvent.date`
- `NewsletterForm.tsx` — client component, footer/home email capture
- `ui.tsx` — shared building blocks: `Badge`, `SectionLabel` (both take an `accent="blue"|"orange"` prop), `PrimaryButton`, `OutlineButton`, `StatBlock`, `SpeakerCard`, `TeamCard` (photo or initials fallback), `SponsorCard` (logo image or text fallback), `EventCard`

## Data (`data/content.ts`)
**Real data** (pulled from the live mnblockchain.org on 2026-08-28): `nextEvent`, `pastEvents`, `speakers`, `sponsors` (5 real logos in `/public/sponsors/`), `membershipTiers` (real $99/year program), `boardOfficers`/`boardMembers`/`staffAdvisors` (real photos in `/public/team/`, real names/roles).

**Still placeholder**: `sponsorTiers` (the $500/$2,500/$10,000 pricing — never published anywhere to pull from, needs a real board decision), `testimonials` (fabricated quotes), `stats` (illustrative), `policyFocus` (drafted copy, not sourced), LinkedIn URLs on every team member (all `"#"`).

`/public/hero/` has 3 real event photos (Twins NFT Night, Web3/AI/Law Conference, Charting the Course for 2025) — the first is the homepage hero background, the other two are in the "Real People, Real Events" section.

## Status (as of 2026-09-04)
Structurally complete and deployed with real content in most places (see above for what's still placeholder). Domain (mnblockchain.org) has **not** been pointed at this site — still live on WordPress. Preview: `mnblockchain-site.vercel.app`.

## What I'll Commonly Ask Claude Code To Do
- Swap remaining placeholder content for real data in `data/content.ts` (sponsor tier pricing, testimonials, LinkedIn URLs)
- Add/adjust pages or sections as the org's needs evolve
- Wire up a real Resend sending domain once ready
- Eventually: connect the mnblockchain.org domain (explicit step, not automatic)
