import UnauthenticatedHome from "@/components/unauthenticated-home";
import IndividualAuthenticatedHome from "./ia/_components/IndividualAuthenticatedHome";
import { getCurrentServerSession } from "@/helpers/data";

const Home = async () => {
  const { session } = await getCurrentServerSession();

  return session ? (
    <IndividualAuthenticatedHome session={session} />
  ) : (
    <UnauthenticatedHome session={session} />
  );
};

export default Home;
