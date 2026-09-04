import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { newsArticles } from "@/data/news";

export function generateStaticParams() {
  return newsArticles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = newsArticles.find((a) => a.slug === slug);
  if (!article) return {};
  return {
    title: `${article.title} — MNblockchain`,
    description: article.excerpt,
  };
}

export default async function NewsArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = newsArticles.find((a) => a.slug === slug);
  if (!article) notFound();

  return (
    <article className="bg-white py-16">
      <div className="mx-auto max-w-3xl px-6">
        <Link
          href="/news"
          className="text-sm font-bold text-brand-blue-dark underline decoration-brand-blue decoration-2 underline-offset-4"
        >
          ← All News &amp; Articles
        </Link>

        <p className="mt-6 text-xs font-bold uppercase tracking-widest text-brand-blue-dark">
          {article.dateLabel} · {article.category} · {article.author}
        </p>
        <h1 className="mt-2 font-heading text-3xl font-extrabold leading-tight text-brand-black sm:text-4xl">
          {article.title}
        </h1>

        <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl">
          <Image
            src={article.image}
            alt={article.title}
            fill
            sizes="(min-width: 768px) 768px, 100vw"
            className="object-cover"
            priority
          />
        </div>

        <div className="mt-8 space-y-5">
          {article.body.map((paragraph, i) => (
            <p key={i} className="text-base leading-relaxed text-ink">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </article>
  );
}
