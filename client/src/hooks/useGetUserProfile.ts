import axios from "axios";
import { useCurrentUser } from "./useCurrentUser";
import { useQuery } from "@tanstack/react-query";
import { apiBaseUrl } from "@/constants/data";
import { useDispatch } from "react-redux";
import type { DispatchType } from "@/redux-toolkit/store";
import { useEffect } from "react";
import { setUserProfile } from "@/redux-toolkit/slices/user";

export const useGetUserProfile = () => {
  const { session, accessToken } = useCurrentUser();
  const dispatch: DispatchType = useDispatch();

  const getUserProfileRequest = async () => {
    const res = await axios.get(`${apiBaseUrl}/user/getUserProfile`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        Accept: "application/json",
      },
      withCredentials: true,
    });

    return res.data;
  };

  const { data, isLoading, isSuccess } = useQuery<User, ErrorResponse>({
    queryKey: ["getUserProfile"],
    queryFn: getUserProfileRequest,
    enabled: !!session,
  });

  useEffect(() => {
    if (isSuccess) {
      dispatch(setUserProfile(data));
    }
  }, [data, dispatch, isSuccess]);

  return { isLoading };
};
