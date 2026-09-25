"use client";

import Script from "next/script";

// Zeffy's own snippet checks for data-zeffy-embed elements once its script
// loads and swaps in a live checkout iframe; if the script fails to load
// (blocked, offline) we fall back to a plain iframe pointed at the same form.
const ZEFFY_FORM_PATH = "/embed/ticketing/minnesota-blockchain-initiative-memberships";

function showFallback() {
  document.querySelectorAll<HTMLElement>("[data-zeffy-embed-fallback]").forEach((el) => {
    el.style.display = "block";
    el.querySelectorAll<HTMLIFrameElement>("iframe[data-zeffy-embed-src]").forEach((frame) => {
      frame.src = frame.getAttribute("data-zeffy-embed-src") || "";
    });
  });
}

export default function ZeffySignup() {
  return (
    <div>
      <div data-zeffy-embed data-form-url={ZEFFY_FORM_PATH} />
      <div data-zeffy-embed-fallback style={{ display: "none" }}>
        <div style={{ position: "relative", overflow: "hidden", height: 450, width: "100%", paddingTop: 450 }}>
          <iframe
            title="MNblockchain Membership signup, powered by Zeffy"
            style={{ position: "absolute", border: 0, top: 0, left: 0, bottom: 0, right: 0, width: "100%", height: "100%" }}
            data-zeffy-embed-src={`https://www.zeffy.com${ZEFFY_FORM_PATH}`}
            {...{ allowpaymentrequest: "true", allowtransparency: "true" }}
          />
        </div>
      </div>
      <Script src="https://www.zeffy.com/embed/v2/zeffy-embed.js" strategy="afterInteractive" onError={showFallback} />
    </div>
  );
}
