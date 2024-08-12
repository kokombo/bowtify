import { HomeNavigationBar } from "@/components/nav-bars";
import { getServerSession } from "@/helpers/data";
import { Fragment } from "react";

export default async function AuthLayout({
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
