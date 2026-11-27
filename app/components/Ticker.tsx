"use client";

import { useEffect, useRef } from "react";
import { nextEvent } from "@/data/content";

// Keep the message short so the moving strip stays small.
const venue = nextEvent.location.split(",")[0];
const message = `Next event: ${nextEvent.title} - ${nextEvent.dateLabel} · ${nextEvent.time} · ${venue}`;
const items = Array.from({ length: 3 }, () => message);

export default function Ticker() {
  const track = useRef<HTMLDivElement>(null);

  // Move exactly one physical screen pixel per screen refresh, never a
  // fraction. This tested smoother than CSS animation (Nov 2026), which
  // stuttered. Don't switch back without testing on a Retina screen. Speed
  // therefore follows the screen's pixel density and refresh rate.
  useEffect(() => {
    const el = track.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    let step = 0;
    const tick = () => {
      const dpr = window.devicePixelRatio || 1;
      const period = Math.round((el.scrollWidth / 2) * dpr); // one copy
      step = (step + 1) % period;
      el.style.transform = `translateX(${-step / dpr}px)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="overflow-hidden whitespace-nowrap bg-brand-blue py-2 text-navy-black">
      <div ref={track} className="flex w-max text-xs font-bold uppercase tracking-wide">
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
