"use client";

import { useActionState } from "react";
import { submitNewsletter } from "@/actions/contact.action";
import BotTrap from "./BotTrap";

export default function NewsletterForm() {
  const [state, action, pending] = useActionState(submitNewsletter, null);

  if (state?.success) {
    return <p className="text-sm font-semibold text-brand-blue">You're on the list - thanks!</p>;
  }

  return (
    <form action={action} className="flex flex-col gap-3 sm:flex-row">
      <BotTrap />
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
        className="rounded-full bg-bitcoin-orange px-6 py-3 text-sm font-bold uppercase tracking-wide text-navy-black transition-colors hover:bg-bitcoin-orange/80 disabled:opacity-50"
      >
        {pending ? "Subscribing…" : "Subscribe"}
      </button>
      {state?.error && <p className="text-xs text-red-300">{state.error}</p>}
    </form>
  );
}
