import type { Metadata } from "next";
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
      <section className="bg-gradient-to-br from-brand-black-soft via-brand-black to-brand-black-soft py-20 text-center">
        <div className="mx-auto max-w-3xl px-6">
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
          <h2 className="font-heading text-3xl font-extrabold text-brand-black">{nextEvent.title}</h2>
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
                  <span className="mt-0.5 text-brand-blue-dark">✦</span>
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
          <h2 className="font-heading text-3xl font-extrabold text-brand-black">How We Meet</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {[
              {
                title: "Monthly Meetups",
                blurb: "In-person, every month — open discussion, local speakers, and networking.",
              },
              {
                title: "Remote Spotlights",
                blurb: "A handful of monthly slots feature a 20–30 min remote Q&A with a national guest.",
              },
              {
                title: "Flagship Events",
                blurb: "2–3 marquee events a year with our biggest speakers and widest audience.",
              },
            ].map((f) => (
              <div key={f.title} className="rounded-2xl border border-slate-200 bg-cloud p-6">
                <p className="font-heading text-lg font-bold text-brand-black">{f.title}</p>
                <p className="mt-2 text-sm text-slate">{f.blurb}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cloud py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionLabel>Track Record</SectionLabel>
          <h2 className="font-heading text-3xl font-extrabold text-brand-black">Recent Events</h2>
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
