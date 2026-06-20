import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { ABOUT, LEADERSHIP, COMPANY_INTRO } from "@/lib/content";

export const metadata: Metadata = {
  title: "About CRE",
  description:
    "Continental Renewable Energy is a technology-driven infrastructure company advancing resilience, security, and sustainable development through integrated energy and smart technology solutions.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About CRE"
        title="Building resilient"
        highlight="infrastructure"
        subtitle="Advancing resilience, security, and sustainable development through integrated energy and smart technology solutions."
      />

      <section className="py-16 md:py-24 bg-charcoal-950">
        <div className="max-w-5xl mx-auto px-4 md:px-8 space-y-12">
          <Block title="Who We Are">
            <p>{ABOUT.whoWeAre}</p>
            <p className="mt-4">{COMPANY_INTRO}</p>
          </Block>

          <div className="grid md:grid-cols-2 gap-6">
            <Card title="Mission" accent>
              {ABOUT.mission}
            </Card>
            <Card title="Vision" accent>
              {ABOUT.vision}
            </Card>
          </div>

          <Block title="Leadership">
            <div className="card-dark p-6 md:p-8 flex flex-col sm:flex-row gap-6 items-start">
              <div className="w-20 h-20 flex-shrink-0 rounded-2xl bg-gold/10 border border-gold/30 flex items-center justify-center text-3xl">
                👤
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-white">
                  {LEADERSHIP.name}
                </h3>
                <div className="text-sm text-gold mb-3">{LEADERSHIP.role}</div>
                <p className="text-charcoal-300 leading-relaxed">
                  {LEADERSHIP.bio}
                </p>
              </div>
            </div>
          </Block>

          <div className="grid md:grid-cols-2 gap-6">
            <Card title="Corporate Governance">{ABOUT.governance}</Card>
            <Card title="Strategic Partnerships">{ABOUT.partnerships}</Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-charcoal-950 to-charcoal-900">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="font-display text-2xl md:text-4xl font-bold text-white mb-4">
            Partner with <span className="text-gold-gradient">CRE</span>
          </h2>
          <p className="text-charcoal-300 mb-8 max-w-2xl mx-auto">
            Let&apos;s build smarter, safer, and more resilient infrastructure
            for the future.
          </p>
          <a href="/contact" className="btn-gold">
            Request a Consultation
          </a>
        </div>
      </section>
    </>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
        {title}
      </h2>
      <div className="text-charcoal-300 leading-relaxed text-base md:text-lg">
        {children}
      </div>
    </div>
  );
}

function Card({
  title,
  children,
  accent,
}: {
  title: string;
  children: React.ReactNode;
  accent?: boolean;
}) {
  return (
    <div className={`card-dark p-6 md:p-7 ${accent ? "border-gold/30" : ""}`}>
      <div className="text-gold text-xs font-semibold tracking-widest uppercase mb-2">
        {title}
      </div>
      <p className="text-white text-lg md:text-xl font-display leading-relaxed">
        {children}
      </p>
    </div>
  );
}
