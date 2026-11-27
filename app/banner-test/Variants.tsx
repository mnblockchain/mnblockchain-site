"use client";

import { useEffect, useRef } from "react";

const text =
  "✦  Next event: MNblockchain Holiday Party - Tuesday, December 15, 2026 · 5:30 PM - 9:00 PM CT · Vandalia Tower";
const bar = "flex overflow-hidden whitespace-nowrap bg-brand-blue py-2 text-xs font-bold uppercase tracking-wide text-navy-black";

function Group() {
  return (
    <>
      <span className="pr-12">{text}</span>
      <span className="pr-12">{text}</span>
      <span className="pr-12">{text}</span>
    </>
  );
}

/** The approach popular marquee libraries use: two identical groups, pure CSS. */
export function Standard({ pxPerSec }: { pxPerSec: number }) {
  const first = useRef<HTMLDivElement>(null);
  const wrap = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const seconds = first.current!.offsetWidth / pxPerSec;
    wrap.current!.querySelectorAll<HTMLElement>("[data-g]").forEach((g) => {
      g.style.animation = `banner-slide ${seconds}s linear infinite`;
    });
  }, [pxPerSec]);
  return (
    <div ref={wrap} className={bar}>
      <style>{`@keyframes banner-slide { from { transform: translateX(0) } to { transform: translateX(-100%) } }`}</style>
      <div ref={first} data-g className="flex shrink-0"><Group /></div>
      <div data-g aria-hidden className="flex shrink-0"><Group /></div>
    </div>
  );
}

/** Moves exactly one physical screen pixel per screen refresh, never a fraction. */
export function PixelLocked() {
  const track = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = track.current!;
    let raf = 0;
    let step = 0;
    const tick = () => {
      const dpr = window.devicePixelRatio || 1;
      const period = Math.round((el.scrollWidth / 2) * dpr);
      step = (step + 1) % period;
      el.style.transform = `translateX(${-step / dpr}px)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);
  return (
    <div className={bar}>
      <div ref={track} className="flex w-max shrink-0"><Group /><Group /></div>
    </div>
  );
}
