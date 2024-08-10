import { Fragment } from "react";
import { HomeNavigationBar } from "@/components/nav-bars";
import { getCurrentServerSession } from "@/helpers/data";

export default async function BusinessAccountOverviewLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { session } = await getCurrentServerSession();

  return (
    <Fragment>
      <HomeNavigationBar session={session} />
      {children}
    </Fragment>
  );
}
