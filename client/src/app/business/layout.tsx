import { Fragment } from "react";
import { HomeNavigationBar } from "@/components/nav-bars";
import { getServerSession } from "@/helpers/data";

export default async function BusinessAccountOverviewLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { session } = await getServerSession();

  return (
    <Fragment>
      <HomeNavigationBar session={session} />
      {children}
    </Fragment>
  );
}
