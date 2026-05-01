"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Benefits from "@/components/Benefits";
import PartnerCTA from "@/components/PartnerCTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import PartnerModal from "@/components/PartnerModal";
import CartDrawer from "@/components/CartDrawer";
import WhatsAppFab from "@/components/WhatsAppFab";

export default function Home() {
  const [partnerOpen, setPartnerOpen] = useState(false);
  const openPartner = () => setPartnerOpen(true);
  const closePartner = () => setPartnerOpen(false);

  return (
    <main className="min-h-screen bg-charcoal-950">
      <Navbar onJoinPartner={openPartner} />
      <Hero onJoinPartner={openPartner} />
      <Products />
      <Benefits />
      <PartnerCTA onJoin={openPartner} />
      <Contact />
      <Footer />

      <PartnerModal open={partnerOpen} onClose={closePartner} />
      <CartDrawer />
      <WhatsAppFab />
    </main>
  );
}
