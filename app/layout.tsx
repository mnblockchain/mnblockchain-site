import type { Metadata } from "next";
import { Manrope, Montserrat } from "next/font/google";
import "./globals.css";
import Ticker from "./components/Ticker";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

// Brand standards leave headline/body typography unspecified ("default
// fonts") — Manrope is used throughout for a clean, modern, single-family
// system.
const manrope = Manrope({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-manrope",
});

// Wordmark only: Montserrat Black, chosen by visually comparing several
// Google Fonts against the actual original logo mark (flat terminals, low
// M-vertex, tight spacing) — the closest free match found for the brand
// doc's "Cloud Bold," which we don't have the real font file for.
const montserrat = Montserrat({
  weight: "900",
  subsets: ["latin"],
  variable: "--font-logo",
});

export const metadata: Metadata = {
  title: "MNblockchain — Minnesota Blockchain & Web3 Community",
  description:
    "MNblockchain is a Minnesota nonprofit building community and industry in blockchain & web3 through events, education, and policy advocacy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${montserrat.variable}`}>
      <body className="flex min-h-screen flex-col bg-white text-ink antialiased">
        <Ticker />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
