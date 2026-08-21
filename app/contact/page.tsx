import type { Metadata } from "next";
import { SectionLabel } from "../components/ui";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact — MNblockchain",
  description: "Get in touch with MNblockchain.",
};

export default function ContactPage() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-2xl px-6">
        <SectionLabel>Get in Touch</SectionLabel>
        <h1 className="font-heading text-3xl font-extrabold text-brand-navy sm:text-4xl">
          Contact MNblockchain
        </h1>
        <p className="mt-4 text-slate">
          Questions about events, membership, sponsorship, or speaking? Send us a note — we&rsquo;ll
          get back to you soon.
        </p>
        <div className="mt-8">
          <ContactForm />
        </div>
        <p className="mt-8 text-sm text-slate">
          Or email us directly at{" "}
          <a href="mailto:connect@mnblockchain.org" className="font-semibold text-brand-navy underline">
            connect@mnblockchain.org
          </a>
        </p>
      </div>
    </section>
  );
}
