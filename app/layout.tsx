import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import localFont from "next/font/local";
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

// Wordmark only: the actual "Cloud Bold" font from the brand standards doc,
// self-hosted (weight 700 — it's a single-weight font, not a variable one).
const cloudBold = localFont({
  src: "./fonts/Cloud-Bold.otf",
  weight: "700",
  variable: "--font-logo",
  display: "swap",
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
    <html lang="en" className={`${manrope.variable} ${cloudBold.variable}`}>
      <body className="flex min-h-screen flex-col bg-white text-ink antialiased">
        <Ticker />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
