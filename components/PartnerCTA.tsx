"use client";

import { useUI } from "./UIContext";

export default function PartnerCTA() {
  const { openPartner: onJoin } = useUI();
  return (
    <section
      id="partners"
      className="relative py-20 md:py-24 bg-charcoal-950 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gold-gradient opacity-[0.07]" />
      <div className="relative max-w-6xl mx-auto px-4 md:px-8">
        <div className="rounded-3xl border border-gold/30 bg-gradient-to-br from-charcoal-900 to-charcoal-950 p-8 md:p-14 overflow-hidden relative">
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-gold/20 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-gold/10 blur-3xl" />

          <div className="relative grid lg:grid-cols-5 gap-10 items-center">
            <div className="lg:col-span-3">
              <span className="text-gold text-sm font-semibold tracking-widest uppercase">
                Partner Program
              </span>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-white mt-2 mb-4">
                Build a business around{" "}
                <span className="text-gold-gradient">clean energy.</span>
              </h2>
              <p className="text-charcoal-200 text-base md:text-lg max-w-xl mb-6">
                Join the {"Continental Renewable Energy"} partner network. Earn
                commissions on every install, get exclusive trade pricing, and
                access engineering support across all 36 states.
              </p>

              <ul className="grid sm:grid-cols-2 gap-3 mb-8">
                {[
                  "Tiered margins up to 22%",
                  "Co-branded marketing kits",
                  "Free technical training",
                  "Lead routing in your LGA",
                ].map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-charcoal-100">
                    <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12l5 5L20 7" />
                    </svg>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <button onClick={onJoin} className="btn-gold text-base">
                Apply to Become a Partner
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6l6 6-6 6" />
                </svg>
              </button>
            </div>

            <div className="lg:col-span-2">
              <div className="grid grid-cols-2 gap-4">
                <TierBadge name="Bronze" margin="10%" />
                <TierBadge name="Silver" margin="14%" />
                <TierBadge name="Gold" margin="18%" highlight />
                <TierBadge name="Platinum" margin="22%" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TierBadge({
  name,
  margin,
  highlight,
}: {
  name: string;
  margin: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`p-5 rounded-2xl border text-center ${
        highlight
          ? "bg-gold-gradient text-charcoal-950 border-gold animate-glow"
          : "bg-charcoal-900/80 border-charcoal-700 text-white"
      }`}
    >
      <div className="text-xs uppercase tracking-widest opacity-80">Tier</div>
      <div className="font-display font-bold text-2xl mt-1">{name}</div>
      <div className={`text-sm mt-2 ${highlight ? "text-charcoal-900" : "text-gold"}`}>
        Earn up to {margin}
      </div>
    </div>
  );
}
