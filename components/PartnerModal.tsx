"use client";

import { useEffect, useState } from "react";
import { PARTNER_TIERS, NIGERIAN_STATES } from "@/lib/products";
import { SITE } from "@/lib/site";

type Form = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  state: string;
  city: string;
  lga: string;
  companyName: string;
  location: string;
  tier: string;
};

const EMPTY: Form = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  address: "",
  state: "",
  city: "",
  lga: "",
  companyName: "",
  location: "",
  tier: "",
};

export default function PartnerModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [form, setForm] = useState<Form>(EMPTY);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onEsc);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onEsc);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  const update = <K extends keyof Form>(key: K, value: Form[K]) =>
    setForm((f) => ({ ...f, [key]: value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const text =
      `*New Partner Program Application*\n\n` +
      `*Name:* ${form.firstName} ${form.lastName}\n` +
      `*Email:* ${form.email}\n` +
      `*Phone:* ${form.phone}\n` +
      `*Address:* ${form.address}\n` +
      `*State:* ${form.state}\n` +
      `*City:* ${form.city}\n` +
      `*LGA:* ${form.lga}\n` +
      `*Company Name:* ${form.companyName}\n` +
      `*Preferred Location:* ${form.location}\n` +
      `*Preferred Partnership Tier:* ${form.tier}\n\n` +
      `Please get back to me with the next steps.`;
    const url = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
    setSubmitted(true);
  };

  const reset = () => {
    setForm(EMPTY);
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative bg-charcoal-900 border border-gold/30 rounded-2xl w-full max-w-3xl max-h-[92vh] overflow-y-auto shadow-2xl shadow-gold/10">
        <button
          onClick={reset}
          aria-label="Close"
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-charcoal-800 hover:bg-charcoal-700 text-white flex items-center justify-center transition z-10"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        {submitted ? (
          <div className="p-10 text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-gold-gradient flex items-center justify-center mb-5">
              <svg className="w-8 h-8 text-charcoal-950" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12l5 5L20 7" />
              </svg>
            </div>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-3">
              Application Sent
            </h3>
            <p className="text-charcoal-200 mb-6 max-w-md mx-auto">
              Thanks {form.firstName}! Your application has been forwarded to
              our partnerships team via WhatsApp. We typically respond within
              24 hours.
            </p>
            <button onClick={reset} className="btn-gold">
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={submit} className="p-6 md:p-8">
            <div className="mb-6">
              <span className="text-gold text-xs font-semibold tracking-widest uppercase">
                Partner Program
              </span>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-white mt-1">
                Become a {SITE.name} Partner
              </h3>
              <p className="text-sm text-charcoal-300 mt-2">
                Fill in your details and we&apos;ll route your application to
                the partnerships team.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="First Name" required>
                <input
                  className="input-dark"
                  value={form.firstName}
                  onChange={(e) => update("firstName", e.target.value)}
                  required
                />
              </Field>
              <Field label="Last Name" required>
                <input
                  className="input-dark"
                  value={form.lastName}
                  onChange={(e) => update("lastName", e.target.value)}
                  required
                />
              </Field>
              <Field label="Email" required>
                <input
                  type="email"
                  className="input-dark"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  required
                />
              </Field>
              <Field label="Phone Number" required>
                <input
                  type="tel"
                  className="input-dark"
                  placeholder="+234..."
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  required
                />
              </Field>
              <Field label="Address" required full>
                <input
                  className="input-dark"
                  value={form.address}
                  onChange={(e) => update("address", e.target.value)}
                  required
                />
              </Field>
              <Field label="State" required>
                <select
                  className="input-dark"
                  value={form.state}
                  onChange={(e) => update("state", e.target.value)}
                  required
                >
                  <option value="" disabled>
                    Select state
                  </option>
                  {NIGERIAN_STATES.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="City" required>
                <input
                  className="input-dark"
                  value={form.city}
                  onChange={(e) => update("city", e.target.value)}
                  required
                />
              </Field>
              <Field label="Local Government Area (LGA)" required>
                <input
                  className="input-dark"
                  value={form.lga}
                  onChange={(e) => update("lga", e.target.value)}
                  required
                />
              </Field>
              <Field label="Company Name" required>
                <input
                  className="input-dark"
                  value={form.companyName}
                  onChange={(e) => update("companyName", e.target.value)}
                  required
                />
              </Field>
              <Field label="Preferred Location" required full>
                <input
                  className="input-dark"
                  placeholder="Where would you like to operate as a partner?"
                  value={form.location}
                  onChange={(e) => update("location", e.target.value)}
                  required
                />
              </Field>
              <Field label="Preferred Partnership Tier" required full>
                <select
                  className="input-dark"
                  value={form.tier}
                  onChange={(e) => update("tier", e.target.value)}
                  required
                >
                  <option value="" disabled>
                    Select a tier
                  </option>
                  {PARTNER_TIERS.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </Field>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <button type="submit" className="btn-gold flex-1">
                Submit Application
              </button>
              <button
                type="button"
                onClick={reset}
                className="btn-outline-gold sm:flex-none"
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

function Field({
  label,
  required,
  full,
  children,
}: {
  label: string;
  required?: boolean;
  full?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className={full ? "sm:col-span-2" : ""}>
      <label className="label-form">
        {label} {required && <span className="text-gold">*</span>}
      </label>
      {children}
    </div>
  );
}
