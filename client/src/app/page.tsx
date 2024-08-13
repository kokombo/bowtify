import UnauthenticatedHome from "@/components/unauthenticated-home";
import IndividualAuthenticatedHome from "./ia/_components/IndividualAuthenticatedHome";
import { getSession } from "next-auth/react";

const Home = async () => {
  const session = await getSession();

  return session ? (
    <IndividualAuthenticatedHome session={session} />
  ) : (
    <UnauthenticatedHome session={session} />
  );
};

export default Home;
