import { nextEvent } from "@/data/content";
import Countdown from "./Countdown";
import Santa from "./Santa";

const flakes = Array.from({ length: 18 }, (_, i) => ({
  left: `${(i * 37) % 100}%`,
  delay: `${(i * 0.7) % 8}s`,
  duration: `${7 + ((i * 3) % 6)}s`,
  size: 10 + ((i * 5) % 12),
}));

const bulbColors = ["#e11d2e", "#f7931a", "#22a05a", "#3b82f6", "#facc15"];

/** String of twinkling Christmas lights along the top edge. */
function Lights() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 z-10 flex justify-between px-2">
      <div className="absolute inset-x-0 top-1 h-px bg-white/25" />
      {Array.from({ length: 28 }, (_, i) => {
        const c = bulbColors[i % bulbColors.length];
        return (
          <span
            key={i}
            className="animate-twinkle relative mt-1.5 block h-2.5 w-2 rounded-b-full"
            style={{ background: c, color: c, boxShadow: `0 0 10px 2px ${c}`, animationDelay: `${(i % 5) * 0.4}s` }}
          />
        );
      })}
    </div>
  );
}

/** Falling snow, string lights and a passing Santa, purely decorative. */
export function Snow() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <Lights />
      <Santa />
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
