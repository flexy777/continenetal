import Hero from "@/components/Hero";
import Pillars from "@/components/Pillars";
import ServicesOverview from "@/components/ServicesOverview";
import IndustriesGrid from "@/components/IndustriesGrid";
import Products from "@/components/Products";
import PartnerCTA from "@/components/PartnerCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Pillars />
      <ServicesOverview />
      <IndustriesGrid />
      <Products />
      <PartnerCTA />
    </>
  );
}
