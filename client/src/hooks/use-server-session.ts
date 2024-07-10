import { authOptions } from "@/utilities/auth-options";
import { getServerSession } from "next-auth";

export const useServerSession = async () => {
  const session = await getServerSession(authOptions);
  return { session };
};
