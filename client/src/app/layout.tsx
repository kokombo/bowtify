"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import { AllProviders } from "@/providers";
import { Footer } from "@/containers";
import { LoadingNavBar } from "@/components/navigation-bars";

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
          <LoadingNavBar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </AllProviders>
      </body>
    </html>
  );
}
