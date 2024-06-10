"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { AllProviders } from "@/providers";
import { HomeNavigationBar } from "@/components/navigation-bars";
import { Footer } from "@/containers";

const inter = Inter({ subsets: ["greek"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AllProviders>
          <HomeNavigationBar />
          {children}
          <Footer />
        </AllProviders>
      </body>
    </html>
  );
}
