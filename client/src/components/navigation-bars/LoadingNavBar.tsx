import { Fragment } from "react";
import { BowtifyLogo } from "../logos";
import { useCurrentUser } from "@/hooks";

const LoadingNavBar = () => {
  const { sessionLoading } = useCurrentUser();

  return (
    <Fragment>
      {sessionLoading && (
        <nav className="flex items-center justify-between h-20 paddingX shadow-lg">
          <BowtifyLogo />

          <div />
        </nav>
      )}
    </Fragment>
  );
};

export default LoadingNavBar;
