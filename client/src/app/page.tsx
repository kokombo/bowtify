"use client";

import { RedirectUserToSegment } from "@/components";
import { useGetUserProfile } from "@/hooks";
import { UnauthenticatedHome } from "@/views";

const Home = () => {
  useGetUserProfile();

  return (
    <RedirectUserToSegment>
      <UnauthenticatedHome />;
    </RedirectUserToSegment>
  );
};

export default Home;
