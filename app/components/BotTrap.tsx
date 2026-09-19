"use client";

import { useEffect, useState } from "react";

// Hidden anti-spam inputs; checked server-side in actions/bot-check.ts.
export default function BotTrap() {
  const [startedAt, setStartedAt] = useState("");
  useEffect(() => setStartedAt(String(Date.now())), []);

  return (
    <>
      <input type="hidden" name="form_started" value={startedAt} />
      <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", height: 0, overflow: "hidden" }}>
        <label>
          Leave this field empty
          <input type="text" name="hp_field" tabIndex={-1} autoComplete="off" defaultValue="" />
        </label>
      </div>
    </>
  );
}
