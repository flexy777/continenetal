"use client";

import { useEffect, useState } from "react";
import { useCart } from "./CartContext";
import { SITE } from "@/lib/site";

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeFromCart, updateQuantity, clearCart } = useCart();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    if (!isOpen) return;
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && closeCart();
    document.addEventListener("keydown", onEsc);
    return () => document.removeEventListener("keydown", onEsc);
  }, [isOpen, closeCart]);

  const placeOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (items.length === 0) return;

    const lines = items
      .map(
        (i, idx) =>
          `${idx + 1}. ${i.product.name} × ${i.quantity} — ${i.product.price}`,
      )
      .join("\n");

    const text =
      `*New Order Request*\n\n` +
      `*Customer:* ${name}\n` +
      `*Phone:* ${phone}\n` +
      `*Delivery Address:* ${address}\n\n` +
      `*Items:*\n${lines}\n\n` +
      `Please confirm pricing, availability and installation schedule.`;

    const url = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-fade-in" onClick={closeCart} />
      <aside className="absolute right-0 top-0 h-full w-full max-w-md bg-charcoal-900 border-l border-gold/30 shadow-2xl flex flex-col animate-slide-up">
        <div className="flex items-center justify-between p-5 border-b border-charcoal-800">
          <div>
            <div className="text-gold text-xs font-semibold tracking-widest uppercase">
              Your Order
            </div>
            <div className="font-display text-xl font-bold text-white">
              Order Summary
            </div>
          </div>
          <button
            onClick={closeCart}
            aria-label="Close"
            className="w-9 h-9 rounded-full bg-charcoal-800 hover:bg-charcoal-700 text-white flex items-center justify-center"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-10">
              <div className="text-5xl mb-3">🛒</div>
              <div className="font-semibold text-white mb-1">Your cart is empty</div>
              <div className="text-sm text-charcoal-300">
                Browse our solar systems and add what you need.
              </div>
            </div>
          ) : (
            <ul className="space-y-3">
              {items.map((i) => (
                <li
                  key={i.product.id}
                  className="flex gap-3 p-3 rounded-xl border border-charcoal-700 bg-charcoal-800/50"
                >
                  <div className="w-12 h-12 flex-shrink-0 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center text-2xl">
                    {i.product.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold text-white truncate">
                      {i.product.name}
                    </div>
                    <div className="text-xs text-gold mb-2">{i.product.price}</div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() =>
                          updateQuantity(i.product.id, i.quantity - 1)
                        }
                        className="w-7 h-7 rounded-md bg-charcoal-700 text-white hover:bg-charcoal-600"
                        aria-label="Decrease"
                      >
                        −
                      </button>
                      <span className="text-sm text-white w-6 text-center">
                        {i.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(i.product.id, i.quantity + 1)
                        }
                        className="w-7 h-7 rounded-md bg-charcoal-700 text-white hover:bg-charcoal-600"
                        aria-label="Increase"
                      >
                        +
                      </button>
                      <button
                        onClick={() => removeFromCart(i.product.id)}
                        className="ml-auto text-xs text-charcoal-300 hover:text-gold"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <form onSubmit={placeOrder} className="p-5 border-t border-charcoal-800 space-y-3">
            <div>
              <label className="label-form">Your Name</label>
              <input
                className="input-dark"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label className="label-form">Phone Number</label>
              <input
                type="tel"
                className="input-dark"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+234..."
              />
            </div>
            <div>
              <label className="label-form">Delivery Address</label>
              <input
                className="input-dark"
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="flex gap-2 pt-2">
              <button type="submit" className="btn-gold flex-1">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.95.57 3.84 1.65 5.49L2 22l4.69-1.23a9.9 9.9 0 005.35 1.55h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.85 9.85 0 0012.04 2z" />
                </svg>
                Send Order via WhatsApp
              </button>
              <button
                type="button"
                onClick={clearCart}
                className="btn-outline-gold !px-3"
                aria-label="Clear cart"
                title="Clear cart"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .564c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>
              </button>
            </div>
            <p className="text-[11px] text-charcoal-400 text-center">
              You&apos;ll be redirected to WhatsApp to confirm your order with our team.
            </p>
          </form>
        )}
      </aside>
    </div>
  );
}
