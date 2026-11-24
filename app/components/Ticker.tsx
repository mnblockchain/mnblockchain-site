import { nextEvent } from "@/data/content";

const message = `Next event: ${nextEvent.title} - ${nextEvent.dateLabel} · ${nextEvent.time} · ${nextEvent.location}`;
const items = Array.from({ length: 6 }, () => message);

export default function Ticker() {
  return (
    <div className="overflow-hidden whitespace-nowrap bg-brand-blue py-2 text-navy-black">
      <div className="animate-ticker flex w-max text-xs font-bold uppercase tracking-wide">
        {[...items, ...items].map((text, i) => (
          <span key={i} className="inline-flex items-center gap-3 pr-12">
            <span aria-hidden>✦</span>
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
