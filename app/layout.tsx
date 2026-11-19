import type { Metadata, Viewport } from "next";
import { Suspense } from "react";

import {
  Roboto,
  Poppins,
  DM_Sans,
  Stack_Sans_Text,
  Geist,
} from "next/font/google";

import "@/styles/common.css";
import "@/styles/home.css";
import "@/app/globals.css";

import AosProvider from "@/components/AosProvider";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import InnerHeader from "@/components/layout/InnerHeader";
import HeaderSwitcher from "@/components/layout/HeaderSwitcher";

export const metadata: Metadata = {
  title: "Noida International University",
  description: "Noida International University",
  authors: [{ name: "Sterco Digitex" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--roboto",
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--poppins",
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});

const dmSans = DM_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--dm-sans",
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});

const stackSansText = Stack_Sans_Text({
  weight: "400",
  subsets: ["latin"],
  variable: "--stack-sans-text",
  display: "swap",
  adjustFontFallback: false,
  fallback: ["Arial", "sans-serif"],
});

const geist = Geist({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--geist",
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body
        className={`
          ${roboto.variable}
          ${poppins.variable}
          ${dmSans.variable}
          ${stackSansText.variable}
          ${geist.variable}
        `}
      >
        <AosProvider>
          <Suspense fallback={null}>
            <HeaderSwitcher home={<Header />} inner={<InnerHeader />} />
          </Suspense>

          <main>{children}</main>

          <Footer />
        </AosProvider>
      </body>
    </html>
  );
}
