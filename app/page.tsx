import Image from "next/image";
import Link from "next/link";
import Countdown from "./components/Countdown";
import NewsletterForm from "./components/NewsletterForm";
import {
  Badge,
  EventSpeaker,
  NewsCard,
  PrimaryButton,
  SectionLabel,
  SponsorCard,
  StatBlock,
  TeamCard,
} from "./components/ui";
import {
  nextEvent,
  sponsors,
  stats,
  boardOfficers,
  boardMembers,
} from "@/data/content";
import { newsArticles } from "@/data/news";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-black pb-[380px] pt-0 sm:pb-[484px] sm:pt-0">
        <Image
          src="/hero/twins-nft-night.jpg"
          alt="MNblockchain community at a Twins NFT Night event"
          fill
          priority
          sizes="100vw"
          className="object-cover object-top brightness-125 contrast-105 saturate-110"
        />
        {/* Light, uniform scrim so the photo reads clearly outside the cards
            below — the cards themselves are what guarantee text legibility,
            not this overlay. */}
        <div className="absolute inset-0 bg-navy-black/25" />

        {/* Box 1: headline, blended directly into the nav bar (full width,
            flush against the top, no gap) so the photo's crowd — heads
            included — only becomes visible below it, instead of a floating
            card sitting on top of people's faces. */}
        <div className="relative w-full bg-navy-black px-6 py-2 text-center shadow-2xl sm:py-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-2 flex justify-center">
              <Badge>Monthly meetups · Seasonal events · Advocacy opportunities</Badge>
            </div>
            <h1 className="font-heading text-3xl font-extrabold leading-tight text-white sm:text-5xl">
              Minnesota&rsquo;s Home
              <br />
              <span className="text-brand-blue">for Blockchain &amp; Web3</span>
            </h1>
          </div>
        </div>
        {/* Tall gradient vignette instead of a hard edge below Box 1 — the
            crowd's heads start high enough in the photo that no reasonably
            sized header box avoids them entirely, so this fades solid black
            into the photo gradually, reading as an intentional dark
            vignette rather than a box chopping off faces. */}
        <div className="relative h-40 w-full bg-gradient-to-b from-navy-black to-transparent sm:h-56" />
      </section>

      {/* Box 2: next event + org stats — pulled up to start over the bottom
          of the hero photo, then bleeds down into the section below. */}
      <div className="relative z-10 -mt-28 px-6 sm:-mt-32">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-3xl border border-white/10 bg-navy-black/90 px-6 py-10 text-center shadow-2xl sm:px-12 sm:py-12">
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-bitcoin-orange opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-bitcoin-orange" />
              </span>
              <p className="font-heading text-xl font-extrabold uppercase tracking-[0.1em] text-bitcoin-orange drop-shadow-[0_0_18px_rgba(247,147,26,0.45)] sm:text-3xl">
                Countdown to Next Event
              </p>
            </div>
            <div className="flex justify-center">
              <Countdown target={nextEvent.date} />
            </div>

            <div className="mt-10 flex justify-center">
              <PrimaryButton href={nextEvent.eventbriteUrl}>Register here</PrimaryButton>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-8 border-t border-white/10 pt-6">
              {stats.map((s) => (
                <StatBlock key={s.label} value={s.value} label={s.label} />
              ))}
            </div>
          </div>

          {/* Next event details — moved up directly below the countdown box
              (the old "Next Event" section wrapper and "You'll Learn" list
              were removed; this card is what's left of it). */}
          <div className="relative mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-cloud text-left shadow-sm">
            <div className="h-1.5 w-full bg-brand-blue" />
            <div className="p-8 sm:p-10">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-brand-blue/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-brand-blue">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5">
                  <path d="M9 3h6l3 8H6z" />
                  <ellipse cx="12" cy="20" rx="7" ry="2" />
                </svg>
                Spotlight Meetup
              </div>
              <div className="relative mt-6 block">
                <div className="pointer-events-none absolute -inset-4 rounded-full bg-bitcoin-orange/25 blur-2xl" />
                <h3 className="relative font-heading text-2xl font-bold text-brand-blue">
                  {nextEvent.title}
                </h3>
              </div>
            <p className="mt-3 text-sm text-slate">{nextEvent.dateLabel}</p>
            <p className="text-sm text-slate">{nextEvent.time}</p>
            <p className="text-sm text-slate">{nextEvent.location}</p>
            <p className="mt-4 text-sm leading-relaxed text-slate">{nextEvent.description}</p>
            {nextEvent.speakers[0] && (
              <EventSpeaker
                name={nextEvent.speakers[0].name}
                title={nextEvent.speakers[0].title}
                bio={nextEvent.speakers[0].bio}
                photo={nextEvent.speakers[0].photo}
                companyLogo={nextEvent.speakers[0].companyLogo}
              />
            )}
            <div className="mt-6">
              <PrimaryButton href={nextEvent.eventbriteUrl}>Register Free →</PrimaryButton>
            </div>
            </div>
          </div>
        </div>
      </div>

      {/* News & Articles — pulls the latest real posts from /news instead of
          a separate hardcoded list, so this section stays current for free
          whenever /news is updated. */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-heading text-3xl font-extrabold text-navy-black sm:text-4xl">
              News &amp; Articles
            </h2>
            <Link
              href="/news"
              className="text-sm font-bold text-navy-black underline decoration-brand-blue decoration-2 underline-offset-4"
            >
              See All News →
            </Link>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[...newsArticles]
              .sort((a, b) => (a.date < b.date ? 1 : -1))
              .slice(0, 3)
              .map((a) => (
                <NewsCard
                  key={a.slug}
                  slug={a.slug}
                  title={a.title}
                  dateLabel={a.dateLabel}
                  category={a.category}
                  image={a.image}
                  excerpt={a.excerpt}
                />
              ))}
          </div>
        </div>
      </section>

      {/* Team preview — moved up two sections, ahead of Speakers/Sponsors */}
      <section className="bg-cloud py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <SectionLabel>Meet the Team</SectionLabel>
              <h2 className="font-heading text-3xl font-extrabold text-navy-black sm:text-4xl">
                The People Behind MNblockchain
              </h2>
            </div>
            <Link
              href="/about"
              className="text-sm font-bold text-navy-black underline decoration-brand-blue decoration-2 underline-offset-4"
            >
              Meet the Full Board →
            </Link>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {[...boardOfficers, ...boardMembers].slice(0, 4).map((p) => (
              <TeamCard key={p.name} name={p.name} role={p.role} linkedin={p.linkedin} photo={p.photo} />
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors preview */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <SectionLabel>Proud Sponsors</SectionLabel>
              <h2 className="font-heading text-3xl font-extrabold text-navy-black sm:text-4xl">
                Thank You to Our Partner Organizations
              </h2>
            </div>
            <Link
              href="/sponsors"
              className="text-sm font-bold text-navy-black underline decoration-brand-blue decoration-2 underline-offset-4"
            >
              Become a Sponsor →
            </Link>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {sponsors.map((s) => (
              <SponsorCard key={s.name} name={s.name} blurb={s.blurb} logo={s.logo} url={s.url} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-navy-black py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-heading text-2xl font-extrabold text-white sm:text-3xl">
            Get Notified About Upcoming Events
          </h2>
          <p className="mt-3 text-sm text-white/70">
            Free events, expert speakers, and real networking — straight to your inbox.
          </p>
          <div className="mt-6 flex justify-center">
            <NewsletterForm />
          </div>
        </div>
      </section>
    </>
  );
}
