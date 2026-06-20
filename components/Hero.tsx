"use client";

import Link from "next/link";
import { useUI } from "./UIContext";

export default function Hero() {
  const { openPartner } = useUI();

  return (
    <section
      id="home"
      className="hero-bg relative overflow-hidden pt-32 md:pt-40 pb-16 md:pb-24"
    >
      <div className="solar-glow" style={{ top: "-100px", right: "-100px" }} />
      <div className="solar-glow" style={{ bottom: "-200px", left: "-150px" }} />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div className="animate-slide-up">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-semibold tracking-wider uppercase mb-5">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            Critical Infrastructure Resilience &amp; Smart Security
          </span>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-white mb-5">
            Sun Powered. <br />
            <span className="text-gold-gradient">Future Secured.</span>
          </h1>

          <p className="text-charcoal-200 text-base md:text-lg leading-relaxed max-w-xl mb-8">
            Continental Renewable Energy secures the systems that power modern
            society, integrating resilient energy infrastructure, intelligent
            security, and advanced engineering for governments, industries, and
            institutions.
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            <Link href="/contact" className="btn-gold">
              Request a Consultation
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6l6 6-6 6" />
              </svg>
            </Link>
            <Link href="/services" className="btn-outline-gold">
              Explore Our Services
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-4 max-w-md">
            <Stat value="3" label="Solution Pillars" />
            <Stat value="8+" label="Industries Served" />
            <Stat value="24/7" label="Monitoring & Support" />
          </div>
        </div>

        <div className="relative animate-fade-in">
          <div className="relative aspect-square max-w-lg mx-auto">
            <div className="absolute inset-0 bg-gold-gradient rounded-full blur-3xl opacity-20" />
            <div className="relative w-full h-full rounded-3xl border border-gold/30 bg-charcoal-900/60 backdrop-blur-sm p-8 flex flex-col items-center justify-center overflow-hidden">
              <div className="absolute -top-20 -right-20 w-60 h-60 bg-gold-gradient rounded-full opacity-30 blur-2xl" />

              <div className="relative text-center">
                <div className="text-7xl md:text-8xl mb-2">🛡️</div>
                <div className="font-display text-2xl md:text-3xl font-bold text-white mb-1">
                  Resilient by Design
                </div>
                <div className="text-gold text-sm tracking-widest uppercase">
                  Energy · Security · Engineering
                </div>
              </div>

              <div className="relative grid grid-cols-2 gap-3 mt-8 w-full">
                <Feature icon="⚡" label="Energy Resilience" />
                <Feature icon="📹" label="Smart Security" />
                <Feature icon="🔋" label="Storage & BESS" />
                <Feature icon="🧠" label="Tech Advisory" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-2xl md:text-3xl font-display font-bold text-gold">
        {value}
      </div>
      <div className="text-xs md:text-sm text-charcoal-300 mt-1">{label}</div>
    </div>
  );
}

function Feature({ icon, label }: { icon: string; label: string }) {
  return (
    <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-charcoal-800/80 border border-charcoal-700">
      <span className="text-xl">{icon}</span>
      <span className="text-xs md:text-sm text-charcoal-100 font-medium">{label}</span>
    </div>
  );
}
