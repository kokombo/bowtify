import { useCurrentUser } from "@/hooks";
import { useRouter } from "next/navigation";
import { Fragment, useEffect } from "react";

const RedirectAuthUser = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const { isBusinessAccount, isIndividualAccount, session, sessionLoading } =
    useCurrentUser();
  const router = useRouter();

  useEffect(() => {
    if (!sessionLoading && session) {
      if (isBusinessAccount) {
        router.push("/ba/dashboard");
      } else if (isIndividualAccount) {
        router.push("/");
      }
    }
  }, [sessionLoading, session, isBusinessAccount, isIndividualAccount, router]);

  if (sessionLoading) {
    return <div className="h-screen" />;
  }

  if (!session) {
    return <Fragment>{children}</Fragment>;
  }

  return null;
};

export default RedirectAuthUser;
