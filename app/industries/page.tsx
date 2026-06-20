import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import IndustriesGrid from "@/components/IndustriesGrid";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "CRE delivers resilient infrastructure and smart security across government, utilities, education, healthcare, telecommunications, manufacturing, commercial real estate, and residential communities.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Industries We Serve"
        title="Securing the sectors that"
        highlight="keep society running"
        subtitle="From government and utilities to healthcare and communities, CRE partners with the institutions that depend on uninterrupted, protected operations."
      />

      <IndustriesGrid showHeader={false} />

      <section className="py-16 bg-gradient-to-b from-charcoal-950 to-charcoal-900">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="font-display text-2xl md:text-4xl font-bold text-white mb-4">
            Don&apos;t see your <span className="text-gold-gradient">sector?</span>
          </h2>
          <p className="text-charcoal-300 mb-8 max-w-2xl mx-auto">
            Our solutions adapt to any environment with critical operations to
            protect. Let&apos;s talk about yours.
          </p>
          <Link href="/contact" className="btn-gold">
            Request a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
