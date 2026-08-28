"use client";

import { useActionState } from "react";
import { submitSponsorInquiry } from "@/actions/contact.action";
import { sponsorTiers } from "@/data/content";

export default function SponsorForm() {
  const [state, action, pending] = useActionState(submitSponsorInquiry, null);

  if (state?.success) {
    return (
      <div className="rounded-2xl border border-brand-blue bg-cloud p-8">
        <p className="font-heading font-bold text-brand-black">Thanks for reaching out!</p>
        <p className="mt-1 text-sm text-slate">We&rsquo;ll be in touch within a few business days.</p>
      </div>
    );
  }

  return (
    <form action={action} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-brand-black">
            Name
          </label>
          <input
            type="text"
            name="name"
            required
            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:border-brand-black focus:outline-none"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-brand-black">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:border-brand-black focus:outline-none"
          />
        </div>
      </div>
      <div>
        <label className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-brand-black">
          Company
        </label>
        <input
          type="text"
          name="company"
          required
          className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:border-brand-black focus:outline-none"
        />
      </div>
      <div>
        <label className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-brand-black">
          Tier of Interest
        </label>
        <select
          name="tier"
          className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:border-brand-black focus:outline-none"
        >
          <option value="">Not sure yet</option>
          {sponsorTiers.map((t) => (
            <option key={t.name} value={t.name}>
              {t.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-brand-black">
          Message
        </label>
        <textarea
          name="message"
          rows={4}
          className="w-full resize-none rounded-xl border border-slate-300 px-4 py-3 text-sm focus:border-brand-black focus:outline-none"
        />
      </div>
      {state?.error && <p className="text-sm text-red-600">{state.error}</p>}
      <button
        type="submit"
        disabled={pending}
        className="rounded-full bg-brand-black px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-blue disabled:opacity-50"
      >
        {pending ? "Sending…" : "Send Inquiry"}
      </button>
    </form>
  );
}
