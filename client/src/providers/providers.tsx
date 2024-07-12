"use client";
import { NextUIProvider } from "@nextui-org/react";
import NextAuthProvider from "@/providers/next-auth-provider";
import ReactQueryProvider from "@/providers/react-query-provider";
import ReduxToolkitProvider from "@/providers/redux-toolkit-provider";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <NextUIProvider>
      <ReduxToolkitProvider>
        <NextAuthProvider>
          <ReactQueryProvider>{children}</ReactQueryProvider>
        </NextAuthProvider>
      </ReduxToolkitProvider>
    </NextUIProvider>
  );
};

export default Providers;
