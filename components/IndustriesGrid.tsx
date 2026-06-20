import { INDUSTRIES } from "@/lib/content";

export default function IndustriesGrid({
  showHeader = true,
}: {
  showHeader?: boolean;
}) {
  return (
    <section className="relative py-20 md:py-28 bg-charcoal-950">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {showHeader && (
          <div className="text-center mb-14">
            <span className="text-gold text-sm font-semibold tracking-widest uppercase">
              Industries We Serve
            </span>
            <h2 className="section-title text-white">
              Trusted across <span className="text-gold-gradient">critical sectors</span>
            </h2>
            <p className="section-subtitle">
              We partner with the organisations that keep society running, from
              government and utilities to healthcare and communities.
            </p>
          </div>
        )}

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {INDUSTRIES.map((i) => (
            <div
              key={i.name}
              className="card-dark p-6 flex flex-col items-center text-center gap-3"
            >
              <div className="w-14 h-14 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-2xl">
                {i.icon}
              </div>
              <span className="text-sm md:text-base font-medium text-white">
                {i.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
