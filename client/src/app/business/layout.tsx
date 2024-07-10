import "../globals.css";
import { Fragment } from "react";
import { HomeNavigationBar } from "@/components/nav-bars";

export default async function BusinessAccountOverviewLayout({
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
