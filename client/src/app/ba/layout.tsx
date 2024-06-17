"use client";

import "../globals.css";
import { useGetUserProfile } from "@/hooks";
import { ProtectRoute } from "@/components";

export default function BusinessAccountLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useGetUserProfile();

  return <ProtectRoute>{children}</ProtectRoute>;
}
