"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import { Footer } from "@/containers";
import { Providers } from "@/providers";

const inter = Inter({ subsets: ["greek"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <main className="min-h-screen">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
