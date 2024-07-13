"use client";
import { useSession } from "next-auth/react";

export const useCurrentClientSession = () => {
  const { data: session, status } = useSession();

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
    firstName,
    lastName,
  };
};
