import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { INSIGHTS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "News and technology articles from Continental Renewable Energy on infrastructure resilience, smart security, and sustainable energy.",
  alternates: { canonical: "/insights" },
};

export default function InsightsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Insights"
        title="News &"
        highlight="Technology Articles"
        subtitle="Perspectives on infrastructure resilience, intelligent security, and the future of sustainable energy."
      />

      <section className="py-16 md:py-24 bg-charcoal-950">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INSIGHTS.map((post) => (
              <article key={post.title} className="card-dark p-6 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold">
                    {post.category}
                  </span>
                  <span className="text-xs text-charcoal-400">{post.date}</span>
                </div>
                <h2 className="font-display text-lg font-bold text-white mb-3 leading-snug">
                  {post.title}
                </h2>
                <p className="text-sm text-charcoal-300 leading-relaxed flex-1">
                  {post.excerpt}
                </p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-gold/70">
                  Coming soon
                </span>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-charcoal-400 text-sm">
              More insights are on the way. Want to be notified or contribute?{" "}
              <Link href="/contact" className="text-gold hover:underline">
                Get in touch
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
