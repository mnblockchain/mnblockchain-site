import Link from "next/link";
import { ReactNode } from "react";

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-brand-gold/40 bg-brand-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-gold">
      {children}
    </span>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-brand-gold-dark">
      {children}
    </p>
  );
}

export function PrimaryButton({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-gold px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-brand-navy-dark transition-colors hover:bg-white"
    >
      {children}
    </Link>
  );
}

export function OutlineButton({
  href,
  children,
  dark = true,
}: {
  href: string;
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full border-2 px-7 py-3.5 text-sm font-bold uppercase tracking-wide transition-colors ${
        dark
          ? "border-white/30 text-white hover:border-white"
          : "border-brand-navy/30 text-brand-navy hover:border-brand-navy"
      }`}
    >
      {children}
    </Link>
  );
}

export function StatBlock({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <p className="font-heading text-4xl font-extrabold text-white sm:text-5xl">{value}</p>
      <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-white/60">
        {label}
      </p>
    </div>
  );
}

export function SpeakerCard({ name, title }: { name: string; title: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md">
      <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-brand-navy/10 text-2xl font-bold text-brand-navy">
        {name
          .split(" ")
          .map((p) => p[0])
          .join("")
          .slice(0, 2)}
      </div>
      <p className="font-heading font-bold text-brand-navy">{name}</p>
      <p className="mt-1 text-sm text-slate">{title}</p>
    </div>
  );
}

export function SponsorCard({ name, blurb }: { name: string; blurb: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <p className="font-heading text-lg font-bold text-brand-navy">{name}</p>
      <p className="mt-2 text-sm text-slate">{blurb}</p>
      <Link
        href="/sponsors"
        className="mt-4 inline-block text-sm font-bold text-brand-navy underline decoration-brand-gold decoration-2 underline-offset-4"
      >
        Learn More →
      </Link>
    </div>
  );
}

export function EventCard({
  date,
  title,
  blurb,
}: {
  date: string;
  title: string;
  blurb: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <p className="text-xs font-bold uppercase tracking-widest text-brand-gold-dark">{date}</p>
      <p className="mt-2 font-heading text-lg font-bold text-brand-navy">{title}</p>
      <p className="mt-2 text-sm text-slate">{blurb}</p>
    </div>
  );
}
