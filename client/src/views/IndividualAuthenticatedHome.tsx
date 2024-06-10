import { ProfileBanner } from "@/components/user";
import {
  StarterLessons,
  SuggestedCourses,
  SuggestedEvents,
} from "@/containers";
import { newCourses, suggestedCourses } from "../../dummy";

const IndividualAuthenticatedHome = () => {
  return (
    <main>
      <ProfileBanner />

      <StarterLessons />

      <SuggestedCourses
        label="Because you searched for Front-end Development"
        data={suggestedCourses}
      />

      <SuggestedEvents label="Discover latest events & happenings" />

      <SuggestedCourses
        label='Because you viewed "Data Science"'
        data={suggestedCourses}
      />

      <SuggestedCourses label="Learners are viewings" data={suggestedCourses} />

      <SuggestedCourses
        label="Top courses in Backend Development"
        data={suggestedCourses}
      />

      <SuggestedCourses label="Newest Courses on Node.js" data={newCourses} />
    </main>
  );
};

export default IndividualAuthenticatedHome;
