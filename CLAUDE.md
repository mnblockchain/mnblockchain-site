# Project Context: MNblockchain.org Rebuild

## What This Is
The public marketing/nonprofit site for MNblockchain (mnblockchain.org), a Minnesota nonprofit. This is the actual website code — separate from `/Users/colinhirdman/projects/MNblockchain`, which holds Colin's board-member planning notes.

Built to replace the current WordPress site. Structured around the org's 4 growth pillars: awareness, event participation, quality speakers, and revenue (sponsorships + membership).

## Stack
- Next.js (App Router) + TypeScript + Tailwind v4, following the same pattern as `/Users/colinhirdman/ruggedai`.
- Fonts: Manrope (body) + Open Sans (headings) via `next/font/google`, matching the original site's brand.
- Brand colors: navy `#003366`, gold `#FFCC00` (see `app/globals.css` `@theme` block).
- Contact/sponsor/newsletter forms are server actions in `actions/contact.action.ts`, emailing via Resend — gracefully no-ops (logs to console) until a `RESEND_API_KEY` is set in `.env.local`, same pattern as RuggedAI.
- All page content lives in `data/content.ts` — this is placeholder data. Update it directly rather than editing JSX when swapping in real speakers, sponsors, events, team bios, or testimonials.
- Deployed via Vercel Git integration (no `vercel.json`), same as RuggedAI and miv-fund-model.

## Status
Initial build: placeholder content throughout. Real content (speakers, sponsors, events, team/committee-lead names, testimonials) still needs to be swapped in via `data/content.ts`. Domain (mnblockchain.org) has not been pointed at this site — it's deployed to a Vercel preview URL pending Colin's review.

## What I'll Commonly Ask Claude Code To Do
- Swap placeholder content for real content in `data/content.ts`
- Add/adjust pages or sections as the org's needs evolve
- Wire up a real Resend sending domain once ready
- Eventually: connect the mnblockchain.org domain (explicit step, not automatic)
