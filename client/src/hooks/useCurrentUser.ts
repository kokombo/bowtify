import type { StateType } from "@/redux-toolkit/store";
import { useSession } from "next-auth/react";
import { useSelector } from "react-redux";

export const useCurrentUser = () => {
  const { data: session, status } = useSession();
  const { user } = useSelector((store: StateType) => store.user);

  const accessToken = session?.user.accessToken;
  const isIndividualAccount = session?.user.accountType === "individual";
  const isBusinessAccount = session?.user.accountType === "business";
  const sessionLoading = status === "loading";
  const firstName = session?.user.firstName;
  const lastName = session?.user.lastName;

  return {
    accessToken,
    isIndividualAccount,
    isBusinessAccount,
    session,
    sessionLoading,
    user,
    firstName,
    lastName,
  };
};
