"use client";

import { useEffect, useState } from "react";

function getParts(target: number) {
  const diff = Math.max(0, target - Date.now());
  const days = Math.floor(diff / 86_400_000);
  const hours = Math.floor((diff % 86_400_000) / 3_600_000);
  const minutes = Math.floor((diff % 3_600_000) / 60_000);
  const seconds = Math.floor((diff % 60_000) / 1000);
  return { days, hours, minutes, seconds };
}

export default function Countdown({ target }: { target: string }) {
  const targetMs = new Date(target).getTime();
  // Start at zero on both server and client so the initial markup matches;
  // real values are filled in after mount to avoid a hydration mismatch.
  const [parts, setParts] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    setParts(getParts(targetMs));
    const id = setInterval(() => setParts(getParts(targetMs)), 1000);
    return () => clearInterval(id);
  }, [targetMs]);

  const units: { value: number; label: string }[] = [
    { value: parts.days, label: "Days" },
    { value: parts.hours, label: "Hours" },
    { value: parts.minutes, label: "Min" },
    { value: parts.seconds, label: "Sec" },
  ];

  return (
    <div className="flex gap-3 sm:gap-4">
      {units.map((u) => (
        <div
          key={u.label}
          className="w-16 rounded-xl border border-white/15 bg-white/5 py-3 text-center sm:w-20"
        >
          <p className="font-heading text-2xl font-extrabold text-white sm:text-3xl">
            {String(u.value).padStart(2, "0")}
          </p>
          <p className="mt-0.5 text-[10px] font-bold uppercase tracking-widest text-white/60">
            {u.label}
          </p>
        </div>
      ))}
    </div>
  );
}
