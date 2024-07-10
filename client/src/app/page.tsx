import UnauthenticatedHome from "@/components/unauthenticated-home";
import { RedirectUserToSegment } from "@/components/auth";

const Home = () => {
  return (
    <RedirectUserToSegment>
      <UnauthenticatedHome />
    </RedirectUserToSegment>
  );
};

export default Home;
