import { PILLARS, COMPANY_INTRO } from "@/lib/content";

export default function Pillars() {
  return (
    <section className="relative py-20 md:py-28 bg-charcoal-950">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <span className="text-gold text-sm font-semibold tracking-widest uppercase">
            Who We Are
          </span>
          <h2 className="section-title text-white">
            Securing the systems that{" "}
            <span className="text-gold-gradient">power modern society</span>
          </h2>
          <p className="text-charcoal-300 text-base md:text-lg leading-relaxed mt-4">
            {COMPANY_INTRO}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {PILLARS.map((p) => (
            <div key={p.title} className="card-dark p-7 group">
              <div className="w-14 h-14 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-2xl mb-5 group-hover:bg-gold/20 transition">
                {p.icon}
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-2">
                {p.title}
              </h3>
              <p className="text-sm text-charcoal-300 leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
