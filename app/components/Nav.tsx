"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";

const links = [
  { label: "About", href: "/about" },
  { label: "Events", href: "/events" },
  { label: "Speakers", href: "/speakers" },
  { label: "Sponsors", href: "/sponsors" },
  { label: "Membership", href: "/membership" },
  { label: "Policy", href: "/policy" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-brand-black">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Logo />

        <div className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold uppercase tracking-wide text-white/80 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="rounded-full bg-brand-blue px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-brand-black-soft transition-colors hover:bg-white"
          >
            Get Involved
          </Link>
        </div>

        <button
          className="flex flex-col gap-1.5 p-2 lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 bg-white transition-all ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-6 bg-white transition-all ${open ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-white transition-all ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="flex flex-col gap-4 border-t border-white/10 px-6 py-6 lg:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm font-semibold uppercase tracking-wide text-white/80 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 inline-block w-fit rounded-full bg-brand-blue px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-brand-black-soft"
          >
            Get Involved
          </Link>
        </div>
      )}
    </header>
  );
}
