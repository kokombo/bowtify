import { authOptions } from "@/utilities/auth-options";
import { getServerSession } from "next-auth";
import { cache } from "react";
import { getSession } from "next-auth/react";

export const getCurrentServerSession = async () => {
  const session = await getServerSession(authOptions);
  const firstName = session?.user.firstName;
  const lastName = session?.user.lastName;
  const accessToken = session?.user?.accessToken;

  return {
    session,
    firstName,
    lastName,
    accessToken,
  };
};
