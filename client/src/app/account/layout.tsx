import "../globals.css";
import { HomeNavigationBar } from "@/components/nav-bars";
import { RedirectAuthUser } from "@/components/auth";

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
