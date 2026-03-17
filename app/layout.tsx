import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import { Geist, Instrument_Serif } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  weight: "400",
  subsets: ["latin"],
  style: ["italic", "normal"], // Added normal for flexibility
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
        className={`${geistSans.variable} ${instrumentSerif.variable} antialiased bg-black text-white overflow-x-hidden w-full`}
      >
        {/* The Grainy Noise Overlay - Adds texture to the black */}
        <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        
        {/* Global Spotlight Effect - Optional: wrap main if you want it everywhere */}
        <Navbar />
        
        <main className="w-full min-h-screen relative">
          {children}
        </main>

        
      </body>
    </html>
  );
}