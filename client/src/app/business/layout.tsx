"use client";

import { Fragment } from "react";
import "../globals.css";
import { HomeNavigationBar } from "@/components/navigation-bars";
import { useGetUserProfile } from "@/hooks";

export default function BusinessAccountOverviewLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useGetUserProfile();

  return (
    <Fragment>
      <HomeNavigationBar />
      {children}
    </Fragment>
  );
}
