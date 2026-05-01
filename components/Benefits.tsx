const BENEFITS = [
  {
    icon: "⚡",
    title: "Always-On Power",
    text: "Hybrid solar + lithium storage means uninterrupted electricity, day or night, sunny or cloudy.",
  },
  {
    icon: "💰",
    title: "Cut Your Bills",
    text: "Slash diesel, fuel and PHCN costs by up to 80%. Most systems pay for themselves in 2–3 years.",
  },
  {
    icon: "🛡️",
    title: "Built to Last",
    text: "Tier-1 panels with 25-year warranties, lithium batteries rated for 6,000+ cycles. Engineered for Nigerian conditions.",
  },
  {
    icon: "🛠️",
    title: "Turnkey Installation",
    text: "Survey, design, supply, install and commission — handled end-to-end by our certified engineers.",
  },
  {
    icon: "📱",
    title: "Smart Monitoring",
    text: "Track production, battery state and consumption from your phone. We're notified before you are.",
  },
  {
    icon: "🤝",
    title: "Lifetime Support",
    text: "A real team you can call. On-site service in Lagos within 24 hours and nationwide partner coverage.",
  },
  {
    icon: "🌍",
    title: "Clean & Quiet",
    text: "Zero emissions, zero noise. The same generator silence everyone wishes for, with none of the tradeoffs.",
  },
  {
    icon: "💳",
    title: "Flexible Payment",
    text: "Pay in stages or finance through our partner banks. Get powered now, pay over time.",
  },
];

export default function Benefits() {
  return (
    <section
      id="benefits"
      className="relative py-20 md:py-28 bg-gradient-to-b from-charcoal-950 via-charcoal-900 to-charcoal-950 overflow-hidden"
    >
      <div className="absolute top-1/2 -left-32 w-96 h-96 rounded-full bg-gold/10 blur-3xl" />
      <div className="absolute bottom-0 -right-32 w-96 h-96 rounded-full bg-gold/5 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <span className="text-gold text-sm font-semibold tracking-widest uppercase">
            Why Choose Us
          </span>
          <h2 className="section-title text-white">
            More Than Just <span className="text-gold-gradient">Solar Panels</span>
          </h2>
          <p className="section-subtitle">
            We deliver dependable energy systems backed by people who answer
            their phones. Every install is a long-term promise.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {BENEFITS.map((b) => (
            <div
              key={b.title}
              className="card-dark p-6 group"
            >
              <div className="w-14 h-14 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-2xl mb-4 group-hover:bg-gold/20 transition">
                {b.icon}
              </div>
              <h3 className="font-display font-bold text-lg text-white mb-2">
                {b.title}
              </h3>
              <p className="text-sm text-charcoal-300 leading-relaxed">
                {b.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
