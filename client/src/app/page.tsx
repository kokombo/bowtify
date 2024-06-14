"use client";

import { RedirectUserToSegment } from "@/components";
import { useGetUserProfile } from "@/hooks";
import { setUserProfile } from "@/redux-toolkit/slices/user";
import { DispatchType } from "@/redux-toolkit/store";
import { UnauthenticatedHome } from "@/views";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch: DispatchType = useDispatch();

  const { data } = useGetUserProfile();

  useEffect(() => {
    dispatch(setUserProfile(data));
  }, [data, dispatch]);

  return (
    <RedirectUserToSegment>
      <UnauthenticatedHome />;
    </RedirectUserToSegment>
  );
};

export default Home;
