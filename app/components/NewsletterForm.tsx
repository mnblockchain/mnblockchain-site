"use client";

import { useActionState } from "react";
import { submitNewsletter } from "@/actions/contact.action";

export default function NewsletterForm() {
  const [state, action, pending] = useActionState(submitNewsletter, null);

  if (state?.success) {
    return <p className="text-sm font-semibold text-brand-blue">You're on the list — thanks!</p>;
  }

  return (
    <form action={action} className="flex flex-col gap-3 sm:flex-row">
      <input
        type="email"
        name="email"
        required
        placeholder="you@company.com"
        className="w-full rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm text-white placeholder:text-white/40 focus:border-brand-blue focus:outline-none sm:w-72"
      />
      <button
        type="submit"
        disabled={pending}
        className="rounded-full bg-brand-blue px-6 py-3 text-sm font-bold uppercase tracking-wide text-brand-black-soft transition-colors hover:bg-white disabled:opacity-50"
      >
        {pending ? "Sending…" : "Notify Me"}
      </button>
      {state?.error && <p className="text-xs text-red-300">{state.error}</p>}
    </form>
  );
}
