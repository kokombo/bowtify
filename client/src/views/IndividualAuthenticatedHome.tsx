import { ProfileBanner } from "@/components/user";
import { StarterCourses, SuggestedCourses } from "@/containers";
import { suggestedCourses } from "../../dummy";

const IndividualAuthenticatedHome = () => {
  return (
    <main>
      <ProfileBanner />
      <StarterCourses />
      <SuggestedCourses
        label="Because you searched for Front-end Development"
        data={suggestedCourses}
      />
    </main>
  );
};

export default IndividualAuthenticatedHome;
