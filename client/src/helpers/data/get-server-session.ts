import { authOptions } from "@/utilities/auth-options";
import { getServerSession as getSession } from "next-auth";

export const getServerSession = async () => {
  const session = await getSession(authOptions);
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
