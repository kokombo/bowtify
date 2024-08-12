import "./globals.css";
import { Inter } from "next/font/google";
import { Footer } from "@/containers";
import { Providers } from "@/providers";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["greek"] });

export const metadata: Metadata = {
  title: "Bowtify",
  description: "Discover courses and events on Bowtify",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <main>
            {children}
            <Footer />
          </main>
        </Providers>
      </body>
    </html>
  );
}
