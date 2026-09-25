import Link from "next/link";
import Logo from "./Logo";
import NewsletterForm from "./NewsletterForm";

const quickLinks = [
  { label: "About", href: "/about" },
  { label: "Events", href: "/events" },
  { label: "Sponsors", href: "/sponsors" },
  { label: "Membership", href: "/membership" },
  { label: "Policy", href: "/policy" },
  { label: "News", href: "/news" },
  { label: "Get Involved", href: "/get-involved" },
  { label: "Contact", href: "/contact" },
];

const social = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/mnblockchain/",
    path: "M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.11 20.45H3.56V9h3.55v11.45z",
  },
  {
    label: "X",
    href: "https://twitter.com/mnblockchain/",
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@mnblockchain",
    path: "M23.498 6.186a2.997 2.997 0 0 0-2.113-2.12C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.385.521A2.997 2.997 0 0 0 .502 6.186 31.26 31.26 0 0 0 0 12a31.26 31.26 0 0 0 .502 5.814 2.997 2.997 0 0 0 2.113 2.12c1.88.521 9.385.521 9.385.521s7.505 0 9.385-.521a2.997 2.997 0 0 0 2.113-2.12A31.26 31.26 0 0 0 24 12a31.26 31.26 0 0 0-.502-5.814zM9.545 15.568V8.432L15.818 12z",
  },
];

export default function Footer() {
  return (
    <footer className="bg-navy-black">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              Building community and industry in blockchain &amp; web3 across Minnesota - education,
              events, and policy.
            </p>
            <div className="mt-6 flex gap-3">
              {social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-bitcoin-orange text-navy-black transition-colors hover:bg-bitcoin-orange/80"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-white/40">
              Explore
            </p>
            <nav className="grid grid-cols-2 gap-x-6 gap-y-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-semibold text-white/70 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-white/40">
              Get Notified
            </p>
            <p className="mb-4 text-sm leading-relaxed text-white/60">
              Free events, expert speakers, and real networking - straight to your inbox.
            </p>
            <NewsletterForm />
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} MNblockchain. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-xs text-white/40 hover:text-white">
              Privacy
            </Link>
            <a href="mailto:connect@mnblockchain.org" className="text-xs text-white/40 hover:text-white">
              connect@mnblockchain.org
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
