import type { Metadata } from "next";
import { Badge, NewsCard, SectionLabel } from "../components/ui";
import { newsArticles } from "@/data/news";

export const metadata: Metadata = {
  title: "News & Articles — MNblockchain",
  description: "Recaps, updates, and stories from MNblockchain events and initiatives.",
};

export default function NewsPage() {
  const sorted = [...newsArticles].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <>
      <section className="bg-gradient-to-br from-brand-black-soft via-brand-black to-brand-black-soft py-20 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <Badge>Recaps, updates, and stories</Badge>
          <h1 className="mt-6 font-heading text-4xl font-extrabold text-white sm:text-5xl">
            News &amp; Articles
          </h1>
          <p className="mt-4 text-lg text-white/70">
            What&rsquo;s happened at MNblockchain events and initiatives, straight from the source.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionLabel>All Posts</SectionLabel>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sorted.map((a) => (
              <NewsCard
                key={a.slug}
                slug={a.slug}
                title={a.title}
                dateLabel={a.dateLabel}
                category={a.category}
                image={a.image}
                excerpt={a.excerpt}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
