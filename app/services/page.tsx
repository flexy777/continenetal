import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { SERVICE_AREAS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "CRE's three integrated service areas: Energy Resilience Solutions, Smart Security & Infrastructure Protection, and Digital Infrastructure & Technology Advisory.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Services"
        title="Resilient energy."
        highlight="Smart security."
        subtitle="Three integrated service areas that protect operations, harden infrastructure, and engineer the systems of tomorrow."
      />

      <section className="py-16 md:py-24 bg-charcoal-950">
        <div className="max-w-6xl mx-auto px-4 md:px-8 space-y-8">
          {SERVICE_AREAS.map((s) => (
            <div
              key={s.slug}
              id={s.slug}
              className="card-dark p-7 md:p-10 scroll-mt-28"
            >
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-2xl bg-gold/10 border border-gold/30 flex items-center justify-center text-3xl">
                      {s.icon}
                    </div>
                    <span className="font-display text-4xl font-bold text-charcoal-700">
                      {s.number}
                    </span>
                  </div>
                  <h2 className="font-display text-2xl font-bold text-white mb-2">
                    {s.title}
                  </h2>
                  <p className="text-gold text-sm font-medium">{s.tagline}</p>
                </div>

                <div className="lg:col-span-2">
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {s.services.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 p-3 rounded-lg bg-charcoal-800/50 border border-charcoal-700/60"
                      >
                        <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12l5 5L20 7" />
                        </svg>
                        <span className="text-sm text-charcoal-100">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-charcoal-950 to-charcoal-900">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="font-display text-2xl md:text-4xl font-bold text-white mb-4">
            Need a tailored <span className="text-gold-gradient">solution?</span>
          </h2>
          <p className="text-charcoal-300 mb-8 max-w-2xl mx-auto">
            Tell us about your infrastructure, security, and energy priorities,
            we&apos;ll scope the right approach.
          </p>
          <Link href="/contact" className="btn-gold">
            Start a Project Inquiry
          </Link>
        </div>
      </section>
    </>
  );
}
