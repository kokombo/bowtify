import axios from "axios";
import { useCurrentUser } from "./useCurrentUser";
import { useQuery } from "@tanstack/react-query";
import { apiBaseUrl } from "@/constants/data";

export const useGetUserProfile = () => {
  const { session, accessToken, user } = useCurrentUser();

  const getUserProfileRequest = async () => {
    const res = await axios.get(apiBaseUrl + "/user/getUserProfile", {
      headers: {
        withCredentials: true,
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return res.data;
  };

  const { data, isLoading } = useQuery<User, ErrorResponse>({
    queryKey: ["getUserProfile"],
    queryFn: getUserProfileRequest,
    enabled: !!session || !!user,
  });

  return { data, isLoading };
};
