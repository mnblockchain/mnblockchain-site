"use client";

import { useEffect, useRef } from "react";
import { nextEvent } from "@/data/content";

const message = `Next event: ${nextEvent.title} - ${nextEvent.dateLabel} · ${nextEvent.time} · ${nextEvent.location}`;
const items = Array.from({ length: 6 }, () => message);

const SPEED = 45; // pixels per second

export default function Ticker() {
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    let raf = 0;
    let last = performance.now();
    let x = 0;
    const tick = (now: number) => {
      // Time-based so it stays even if a frame is dropped; capped so a
      // background-tab pause doesn't cause a big jump.
      const dt = Math.min(now - last, 50) / 1000;
      last = now;
      const period = el.scrollWidth / 2; // one full copy of the items
      x = (x + SPEED * dt) % period;
      el.style.transform = `translate3d(${-x}px,0,0)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="overflow-hidden whitespace-nowrap bg-brand-blue py-2 text-navy-black">
      <div
        ref={track}
        className="flex w-max text-xs font-bold uppercase tracking-wide [backface-visibility:hidden] [will-change:transform]"
      >
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
