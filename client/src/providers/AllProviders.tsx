import { NextUIProvider } from "@nextui-org/react";
import NextAuthProvider from "./NextAuthProvider";
import ReactQueryProvider from "./ReactQueryProvider";
import ReduxToolkitProvider from "./ReduxToolkitProvider";

const AllProviders = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
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

export default AllProviders;
