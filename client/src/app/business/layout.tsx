"use client";

import { Fragment } from "react";
import "../globals.css";
import { HomeNavigationBar } from "@/components/navigation-bars";

export default function BusinessAccountOverviewLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Fragment>
      <HomeNavigationBar />
      {children}
    </Fragment>
  );
}
