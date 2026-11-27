import { nextEvent } from "@/data/content";

/** Still announcement bar for the next event. */
export default function Ticker() {
  return (
    <div className="bg-brand-blue px-4 py-2 text-center text-xs font-bold uppercase tracking-wide text-navy-black">
      <span aria-hidden>🎄 </span>
      {nextEvent.title}
      <span className="mx-2">·</span>
      <span className="whitespace-nowrap">{nextEvent.dateLabel}</span>
      <span className="mx-2">·</span>
      <span className="whitespace-nowrap">{nextEvent.time}</span>
      <a
        href={nextEvent.registerUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="ml-3 inline-block whitespace-nowrap rounded-full bg-navy-black px-3 py-0.5 text-white hover:bg-navy-black/80"
      >
        {nextEvent.registerLabel} &rarr;
      </a>
    </div>
  );
}
