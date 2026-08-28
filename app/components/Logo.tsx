import Link from "next/link";

export default function Logo({ dark = false }: { dark?: boolean }) {
  // Per brand standards: "MN" is always blue; "blockchain" is black on a
  // light background or white on a dark background.
  return (
    <Link href="/" className="font-heading text-2xl font-extrabold tracking-tight">
      <span className="text-brand-blue">MN</span>
      <span className={dark ? "text-brand-black" : "text-white"}>blockchain</span>
    </Link>
  );
}
