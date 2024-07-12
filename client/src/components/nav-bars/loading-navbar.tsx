"use client";
import { BowtifyLogo } from "@/components/logos";
import { useCurrentUser } from "@/hooks";

const LoadingNavBar = () => {
  const { sessionLoading } = useCurrentUser();

  return (
    sessionLoading && (
      <nav className="flex items-center justify-between h-20 paddingX shadow-lg">
        <BowtifyLogo />
        <div />
      </nav>
    )
  );
};

export default LoadingNavBar;
