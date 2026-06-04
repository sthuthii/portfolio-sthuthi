import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Geist, Instrument_Serif } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  weight: "400",
  subsets: ["latin"],
  style: ["italic", "normal"],
});

export const metadata: Metadata = {
  title: "Sthuthi | AI/ML Enthusiast",
  description: "Portfolio specializing in Next.js, Backend Systems, and Machine Learning.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${instrumentSerif.variable} antialiased bg-[#0A0E1A] text-[#E2E8F0] overflow-x-hidden w-full`}
      >
        <Navbar />
        <main className="w-full min-h-screen relative">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}