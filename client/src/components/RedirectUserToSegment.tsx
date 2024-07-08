import { useCurrentUser } from "@/hooks";
import { IndividualAuthenticatedHome } from "@/views";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const RedirectUserToSegment = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const { isBusinessAccount, isIndividualAccount, session, sessionLoading } =
    useCurrentUser();
  const router = useRouter();

  useEffect(() => {
    if (!sessionLoading && session && isBusinessAccount) {
      router.push("/ba/dashboard");
    }
  }, [sessionLoading, session, isBusinessAccount, router]);

  if (sessionLoading) return <div className="h-screen" />;

  if (!session) return children;

  return isIndividualAccount ? <IndividualAuthenticatedHome /> : null;
};

export default RedirectUserToSegment;
