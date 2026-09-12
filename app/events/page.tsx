import type { Metadata } from "next";
import Image from "next/image";
import Countdown from "../components/Countdown";
import { Badge, EventCard, PrimaryButton, SectionLabel } from "../components/ui";
import { nextEvent, pastEvents } from "@/data/content";

export const metadata: Metadata = {
  title: "Events — MNblockchain",
  description: "Monthly meetups, flagship events, and remote spotlight speaker sessions across Minnesota.",
};

export default function EventsPage() {
  return (
    <>
      <section className="relative overflow-hidden py-20 text-center">
        <Image
          src="/events/header-photo.jpg"
          alt="MNblockchain event attendees listening to a speaker"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Solid scrim so headline text stays legible over the photo. */}
        <div className="absolute inset-0 bg-navy-black/70" />
        <div className="relative mx-auto max-w-3xl px-6">
          <Badge>12 monthly meetups + 2–3 flagship events every year</Badge>
          <h1 className="mt-6 font-heading text-4xl font-extrabold text-white sm:text-5xl">
            Events
          </h1>
          <p className="mt-4 text-lg text-white/70">
            Free, in-person monthly meetups, marquee flagship events, and a growing remote
            &ldquo;spotlight&rdquo; speaker series.
          </p>
          <div className="mt-8 flex justify-center">
            <Countdown target={nextEvent.date} />
          </div>
          <div className="mt-8">
            <PrimaryButton href="/contact">Register for the Next Event</PrimaryButton>
          </div>
        </div>
      </section>

      <section className="bg-cloud py-20">
        <div className="mx-auto max-w-5xl px-6">
          <SectionLabel>Up Next</SectionLabel>
          <h2 className="font-heading text-3xl font-extrabold text-navy-black">{nextEvent.title}</h2>
          <div className="mt-6 grid gap-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:grid-cols-2">
            <div>
              <p className="text-sm text-slate">{nextEvent.dateLabel}</p>
              <p className="text-sm text-slate">{nextEvent.time}</p>
              <p className="text-sm text-slate">{nextEvent.location}</p>
              <p className="mt-4 text-sm leading-relaxed text-slate">{nextEvent.description}</p>
            </div>
            <ul className="space-y-3">
              {nextEvent.learn.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-slate">
                  <span className="mt-0.5 text-navy-black">✦</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionLabel>Event Formats</SectionLabel>
          <h2 className="font-heading text-3xl font-extrabold text-navy-black">How We Meet</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {[
              {
                title: "Monthly Meetups",
                blurb: "In-person, every month — open discussion, local speakers, and networking.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                    <rect x="3" y="5" width="18" height="16" rx="2" />
                    <line x1="3" y1="9.5" x2="21" y2="9.5" />
                    <line x1="8" y1="3" x2="8" y2="7" />
                    <line x1="16" y1="3" x2="16" y2="7" />
                  </svg>
                ),
              },
              {
                title: "Remote Spotlights",
                blurb: "A handful of monthly slots feature a 20–30 min remote Q&A with a national guest.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                    <rect x="3" y="6" width="13" height="12" rx="2" />
                    <path d="M16 10.5l5-3v9l-5-3z" />
                  </svg>
                ),
              },
              {
                title: "Flagship Events",
                blurb: "2–3 marquee events a year with our biggest speakers and widest audience.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                    <path d="M12 3.5l2.6 5.3 5.9.8-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8-4.3-4.1 5.9-.8z" />
                  </svg>
                ),
              },
            ].map((f) => (
              <div key={f.title} className="rounded-2xl border border-slate-200 bg-cloud p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
                  {f.icon}
                </div>
                <p className="font-heading text-lg font-bold text-navy-black">{f.title}</p>
                <p className="mt-2 text-sm text-slate">{f.blurb}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cloud py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionLabel>Track Record</SectionLabel>
          <h2 className="font-heading text-3xl font-extrabold text-navy-black">Recent Events</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pastEvents.map((e) => (
              <EventCard key={e.title} date={e.date} title={e.title} blurb={e.blurb} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
