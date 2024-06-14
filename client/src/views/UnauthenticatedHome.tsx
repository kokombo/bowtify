import { HomeNavigationBar } from "@/components/navigation-bars";
import {
  UnauthenticatedHomeHero,
  SuggestedCourses,
  SuggestedEvents,
} from "@/containers";
import { events, suggestedCourses } from "../../dummy";

const UnauthenticatedHome = () => {
  return (
    <main>
      <HomeNavigationBar />

      <UnauthenticatedHomeHero />

      <SuggestedCourses label="Learners are viewing" data={suggestedCourses} />

      <SuggestedEvents label="Discover latest events" data={events} />
    </main>
  );
};

export default UnauthenticatedHome;
