"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { AllProviders } from "@/providers";
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
          {children}
          <Footer />
        </AllProviders>
      </body>
    </html>
  );
}
