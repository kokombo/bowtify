"use client";

import { apiBaseUrl } from "@/constants/data";
import { useCurrentUser } from "@/hooks";
import { setUserProfile } from "@/redux-toolkit/slices/user";
import { DispatchType } from "@/redux-toolkit/store";
import {
  BusinessAuthenticatedHome,
  IndividualAuthenticatedHome,
  UnauthenticatedHome,
} from "@/views";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";

const Home = () => {
  const {
    isIndividualAccount,
    sessionLoading,
    session,
    isBusinessAccount,
    accessToken,
  } = useCurrentUser();

  const dispatch: DispatchType = useDispatch();

  const getUserProfileRequest = async () => {
    const res = await axios.get(apiBaseUrl + "/user/getUserProfile", {
      headers: {
        withCredentials: true,
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return res.data;
  };

  const { data } = useQuery<User, ErrorResponse>({
    queryKey: ["getUserProfile"],
    queryFn: getUserProfileRequest,
    enabled: !!session,
  });

  useEffect(() => {
    dispatch(setUserProfile(data));
  }, [data, dispatch]);

  return (
    <Fragment>
      {sessionLoading ? (
        <div className="h-screen" />
      ) : !session ? (
        <UnauthenticatedHome />
      ) : (
        <Fragment>
          {isIndividualAccount && <IndividualAuthenticatedHome />}

          {isBusinessAccount && <BusinessAuthenticatedHome />}
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
