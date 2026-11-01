import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "La Rissto Pizzeria — Autentyczny smak Włoch",
  description: "Tradycyjna włoska pizza, świeże składniki i pasja do włoskiej kuchni. Poznaj menu pizzerii La Rissto.",
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pl"><body>{children}</body></html>;
}
