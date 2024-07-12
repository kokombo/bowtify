import { authOptions } from "@/utilities/auth-options";
import { getServerSession } from "next-auth";
import { cache } from "react";

export const getCurrentServerSession = cache(async () => {
  const session = await getServerSession(authOptions);
  const isIndividualAccount = session?.user?.accountType === "individual";
  const isBusinessAccount = session?.user?.accountType === "business";
  const firstName = session?.user.firstName;
  const lastName = session?.user.lastName;

  return {
    session,
    isBusinessAccount,
    isIndividualAccount,
    firstName,
    lastName,
  };
});
