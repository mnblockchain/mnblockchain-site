import Link from "next/link";
import Logo from "./Logo";
import NewsletterForm from "./NewsletterForm";

const quickLinks = [
  { label: "About", href: "/about" },
  { label: "Events", href: "/events" },
  { label: "Speakers", href: "/speakers" },
  { label: "Sponsors", href: "/sponsors" },
  { label: "Membership", href: "/membership" },
  { label: "Policy", href: "/policy" },
  { label: "Contact", href: "/contact" },
];

const social = [
  { label: "LinkedIn", href: "#" },
  { label: "X", href: "#" },
  { label: "YouTube", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-black-soft">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              Building community and industry in blockchain &amp; web3 across Minnesota — education,
              events, and policy.
            </p>
            <div className="mt-6 flex gap-4">
              {social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="text-xs font-bold uppercase tracking-widest text-white/50 hover:text-white"
                >
                  {s.label}
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
              Free events, expert speakers, and real networking — straight to your inbox.
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
          <p className="text-xs text-white/40">connect@mnblockchain.org</p>
        </div>
      </div>
    </footer>
  );
}
