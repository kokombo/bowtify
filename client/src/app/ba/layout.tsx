"use client";

import { Fragment, useEffect } from "react";
import "../globals.css";
import { DispatchType } from "@/redux-toolkit/store";
import { useDispatch } from "react-redux";
import { useGetUserProfile } from "@/hooks";
import { setUserProfile } from "@/redux-toolkit/slices/user";

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

  return <Fragment>{children}</Fragment>;
}
