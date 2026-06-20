import Image from "next/image";
import Link from "next/link";
import { SITE, NAV } from "@/lib/site";
import { SERVICE_AREAS } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-charcoal-950 border-t border-charcoal-800 pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-4 gap-10 mb-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.png"
                alt="Continental Renewable Energy"
                width={400}
                height={266}
                sizes="(max-width: 768px) 160px, 200px"
                className="h-20 md:h-28 w-auto flex-shrink-0"
              />
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
              A Critical Infrastructure Resilience and Smart Security Solutions
              company, securing the energy, security, and engineering systems
              that power governments, industries, and institutions.
            </p>
          </div>

          <div>
            <div className="text-white font-semibold mb-4">Navigate</div>
            <ul className="space-y-2 text-sm">
              {NAV.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="text-charcoal-300 hover:text-gold transition">
                    {n.label}
                  </Link>
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

        <div className="grid sm:grid-cols-3 gap-6 mb-10 pt-8 border-t border-charcoal-800">
          {SERVICE_AREAS.map((s) => (
            <Link
              key={s.slug}
              href={`/services#${s.slug}`}
              className="text-sm text-charcoal-300 hover:text-gold transition flex items-start gap-2"
            >
              <span>{s.icon}</span>
              <span>{s.title}</span>
            </Link>
          ))}
        </div>

        <div className="pt-8 border-t border-charcoal-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-xs text-charcoal-400">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </div>
          <div className="text-xs text-charcoal-400">
            {SITE.tagline}
          </div>
        </div>
      </div>
    </footer>
  );
}
