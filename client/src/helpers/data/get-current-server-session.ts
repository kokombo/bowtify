import { authOptions } from "@/utilities/auth-options";
import { getServerSession } from "next-auth";
import { cache } from "react";

export const getCurrentServerSession = cache(async () => {
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
});
