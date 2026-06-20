"use client";

import { CONTACT_PATHS } from "@/lib/content";
import { useUI } from "./UIContext";

export default function ContactPaths() {
  const { openPartner } = useUI();

  const handle = (intent: string) => {
    if (intent === "Partnership") {
      openPartner();
      return;
    }
    document
      .getElementById("contact")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-16 md:py-20 bg-charcoal-950">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-3 gap-6">
          {CONTACT_PATHS.map((p) => (
            <div key={p.title} className="card-dark p-7 flex flex-col">
              <h2 className="font-display text-xl font-bold text-white mb-2">
                {p.title}
              </h2>
              <p className="text-sm text-charcoal-300 leading-relaxed flex-1 mb-5">
                {p.text}
              </p>
              <button
                onClick={() => handle(p.intent)}
                className="btn-outline-gold !py-2.5 text-sm self-start"
              >
                {p.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
