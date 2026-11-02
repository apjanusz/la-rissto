import type { Metadata } from "next";
import { Cormorant_Garamond, Fraunces, Playfair_Display } from "next/font/google";
import "./globals.css";

// 3 propozycje czcionek — aktywną wybierasz w app/globals.css (zmienna --font-active)
const cormorant = Cormorant_Garamond({ subsets: ["latin", "latin-ext"], weight: ["400", "500", "600", "700"], variable: "--font-cormorant", display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin", "latin-ext"], variable: "--font-playfair", display: "swap" });
const fraunces = Fraunces({ subsets: ["latin", "latin-ext"], variable: "--font-fraunces", display: "swap" });

export const metadata: Metadata = {
  title: "La Rissto Pizzeria — Autentyczny smak Włoch",
  description: "Tradycyjna włoska pizza, świeże składniki i pasja do włoskiej kuchni. Poznaj menu pizzerii La Rissto.",
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pl" className={`${cormorant.variable} ${playfair.variable} ${fraunces.variable}`}>
      <head>
        <noscript><style>{".reveal{opacity:1!important;transform:none!important}"}</style></noscript>
      </head>
      <body>{children}</body>
    </html>
  );
}
