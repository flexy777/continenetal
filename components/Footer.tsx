import { SITE, NAV } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-charcoal-950 border-t border-charcoal-800 pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-4 gap-10 mb-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-full bg-gold-gradient flex items-center justify-center text-charcoal-950 font-black text-lg">
                ☀
              </div>
              <div>
                <div className="font-display font-bold text-white">
                  {SITE.name}
                </div>
                <div className="text-xs text-gold tracking-widest uppercase">
                  {SITE.tagline}
                </div>
              </div>
            </div>
            <p className="text-sm text-charcoal-300 leading-relaxed max-w-md">
              Reliable solar power systems, lithium batteries and inverters
              installed and supported across Nigeria. Reduce your bills, end
              the noise — own your power.
            </p>
          </div>

          <div>
            <div className="text-white font-semibold mb-4">Navigate</div>
            <ul className="space-y-2 text-sm">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="text-charcoal-300 hover:text-gold transition">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-white font-semibold mb-4">Reach Us</div>
            <ul className="space-y-3 text-sm">
              <li className="text-charcoal-300">{SITE.address}</li>
              <li>
                <a href={`tel:${SITE.phoneRaw}`} className="text-charcoal-300 hover:text-gold transition">
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="text-charcoal-300 hover:text-gold transition">
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-charcoal-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-xs text-charcoal-400">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </div>
          <div className="text-xs text-charcoal-400">
            Designed for Nigeria. Powered by the sun.
          </div>
        </div>
      </div>
    </footer>
  );
}
