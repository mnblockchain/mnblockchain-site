import type { Metadata } from "next";
import { PixelLocked, Standard } from "./Variants";

export const metadata: Metadata = { title: "Banner test", robots: { index: false, follow: false } };

export default function BannerTest() {
  const label = "mx-auto max-w-3xl px-6 pb-2 pt-10 font-heading text-lg font-bold";
  return (
    <div className="pb-20">
      <h2 className={label}>A - Standard method, faster</h2>
      <Standard pxPerSec={100} />
      <h2 className={label}>B - Standard method, slower</h2>
      <Standard pxPerSec={40} />
      <h2 className={label}>C - Locked to your screen&rsquo;s pixels</h2>
      <PixelLocked />
    </div>
  );
}
