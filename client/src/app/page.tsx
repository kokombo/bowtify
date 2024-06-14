"use client";

import { RedirectUserToSegment } from "@/components";
import { UnauthenticatedHome } from "@/views";

const Home = () => {
  return (
    <RedirectUserToSegment>
      <UnauthenticatedHome />;
    </RedirectUserToSegment>
  );
};

export default Home;
