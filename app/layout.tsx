import type { Metadata } from "next";
import { Manrope, Open_Sans } from "next/font/google";
import "./globals.css";
import Ticker from "./components/Ticker";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const manrope = Manrope({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-manrope",
});

const openSans = Open_Sans({
  weight: ["600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-open-sans",
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
    <html lang="en" className={`${manrope.variable} ${openSans.variable}`}>
      <body className="flex min-h-screen flex-col bg-white text-ink antialiased">
        <Ticker />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
