"use client";

import Script from "next/script";

// Zeffy's script only looks for [zeffy-form-link] buttons once, inside a
// DOMContentLoaded listener. A script loaded by Next can finish after that event
// has already fired, so the listener never runs and the popup silently never
// works. If that happened (no popup iframe exists yet), fire the event ourselves.
function ensureZeffyInitialized() {
  if (document.readyState === "loading") return;
  if (document.querySelector('iframe[title="Form powered and secured by Zeffy"]')) return;
  if (!document.querySelector("[zeffy-form-link]")) return;
  document.dispatchEvent(new Event("DOMContentLoaded"));
}

export default function ZeffyPopupScript() {
  return (
    <Script
      src="https://zeffy-scripts.s3.ca-central-1.amazonaws.com/embed-form-script.min.js"
      strategy="afterInteractive"
      onLoad={ensureZeffyInitialized}
    />
  );
}
