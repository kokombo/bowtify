import { useSession } from "next-auth/react";

export const useCurrentUser = () => {
  const { data: session, status } = useSession();

  const accessToken = session?.user.accessToken;
  const individualAccount = session?.user.accountType === "individual";
  const businessAccount = session?.user.accountType === "business";
  const loading = status === "loading";

  return { accessToken, individualAccount, businessAccount, session, loading };
};
