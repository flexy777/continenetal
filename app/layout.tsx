import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/components/CartContext";

export const metadata: Metadata = {
  title: "Continental Renewable Energy — Home Energy. Sun Powered.",
  description:
    "Continental Renewable Energy delivers reliable solar and home energy solutions across Nigeria. Power your home and business with the sun.",
  keywords: [
    "solar Nigeria",
    "renewable energy Lagos",
    "home solar",
    "inverter installation",
    "solar panels Ikeja",
    "Continental Renewable Energy",
  ],
  openGraph: {
    title: "Continental Renewable Energy — Home Energy. Sun Powered.",
    description:
      "Premium solar systems for Nigerian homes and businesses. Order online, installed by our team.",
    images: ["/logo.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Continental Renewable Energy",
    description: "Home Energy. Sun Powered.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
