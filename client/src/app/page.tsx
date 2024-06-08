"use client";

import { useCurrentUser } from "@/hooks";
import {
  BusinessAuthenticatedHome,
  IndividualAuthenticatedHome,
  UnauthenticatedHome,
} from "@/views";
import { Fragment } from "react";

const Home = () => {
  const { individualAccount, session, businessAccount } = useCurrentUser();

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
