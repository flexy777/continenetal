"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { NAV, SITE } from "@/lib/site";
import { useCart } from "./CartContext";

export default function Navbar({ onJoinPartner }: { onJoinPartner: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { totalQuantity, openCart } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-charcoal-950/90 backdrop-blur-md border-b border-charcoal-800/80 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-24 md:h-28">
        <a href="#home" className="flex items-center gap-3 group">
          <Image
            src="/logo.png"
            alt="Continental Renewable Energy"
            width={400}
            height={266}
            priority
            sizes="(max-width: 768px) 160px, 200px"
            className="h-20 md:h-24 w-auto group-hover:scale-105 transition drop-shadow-[0_0_14px_rgba(212,175,55,0.45)]"
          />
          <div className="hidden sm:block leading-tight">
            <div className="font-display font-bold text-base md:text-lg text-white">
              Continental
            </div>
            <div className="text-[10px] md:text-xs text-gold tracking-widest uppercase">
              Renewable Energy
            </div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-charcoal-200 hover:text-gold text-sm font-medium transition-colors"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          <button
            type="button"
            onClick={openCart}
            aria-label="Open cart"
            className="relative w-10 h-10 rounded-full border border-charcoal-700 hover:border-gold flex items-center justify-center text-charcoal-200 hover:text-gold transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.5l1.5 13.5h13.5l1.5-9H6"
              />
              <circle cx="9" cy="20" r="1.25" />
              <circle cx="17" cy="20" r="1.25" />
            </svg>
            {totalQuantity > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-gold text-charcoal-950 rounded-full text-[10px] font-bold w-5 h-5 flex items-center justify-center">
                {totalQuantity}
              </span>
            )}
          </button>

          <button
            onClick={onJoinPartner}
            className="hidden md:inline-flex btn-gold !py-2 !px-4 text-sm"
          >
            Become a Partner
          </button>

          <a
            href={`tel:${SITE.phoneRaw}`}
            className="hidden md:inline-flex w-10 h-10 rounded-full border border-charcoal-700 hover:border-gold items-center justify-center text-charcoal-200 hover:text-gold transition"
            aria-label="Call us"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106a1.125 1.125 0 00-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97a1.125 1.125 0 00.417-1.173L6.911 3.103A1.125 1.125 0 005.82 2.25H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
          </a>

          <button
            className="lg:hidden w-10 h-10 rounded-md flex items-center justify-center text-white"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-charcoal-950/95 backdrop-blur border-t border-charcoal-800">
          <div className="px-4 py-4 flex flex-col gap-1">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="px-3 py-3 rounded-md text-charcoal-100 hover:bg-charcoal-800 hover:text-gold"
              >
                {n.label}
              </a>
            ))}
            <button
              onClick={() => {
                setOpen(false);
                onJoinPartner();
              }}
              className="btn-gold mt-2"
            >
              Become a Partner
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
