# MNblockchain.org

The public website for [MNblockchain](https://mnblockchain.org), a Minnesota nonprofit building community, education, and policy work around blockchain & web3.

**Live preview:** [mnblockchain-site.vercel.app](https://mnblockchain-site.vercel.app) — the real `mnblockchain.org` domain still points at the old WordPress site; it hasn't been switched over yet.

## Running it locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages

| Route | What's there |
|---|---|
| `/` | Hero, countdown to next event, community photos, next-event spotlight, past events, speaker/sponsor previews, team preview, testimonials |
| `/about` | Mission, full board of directors + staff/advisors, committee structure |
| `/events` | Full event calendar — next event + past events |
| `/speakers` | Speaker directory |
| `/sponsors` | Sponsorship tiers, current sponsors, sponsor inquiry form |
| `/membership` | Membership program and pricing |
| `/policy` | Government & Law committee's public focus areas |
| `/contact` | Contact form |

## Editing content

Almost everything on the site — event details, speakers, sponsors, membership pricing, the team roster, testimonials — lives in one file: **`data/content.ts`**. To update any of that, edit the data there; you generally don't need to touch page code.

Some of it is still placeholder and needs real input:
- **Sponsorship tier pricing** (`sponsorTiers`) — no real pricing has ever been published, needs a board decision
- **Testimonials** — currently illustrative, not real quotes
- **Team LinkedIn links** — all placeholder (`"#"`) right now

Images live in `public/`: `public/team/` (board & staff photos), `public/hero/` (homepage photos), `public/sponsors/` (sponsor logos).

## Brand

Per `mnblockchain brand standards.pdf` (not the old WordPress site's navy/gold):

| Token | Hex | Use |
|---|---|---|
| `brand-black` | `#000000` | Primary dark background/text |
| `brand-black-soft` | `#0a0a0a` | Near-black, for gradient variation |
| `brand-blue` | `#6495ed` | Accent — buttons, links, "rollovers" |
| `brand-blue-dark` | `#4a7bd4` | Darker accent, hover states |
| `brand-orange` | `#ff7f50` | Reserved for policy/legislative content only |
| `brand-plum` | `#342e37` | Defined, not currently used (marked "work in progress" in the brand doc) |

Font: **Manrope** throughout (body and headings) — the brand doc doesn't mandate a specific typeface beyond the wordmark's "Cloud Bold," which we don't have a file for yet; Manrope extrabold is used as a close substitute on the logo.

Favicon/social icon: `app/icon.svg`, the brand's square "MN / blockchain" mark on white.

## Stack

Next.js (App Router) + TypeScript + Tailwind v4. Contact/sponsor/newsletter forms are server actions (`actions/contact.action.ts`) that send via [Resend](https://resend.com) — they currently log to the console instead of sending, since no `RESEND_API_KEY` is set yet.

## Deployment

GitHub (`mnblockchain/mnblockchain-site`) → Vercel, auto-deploying on every push to `main`.
