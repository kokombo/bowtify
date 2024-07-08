import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const ProtectRoute = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const router = useRouter();
  const { status } = useSession({
    required: true,
    onUnauthenticated: () => {
      router.push("/");
    },
  });

  if (status === "loading") {
    return <div className="h-screen" />;
  }

  return children;
};

export default ProtectRoute;
