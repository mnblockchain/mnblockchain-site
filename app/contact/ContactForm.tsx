"use client";

import { useActionState } from "react";
import { submitContact } from "@/actions/contact.action";

export default function ContactForm() {
  const [state, action, pending] = useActionState(submitContact, null);

  if (state?.success) {
    return (
      <div className="rounded-2xl border border-brand-gold bg-cloud p-8">
        <p className="font-heading font-bold text-brand-navy">Message received!</p>
        <p className="mt-1 text-sm text-slate">We&rsquo;ll get back to you soon.</p>
      </div>
    );
  }

  return (
    <form action={action} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-brand-navy">
            Name
          </label>
          <input
            type="text"
            name="name"
            required
            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:border-brand-navy focus:outline-none"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-brand-navy">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:border-brand-navy focus:outline-none"
          />
        </div>
      </div>
      <div>
        <label className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-brand-navy">
          Message
        </label>
        <textarea
          name="message"
          required
          rows={5}
          className="w-full resize-none rounded-xl border border-slate-300 px-4 py-3 text-sm focus:border-brand-navy focus:outline-none"
        />
      </div>
      {state?.error && <p className="text-sm text-red-600">{state.error}</p>}
      <button
        type="submit"
        disabled={pending}
        className="rounded-full bg-brand-navy px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-navy-light disabled:opacity-50"
      >
        {pending ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
