import { apiBaseUrl } from "@/constants/data";
import { getCurrentServerSession } from "./get-current-server-session";

export const useGetUserProfile = async (): Promise<User | ErrorResponse> => {
  const { session } = await getCurrentServerSession();

  const res = await fetch(`${apiBaseUrl}/user/getUserProfile`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${session?.user?.accessToken}`,
      Accept: "application/json",
    },
    credentials: "include",
    next: { tags: ["getUserProfile"] },
  });

  if (!res.ok) {
    const error: ErrorResponse = await res.json();
    return error;
  }

  const user: User = await res.json();
  return user;
};
