"use client";

import { useState } from "react";
import { SITE } from "@/lib/site";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const sendViaWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello ${SITE.name},\n\nMy name is ${name}.\nEmail: ${email}\nPhone: ${phone}\n\n${message}`;
    const url = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-charcoal-950 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <span className="text-gold text-sm font-semibold tracking-widest uppercase">
            Get in Touch
          </span>
          <h2 className="section-title text-white">
            Talk to our <span className="text-gold-gradient">team</span>
          </h2>
          <p className="section-subtitle">
            Tell us about your infrastructure, security, and energy priorities,
            we&apos;ll get back to you with the right next step.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <ContactCard
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25a7.5 7.5 0 1115 0z" />
                </svg>
              }
              title="Visit Our Office"
              lines={[SITE.address]}
            />
            <ContactCard
              icon={
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106a1.125 1.125 0 00-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97a1.125 1.125 0 00.417-1.173L6.911 3.103A1.125 1.125 0 005.82 2.25H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              }
              title="Call or WhatsApp"
              lines={[SITE.phone]}
              href={`tel:${SITE.phoneRaw}`}
            />
            <ContactCard
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              }
              title="Email Us"
              lines={[SITE.email]}
              href={`mailto:${SITE.email}`}
            />
            <ContactCard
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
              title="Working Hours"
              lines={["Mon to Sat: 8:00am to 6:00pm", "Sunday: Closed"]}
            />
          </div>

          <form
            onSubmit={sendViaWhatsApp}
            className="lg:col-span-3 card-dark p-6 md:p-8"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="label-form">Full Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="input-dark"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="label-form">Phone Number</label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="input-dark"
                  placeholder="+234..."
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="label-form">Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-dark"
                placeholder="you@example.com"
              />
            </div>
            <div className="mt-4">
              <label className="label-form">How can we help?</label>
              <textarea
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="input-dark resize-none"
                placeholder="Tell us about your home/business and the appliances you'd like to power..."
              />
            </div>
            <button type="submit" className="btn-gold mt-6 w-full sm:w-auto">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.95.57 3.84 1.65 5.49L2 22l4.69-1.23a9.9 9.9 0 005.35 1.55h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.85 9.85 0 0012.04 2zm0 18.13c-1.62 0-3.21-.43-4.59-1.25l-.33-.2-2.78.73.74-2.71-.21-.34a8.21 8.21 0 01-1.27-4.36c0-4.54 3.69-8.23 8.24-8.23 2.2 0 4.27.86 5.83 2.41a8.18 8.18 0 012.41 5.83c0 4.54-3.7 8.13-8.04 8.12zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.15-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.42h-.48c-.16 0-.43.06-.65.31-.22.25-.86.84-.86 2.05 0 1.21.88 2.38 1 2.55.12.17 1.74 2.66 4.22 3.73 2.48 1.07 2.48.71 2.93.66.45-.04 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29z" />
              </svg>
              Send via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  icon,
  title,
  lines,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  lines: string[];
  href?: string;
}) {
  const inner = (
    <div className="card-dark p-5 flex items-start gap-4">
      <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold">
        {icon}
      </div>
      <div>
        <div className="font-display font-bold text-white text-base mb-1">
          {title}
        </div>
        {lines.map((l) => (
          <div key={l} className="text-sm text-charcoal-300 leading-relaxed">
            {l}
          </div>
        ))}
      </div>
    </div>
  );
  return href ? (
    <a href={href} className="block">
      {inner}
    </a>
  ) : (
    inner
  );
}
