"use client";

import { useState } from "react";
import { PRODUCTS, Product } from "@/lib/products";
import { useCart } from "./CartContext";
import { SITE } from "@/lib/site";

const CATEGORIES = [
  "All",
  "Starter Home System",
  "Family Comfort System",
  "Premium Family System",
  "Home System",
  "Estate System",
] as const;
type Category = (typeof CATEGORIES)[number];

export default function Products() {
  const [filter, setFilter] = useState<Category>("All");
  const list =
    filter === "All" ? PRODUCTS : PRODUCTS.filter((p) => p.category === filter);

  return (
    <section id="products" className="relative py-20 md:py-28 bg-charcoal-950">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <span className="text-gold text-sm font-semibold tracking-widest uppercase">
            Energy Resilience · Residential Systems
          </span>
          <h2 className="section-title text-white">
            Reliable Power for <span className="text-gold-gradient">Every Home</span>
          </h2>
          <p className="section-subtitle">
            Beyond enterprise infrastructure, CRE delivers turnkey solar, battery
            and backup systems for homes and estates, designed, installed and
            supported by our engineers.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
                filter === c
                  ? "bg-gold text-charcoal-950 border-gold"
                  : "border-charcoal-700 text-charcoal-200 hover:border-gold hover:text-gold"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();

  const orderViaWhatsApp = () => {
    const message = `Hello ${SITE.name},\n\nI'd like to order:\n• ${product.name}, ${product.price}\n\nPlease confirm availability and arrange delivery/installation.`;
    const url = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="card-dark p-6 flex flex-col">
      <div className="flex items-start justify-between mb-4">
        <div className="w-14 h-14 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-3xl">
          {product.icon}
        </div>
        {product.badge && (
          <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-gold-gradient text-charcoal-950">
            {product.badge}
          </span>
        )}
      </div>

      <div className="text-xs text-gold uppercase tracking-wider font-semibold mb-1">
        {product.category}
      </div>
      <h3 className="font-display text-xl font-bold text-white mb-2">
        {product.name}
      </h3>
      <p className="text-sm text-charcoal-300 leading-relaxed mb-4">
        {product.description}
      </p>

      <ul className="space-y-2 mb-5">
        {product.features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm text-charcoal-100">
            <svg className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12l5 5L20 7" />
            </svg>
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto">
        <div className="flex items-baseline justify-between mb-4 pt-4 border-t border-charcoal-800">
          <div>
            <div className="text-xs text-charcoal-400">Starting from</div>
            <div className="text-2xl font-display font-bold text-gold">
              {product.price}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => addToCart(product)}
            className="btn-outline-gold !py-2.5 text-sm"
          >
            Add to Order
          </button>
          <button
            onClick={orderViaWhatsApp}
            className="btn-gold !py-2.5 text-sm"
          >
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
}
