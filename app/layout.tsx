import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/components/CartContext";
import { UIProvider } from "@/components/UIContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import WhatsAppFab from "@/components/WhatsAppFab";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name}, ${SITE.descriptor}`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "Continental Renewable Energy (CRE) secures the systems that power modern society, integrating resilient energy infrastructure, smart security, and advanced engineering for governments, industries, and institutions.",
  applicationName: SITE.name,
  keywords: [
    "critical infrastructure resilience",
    "smart security solutions",
    "energy resilience",
    "battery energy storage systems",
    "BESS Nigeria",
    "microgrids",
    "solar energy systems",
    "AI security analytics",
    "command and control centers",
    "smart city solutions",
    "infrastructure protection",
    "Continental Renewable Energy",
    "CRE Nigeria",
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  publisher: SITE.name,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: `${SITE.name}, ${SITE.descriptor}`,
    description:
      "Securing the systems that power modern society through resilient energy infrastructure, smart security, and advanced engineering.",
    url: SITE.url,
    siteName: SITE.name,
    images: [{ url: "/logo.png", width: 400, height: 266, alt: SITE.name }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name}, ${SITE.descriptor}`,
    description: SITE.tagline,
    images: ["/logo.png"],
  },
  category: "technology",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.name,
  alternateName: SITE.shortName,
  url: SITE.url,
  logo: `${SITE.url}/logo.png`,
  description:
    "Critical Infrastructure Resilience and Smart Security Solutions company securing the systems that power modern society.",
  slogan: SITE.tagline,
  email: SITE.email,
  telephone: SITE.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: "31B Oyeleke St., Alausa CBD",
    addressLocality: "Ikeja",
    addressRegion: "Lagos",
    addressCountry: "NG",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: SITE.phone,
    contactType: "customer service",
    email: SITE.email,
    areaServed: "NG",
    availableLanguage: "English",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE.name,
  url: SITE.url,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <CartProvider>
          <UIProvider>
            <Navbar />
            <main className="min-h-screen bg-charcoal-950">{children}</main>
            <Footer />
            <CartDrawer />
            <WhatsAppFab />
          </UIProvider>
        </CartProvider>
      </body>
    </html>
  );
}
