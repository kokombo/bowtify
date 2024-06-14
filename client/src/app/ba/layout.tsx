"use client";

import "../globals.css";
import { useEffect } from "react";
import { DispatchType } from "@/redux-toolkit/store";
import { useDispatch } from "react-redux";
import { useGetUserProfile } from "@/hooks";
import { setUserProfile } from "@/redux-toolkit/slices/user";
import { ProtectRoute } from "@/components";

export default function BusinessAccountLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const dispatch: DispatchType = useDispatch();

  const { data } = useGetUserProfile();

  useEffect(() => {
    dispatch(setUserProfile(data));
  }, [data, dispatch]);

  return <ProtectRoute>{children}</ProtectRoute>;
}
