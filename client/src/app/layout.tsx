"use client";

import "./globals.css";
import { Inter } from "next/font/google";
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
      <head>
        <title>Online courses, Events listing</title>

        <meta charSet="utf-8" />

        <link rel="icon" href="/vercel.svg" type="image/svg" sizes="any" />
      </head>

      <body className={inter.className}>
        <AllProviders>
          {children}
          <Footer />
        </AllProviders>
      </body>
    </html>
  );
}
