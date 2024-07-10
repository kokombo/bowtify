import "./globals.css";
import { Inter } from "next/font/google";
import LoadingNavBar from "@/components/nav-bars/LoadingNavBar";
import { Footer } from "@/containers";
import { Providers } from "@/providers";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["greek"] });

export const metadata: Metadata = {
  title: "Bowtiy",
  description: "Discover courses and events on Bowtify",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <LoadingNavBar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
