"use client";

import "../globals.css";
import { HomeNavigationBar } from "@/components/navigation-bars";
import { RedirectUser } from "@/components";

export default function BusinessAccountOverviewLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <RedirectUser>
      <HomeNavigationBar />
      {children}
    </RedirectUser>
  );
}
