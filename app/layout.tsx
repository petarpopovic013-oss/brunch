import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const jost = localFont({
  src: "../public/assets/fonts/jost.woff2",
  variable: "--font-jost",
  display: "swap",
});

const cormorant = localFont({
  src: [
    { path: "../public/assets/fonts/cormorant-garamond-variable.ttf", weight: "300 700", style: "normal" },
    { path: "../public/assets/fonts/cormorant-garamond-variable-italic.ttf", weight: "300 700", style: "italic" },
  ],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://brunch.rs"),
  title: {
    default: "Brunch Srbija",
    template: "%s",
  },
  description: "Brunch restorani u Novom Sadu, Beogradu i Novoj Pazovi.",
  openGraph: {
    type: "website",
    locale: "sr_RS",
    siteName: "Brunch Srbija",
    images: [{ url: "/images/brunch/hero-guests.webp", width: 2400, height: 1600 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr-Latn" className={`${jost.variable} ${cormorant.variable}`}>
      <body>{children}</body>
    </html>
  );
}
