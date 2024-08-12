import UnauthenticatedHome from "@/components/unauthenticated-home";
import IndividualAuthenticatedHome from "./ia/_components/IndividualAuthenticatedHome";
import { getServerSession } from "@/helpers/data";

const Home = async () => {
  const { session } = await getServerSession();

  return session ? (
    <IndividualAuthenticatedHome session={session} />
  ) : (
    <UnauthenticatedHome session={session} />
  );
};

export default Home;
