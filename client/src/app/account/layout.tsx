"use client";

import "../globals.css";
import { HomeNavigationBar } from "@/components/navigation-bars";
import { RedirectAuthUser } from "@/components";

export default function AuthOperationsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <RedirectAuthUser>
      <HomeNavigationBar />
      {children}
    </RedirectAuthUser>
  );
}
