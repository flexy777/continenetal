import Link from "next/link";
import { SERVICE_AREAS } from "@/lib/content";

export default function ServicesOverview() {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-charcoal-950 via-charcoal-900 to-charcoal-950 overflow-hidden">
      <div className="absolute top-1/2 -left-32 w-96 h-96 rounded-full bg-gold/10 blur-3xl" />
      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <span className="text-gold text-sm font-semibold tracking-widest uppercase">
            What We Do
          </span>
          <h2 className="section-title text-white">
            Three integrated <span className="text-gold-gradient">service areas</span>
          </h2>
          <p className="section-subtitle">
            From resilient power to intelligent security and digital engineering,
            delivered as one coordinated solution.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {SERVICE_AREAS.map((s) => (
            <Link
              key={s.slug}
              href={`/services#${s.slug}`}
              className="card-dark p-7 group flex flex-col"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="w-14 h-14 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-2xl">
                  {s.icon}
                </div>
                <span className="font-display text-3xl font-bold text-charcoal-700 group-hover:text-gold/40 transition">
                  {s.number}
                </span>
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-2">
                {s.title}
              </h3>
              <p className="text-sm text-gold mb-4">{s.tagline}</p>
              <ul className="space-y-1.5 mb-5">
                {s.services.slice(0, 4).map((item) => (
                  <li key={item} className="text-sm text-charcoal-300 flex items-start gap-2">
                    <span className="text-gold mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
              <span className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-gold">
                Learn more
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6l6 6-6 6" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
