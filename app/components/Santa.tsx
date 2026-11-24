"use client";

import { useEffect, useState } from "react";

/** A small Santa that flies across at random intervals. Decorative only. */
export default function Santa() {
  const [flight, setFlight] = useState<{ id: number; top: number; reverse: boolean } | null>(null);

  useEffect(() => {
    let id = 0;
    let timer: ReturnType<typeof setTimeout>;
    const schedule = (first: boolean) => {
      timer = setTimeout(
        () => {
          id += 1;
          setFlight({ id, top: 8 + Math.random() * 60, reverse: Math.random() < 0.5 });
          schedule(false);
        },
        first ? 3000 + Math.random() * 5000 : 14000 + Math.random() * 16000,
      );
    };
    schedule(true);
    return () => clearTimeout(timer);
  }, []);

  if (!flight) return null;
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden [container-type:inline-size]">
      <span
        key={flight.id}
        className={`animate-santa absolute left-0 whitespace-nowrap text-2xl ${flight.reverse ? "animate-santa-rev" : ""}`}
        style={{ top: `${flight.top}%` }}
      >
        <span className="inline-block" style={flight.reverse ? undefined : { transform: "scaleX(-1)" }}>🦌🛷🎅</span>
      </span>
    </div>
  );
}
