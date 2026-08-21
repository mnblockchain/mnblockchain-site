import Link from "next/link";

export default function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link href="/" className="font-heading text-2xl font-extrabold tracking-tight">
      <span className={dark ? "text-brand-navy" : "text-white"}>MN</span>
      <span className="text-brand-gold">blockchain</span>
    </Link>
  );
}
