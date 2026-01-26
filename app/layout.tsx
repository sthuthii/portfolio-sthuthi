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
  style: "italic",
});

// Update the body className:
// <body className={`${geistSans.variable} ${instrumentSerif.variable} antialiased ...`}>

export const metadata: Metadata = {
  title: "Sthuthi | Full-Stack Developer & ML Enthusiast",
  description: "Portfolio of a developer specializing in Next.js, Backend Systems, and Machine Learning.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* overflow-x-hidden on both html and body is key for 100% width designs */}
      <body
        className={`${geistSans.variable} ${instrumentSerif.variable} antialiased bg-white text-gray-900 overflow-x-hidden w-full`}
      >
        <Navbar />
        {/* Removed any constraints and added w-full to main */}
        <main className="pt-16 w-full min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}