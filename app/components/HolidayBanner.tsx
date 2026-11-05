import { nextEvent } from "@/data/content";
import Countdown from "./Countdown";

const flakes = Array.from({ length: 18 }, (_, i) => ({
  left: `${(i * 37) % 100}%`,
  delay: `${(i * 0.7) % 8}s`,
  duration: `${7 + ((i * 3) % 6)}s`,
  size: 10 + ((i * 5) % 12),
}));

/** Falling snow, purely decorative. */
export function Snow() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {flakes.map((f, i) => (
        <span
          key={i}
          className="animate-snowfall absolute -top-6 text-white/70"
          style={{ left: f.left, animationDelay: f.delay, animationDuration: f.duration, fontSize: f.size }}
        >
          ❄
        </span>
      ))}
    </div>
  );
}

/** Countdown when the date is set; festive "save the date" until then. */
export default function HolidayBanner() {
  if (nextEvent.date) return <Countdown target={nextEvent.date} />;
  return (
    <div className="mx-auto max-w-xl rounded-2xl border border-white/15 bg-white/5 px-6 py-6 text-center">
      <p className="text-2xl" aria-hidden>🎄 ✨ 🎁</p>
      <p className="mt-2 font-heading text-2xl font-extrabold text-white sm:text-3xl">
        Save the Date: December 2026
      </p>
      <p className="mt-1 text-sm text-white/70">Exact date coming soon. Sign up and we&rsquo;ll tell you first.</p>
    </div>
  );
}
