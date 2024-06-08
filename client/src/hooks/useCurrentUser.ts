import { useSession } from "next-auth/react";

export const useCurrentUser = () => {
  const { data: session, status } = useSession();

  const accessToken = session?.user.accessToken;
  const individualAccount = session?.user.accessToken === "individual";
  const businessAccount = session?.user.accessToken === "business";
  const loading = status === "loading";

  return { accessToken, individualAccount, businessAccount, session, loading };
};
