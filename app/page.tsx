import Image from "next/image";
import Link from "next/link";
import Countdown from "./components/Countdown";
import NewsletterForm from "./components/NewsletterForm";
import {
  Badge,
  EventCard,
  OutlineButton,
  PrimaryButton,
  SectionLabel,
  SpeakerCard,
  SponsorCard,
  StatBlock,
  TeamCard,
} from "./components/ui";
import {
  nextEvent,
  pastEvents,
  sponsors,
  stats,
  speakers,
  boardOfficers,
  boardMembers,
  testimonials,
} from "@/data/content";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-black-soft py-20 sm:py-28">
        <Image
          src="/hero/twins-nft-night.jpg"
          alt="MNblockchain community at a Twins NFT Night event"
          fill
          priority
          sizes="100vw"
          className="object-cover brightness-125 contrast-105 saturate-110"
        />
        {/* Light, uniform scrim so the photo reads clearly outside the card
            below — the card itself is what guarantees text legibility, not
            this overlay. */}
        <div className="absolute inset-0 bg-brand-black-soft/25" />

        {/* Solid card so the headline/countdown/CTAs never fight the photo
            behind them, regardless of what's in that part of the image. */}
        <div className="relative mx-auto max-w-4xl px-6">
          <div className="rounded-3xl border border-white/10 bg-brand-black-soft/85 px-6 py-12 text-center shadow-2xl backdrop-blur-sm sm:px-12 sm:py-16">
            <div className="mb-6 flex justify-center">
              <Badge>Free monthly meetups · No membership required to attend</Badge>
            </div>
            <h1 className="font-heading text-4xl font-extrabold leading-tight text-white sm:text-6xl">
              Minnesota&rsquo;s Home for
              <br />
              <span className="text-brand-blue">Blockchain &amp; Web3</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg text-white/70">
              Community, education, and policy advocacy for builders, investors, and the curious —
              all across Minnesota.
            </p>

            <div className="mt-8 flex justify-center">
              <Countdown target={nextEvent.date} />
            </div>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <PrimaryButton href="/events">Register for the Next Event</PrimaryButton>
              <OutlineButton href="/events">View Past Events</OutlineButton>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-8 border-t border-white/10 pt-10 sm:grid-cols-4">
              {stats.map((s) => (
                <StatBlock key={s.label} value={s.value} label={s.label} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Community moments */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          <SectionLabel>From Our Community</SectionLabel>
          <h2 className="font-heading text-2xl font-extrabold text-brand-black sm:text-3xl">
            Real People, Real Events
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="group relative aspect-[16/10] overflow-hidden rounded-2xl">
              <Image
                src="/hero/web3-law-conference.jpeg"
                alt="Web3, AI and Law Conference"
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5">
                <p className="text-sm font-bold text-white">Web3, AI &amp; Law Conference</p>
              </div>
            </div>
            <div className="group relative aspect-[16/10] overflow-hidden rounded-2xl">
              <Image
                src="/hero/course-for-2025.jpg"
                alt="Charting the Course for 2025 event"
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5">
                <p className="text-sm font-bold text-white">Charting the Course for 2025</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next event spotlight */}
      <section className="bg-cloud py-20">
        <div className="mx-auto max-w-5xl px-6">
          <SectionLabel>Next Event</SectionLabel>
          <h2 className="font-heading text-3xl font-extrabold text-brand-black sm:text-4xl">
            Don&rsquo;t Miss What&rsquo;s Coming Up
          </h2>

          <div className="mt-8 grid gap-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:grid-cols-2 md:p-10">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-brand-blue-dark">
                Free · Open to Everyone
              </p>
              <h3 className="mt-2 font-heading text-2xl font-bold text-brand-black">
                {nextEvent.title}
              </h3>
              <p className="mt-3 text-sm text-slate">{nextEvent.dateLabel}</p>
              <p className="text-sm text-slate">{nextEvent.time}</p>
              <p className="text-sm text-slate">{nextEvent.location}</p>
              <p className="mt-4 text-sm leading-relaxed text-slate">{nextEvent.description}</p>
              <div className="mt-6">
                <PrimaryButton href="/contact">Register Free →</PrimaryButton>
              </div>
            </div>
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-widest text-brand-black">
                You&rsquo;ll Learn
              </p>
              <ul className="space-y-3">
                {nextEvent.learn.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-slate">
                    <span className="mt-0.5 text-brand-blue-dark">✦</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Past events */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionLabel>Track Record</SectionLabel>
          <h2 className="font-heading text-3xl font-extrabold text-brand-black sm:text-4xl">
            See What You&rsquo;ve Been Missing
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pastEvents.map((e) => (
              <EventCard key={e.title} date={e.date} title={e.title} blurb={e.blurb} />
            ))}
          </div>
        </div>
      </section>

      {/* Speakers preview */}
      <section className="bg-cloud py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <SectionLabel>Event Speakers</SectionLabel>
              <h2 className="font-heading text-3xl font-extrabold text-brand-black sm:text-4xl">
                Learn From Real Builders
              </h2>
            </div>
            <Link
              href="/speakers"
              className="text-sm font-bold text-brand-black underline decoration-brand-blue decoration-2 underline-offset-4"
            >
              See All Speakers →
            </Link>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
            {speakers.slice(0, 4).map((s, i) => (
              <SpeakerCard key={i} name={s.name} title={s.title} />
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
              <h2 className="font-heading text-3xl font-extrabold text-brand-black sm:text-4xl">
                Free Events, Powered by Great Partners
              </h2>
            </div>
            <Link
              href="/sponsors"
              className="text-sm font-bold text-brand-black underline decoration-brand-blue decoration-2 underline-offset-4"
            >
              Become a Sponsor →
            </Link>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {sponsors.map((s) => (
              <SponsorCard key={s.name} name={s.name} blurb={s.blurb} logo={s.logo} />
            ))}
          </div>
        </div>
      </section>

      {/* Team preview */}
      <section className="bg-cloud py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <SectionLabel>Meet the Team</SectionLabel>
              <h2 className="font-heading text-3xl font-extrabold text-brand-black sm:text-4xl">
                The People Behind MNblockchain
              </h2>
            </div>
            <Link
              href="/about"
              className="text-sm font-bold text-brand-black underline decoration-brand-blue decoration-2 underline-offset-4"
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

      {/* Testimonials */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionLabel>What People Say</SectionLabel>
          <h2 className="font-heading text-3xl font-extrabold text-brand-black sm:text-4xl">
            What Members Say After Just One Event
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-2xl border border-slate-200 bg-cloud p-6">
                <p className="text-sm leading-relaxed text-ink">&ldquo;{t.quote}&rdquo;</p>
                <p className="mt-4 text-sm font-bold text-brand-black">{t.name}</p>
                <p className="text-xs text-slate">{t.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-brand-black py-16">
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
