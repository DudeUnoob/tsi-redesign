import type { Metadata } from "next";
import { Geist, Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/CustomCursor";
import { AuraBackground } from "@/components/AuraBackground";
import { Navigation } from "@/components/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Sanga Initiative | TSI",
  description: "Ancient Wisdom. Modern Flow. The next generation of ISKCON.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${outfit.variable} ${playfair.variable} antialiased h-full`}
    >
      <body className="font-sans text-[#1A2A4A] bg-[#FCFBF2] selection:bg-[#B8A375] selection:text-white relative scroll-smooth flex flex-col min-h-screen">
        
        {/* Subtle noise overlay for texture (Gilded Sanga) */}
        <div className="fixed inset-0 opacity-[0.03] mix-blend-multiply pointer-events-none z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        
        <CustomCursor />
        <Navigation />
        <main className="flex-1 w-full max-w-[1400px] mx-auto overflow-x-hidden pt-24 md:pt-32 relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}
