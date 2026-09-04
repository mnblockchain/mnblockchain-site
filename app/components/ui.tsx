import Image from "next/image";
import Link from "next/link";
import { Fragment, ReactNode } from "react";

/**
 * Renders a string containing markdown-style [text](url) links as React
 * nodes, with plain surrounding text preserved. Used for news article body
 * copy, where inline links (sources, videos, sponsor sites) are part of the
 * original published content. All links are external, so they open in a
 * new tab.
 */
export function renderRichText(text: string): ReactNode {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part, i) => {
    const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (!match) return <Fragment key={i}>{part}</Fragment>;
    const [, linkText, href] = match;
    return (
      <a
        key={i}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold text-brand-blue-dark underline decoration-brand-blue decoration-2 underline-offset-2 hover:text-brand-blue"
      >
        {linkText}
      </a>
    );
  });
}

export function Badge({
  children,
  accent = "blue",
}: {
  children: ReactNode;
  /** "orange" is reserved for policy/legislative content per brand standards. */
  accent?: "blue" | "orange";
}) {
  const classes =
    accent === "orange"
      ? "border-brand-orange/40 bg-brand-orange/10 text-brand-orange"
      : "border-brand-blue/40 bg-brand-blue/10 text-brand-blue";
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-bold uppercase tracking-widest ${classes}`}
    >
      {children}
    </span>
  );
}

export function SectionLabel({
  children,
  accent = "blue",
}: {
  children: ReactNode;
  accent?: "blue" | "orange";
}) {
  return (
    <p
      className={`mb-3 text-xs font-bold uppercase tracking-[0.25em] ${
        accent === "orange" ? "text-brand-orange" : "text-brand-blue-dark"
      }`}
    >
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
      className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-blue px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-brand-black-soft transition-colors hover:bg-white"
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
          : "border-brand-black/30 text-brand-black hover:border-brand-black"
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
      <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-brand-black/10 text-2xl font-bold text-brand-black">
        {name
          .split(" ")
          .map((p) => p[0])
          .join("")
          .slice(0, 2)}
      </div>
      <p className="font-heading font-bold text-brand-black">{name}</p>
      <p className="mt-1 text-sm text-slate">{title}</p>
    </div>
  );
}

export function TeamCard({
  name,
  role,
  linkedin,
  photo,
}: {
  name: string;
  role: string;
  linkedin: string;
  photo?: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md">
      {photo ? (
        <Image
          src={photo}
          alt={name}
          width={200}
          height={200}
          className="mx-auto mb-4 h-40 w-40 rounded-2xl object-cover"
        />
      ) : (
        <div className="mx-auto mb-4 flex h-40 w-40 items-center justify-center rounded-2xl bg-brand-black text-4xl font-bold text-white">
          {name
            .split(" ")
            .map((p) => p[0])
            .filter((c) => /[A-Za-z]/.test(c))
            .slice(0, 2)
            .join("")}
        </div>
      )}
      <p className="font-heading font-bold text-brand-black">{name}</p>
      <p className="mt-1 text-xs font-bold uppercase tracking-widest text-brand-blue-dark">
        {role}
      </p>
      <a
        href={linkedin}
        aria-label={`${name} on LinkedIn`}
        className="mt-3 inline-flex h-8 w-8 items-center justify-center rounded-md bg-brand-blue text-brand-black-soft transition-colors hover:bg-brand-blue-dark"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
          <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.11 20.45H3.56V9h3.55v11.45z" />
        </svg>
      </a>
    </div>
  );
}

export function SponsorCard({
  name,
  blurb,
  logo,
}: {
  name: string;
  blurb: string;
  logo?: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      {logo ? (
        <div className="relative mb-4 h-12 w-full">
          <Image src={logo} alt={name} fill sizes="200px" className="object-contain object-left" />
        </div>
      ) : (
        <p className="font-heading text-lg font-bold text-brand-black">{name}</p>
      )}
      <p className="mt-2 text-sm text-slate">{blurb}</p>
      <Link
        href="/sponsors"
        className="mt-4 inline-block text-sm font-bold text-brand-black underline decoration-brand-blue decoration-2 underline-offset-4"
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
      <p className="text-xs font-bold uppercase tracking-widest text-brand-blue-dark">{date}</p>
      <p className="mt-2 font-heading text-lg font-bold text-brand-black">{title}</p>
      <p className="mt-2 text-sm text-slate">{blurb}</p>
    </div>
  );
}

export function NewsCard({
  slug,
  title,
  dateLabel,
  category,
  image,
  excerpt,
}: {
  slug: string;
  title: string;
  dateLabel: string;
  category: string;
  image: string;
  excerpt: string;
}) {
  return (
    <Link
      href={`/news/${slug}`}
      className="group block overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <p className="text-xs font-bold uppercase tracking-widest text-brand-blue-dark">
          {dateLabel} · {category}
        </p>
        <p className="mt-2 font-heading font-bold leading-snug text-brand-black">{title}</p>
        <p className="mt-2 text-sm text-slate">{excerpt}</p>
      </div>
    </Link>
  );
}
