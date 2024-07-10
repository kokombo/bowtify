import "../globals.css";
import { ProtectRoute } from "@/components/auth";

export default function BusinessAccountLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ProtectRoute>{children}</ProtectRoute>;
}
