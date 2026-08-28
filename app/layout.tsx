import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Ticker from "./components/Ticker";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

// Brand standards leave headline/body typography unspecified ("default
// fonts") — Manrope is used throughout for a clean, modern, single-family
// system. The wordmark itself uses this same family at extrabold weight
// as a close substitute for the brand doc's "Cloud Bold" (font file TBD).
const manrope = Manrope({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-manrope",
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
    <html lang="en" className={manrope.variable}>
      <body className="flex min-h-screen flex-col bg-white text-ink antialiased">
        <Ticker />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
