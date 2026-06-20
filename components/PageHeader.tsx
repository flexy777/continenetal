export default function PageHeader({
  eyebrow,
  title,
  highlight,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  subtitle?: string;
}) {
  return (
    <section className="hero-bg relative overflow-hidden pt-36 md:pt-44 pb-12 md:pb-16">
      <div className="solar-glow" style={{ top: "-150px", right: "-120px" }} />
      <div className="relative max-w-5xl mx-auto px-4 md:px-8 text-center">
        <span className="text-gold text-sm font-semibold tracking-widest uppercase">
          {eyebrow}
        </span>
        <h1 className="font-display text-4xl md:text-6xl font-bold text-white mt-3 leading-tight">
          {title} {highlight && <span className="text-gold-gradient">{highlight}</span>}
        </h1>
        {subtitle && (
          <p className="text-charcoal-200 text-base md:text-lg max-w-2xl mx-auto mt-5 leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
