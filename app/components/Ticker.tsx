import { nextEvent } from "@/data/content";

const message = `Next event: ${nextEvent.title} — ${nextEvent.dateLabel} · ${nextEvent.location}`;
const items = Array.from({ length: 6 }, () => message);

export default function Ticker() {
  return (
    <div className="overflow-hidden whitespace-nowrap bg-brand-gold py-2 text-brand-navy-dark">
      <div className="animate-ticker inline-flex w-max gap-12 text-xs font-bold uppercase tracking-wide">
        {[...items, ...items].map((text, i) => (
          <span key={i} className="inline-flex items-center gap-3">
            <span aria-hidden>✦</span>
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
