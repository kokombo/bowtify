import type { Metadata } from "next";
import UnauthenticatedHome from "@/components/unauthenticated-home";
import IndividualAuthenticatedHome from "./ia/_components/IndividualAuthenticatedHome";
import { getCurrentServerSession } from "@/helpers/data";

export const metadata: Metadata = {
  title: "Bowtify",
  description: "Discover courses and events on Bowtify",
};

const Home = async () => {
  const { session } = await getCurrentServerSession();

  return session ? (
    <IndividualAuthenticatedHome session={session} />
  ) : (
    <UnauthenticatedHome session={session} />
  );
};

export default Home;
