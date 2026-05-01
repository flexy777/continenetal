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
