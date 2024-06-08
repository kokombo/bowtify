"use client";

import { apiBaseUrl } from "@/constants/data";
import { useCurrentUser } from "@/hooks";
import {
  BusinessAuthenticatedHome,
  IndividualAuthenticatedHome,
  UnauthenticatedHome,
} from "@/views";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Fragment } from "react";

const Home = () => {
  const { individualAccount, session, businessAccount, accessToken } =
    useCurrentUser();

  const getUserProfileRequest = async () => {
    const res = await axios.get(apiBaseUrl + "/user/getUserProfile", {
      headers: {
        withCredentials: true,
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return res.data;
  };

  const { data, error } = useQuery<User, ErrorResponse>({
    queryKey: ["getUserProfile"],
    queryFn: getUserProfileRequest,
    enabled: !!session,
  });

  return (
    <Fragment>
      {!session ? (
        <UnauthenticatedHome />
      ) : (
        <Fragment>
          {individualAccount && <IndividualAuthenticatedHome />}

          {businessAccount && <BusinessAuthenticatedHome />}
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
