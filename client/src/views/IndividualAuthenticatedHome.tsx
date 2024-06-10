import { ProfileBanner } from "@/components/user";
import { StarterLessons, SuggestedCourses } from "@/containers";
import { suggestedCourses } from "../../dummy";

const IndividualAuthenticatedHome = () => {
  return (
    <main>
      <ProfileBanner />
      <StarterLessons />
      <SuggestedCourses
        label="Because you searched for Front-end Development"
        data={suggestedCourses}
      />
      <SuggestedCourses
        label='Because you viewed "Data Science"'
        data={suggestedCourses}
      />
    </main>
  );
};

export default IndividualAuthenticatedHome;
