import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy - MNblockchain",
  description: "How MNblockchain handles the information you share through this website.",
};

const sections = [
  {
    title: "What we collect",
    body: [
      "When you use a form on this site, we receive what you type into it: your name, email address, organization (for sponsor inquiries), and your message. When you subscribe to our newsletter, we receive your email address.",
      "We do not ask for payment details on this site. Registrations for events happen on Eventbrite, and membership payments happen through PayPal, Venmo, or Coinbase, each under their own privacy policies.",
    ],
  },
  {
    title: "How we use it",
    body: [
      "We use your information to reply to your message, follow up on sponsorship or membership inquiries, and send you our newsletter if you signed up for it. Form submissions are delivered by email to our team through Resend, our email delivery service.",
    ],
  },
  {
    title: "Who sees it",
    body: [
      "Only our board, committee members, and volunteers who handle these inquiries. We do not sell your information. We share it only with the service providers that run this website and our email (such as Vercel for hosting, Resend for email delivery, and our newsletter provider), and only as needed to operate them.",
    ],
  },
  {
    title: "Your choices",
    body: [
      "You can unsubscribe from our newsletter at any time using the link at the bottom of every email. To ask us to correct or delete information you've sent us, email connect@mnblockchain.org.",
    ],
  },
  {
    title: "Questions",
    body: ["Email connect@mnblockchain.org and we'll get back to you."],
  },
];

export default function PrivacyPage() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-3xl px-6">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-navy-black">Legal</p>
        <h1 className="font-heading text-4xl font-extrabold text-navy-black">Privacy</h1>
        <p className="mt-4 text-slate">
          MNblockchain is a volunteer-run Minnesota nonprofit. This page explains, in plain language,
          what happens to the information you share on this website.
        </p>
        <div className="mt-10 space-y-8">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="font-heading text-xl font-bold text-navy-black">{s.title}</h2>
              {s.body.map((p) => (
                <p key={p} className="mt-3 leading-relaxed text-slate">
                  {p}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
