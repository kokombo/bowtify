import { LogoutHero, SuggestedCourses, SuggestedEvents } from "@/containers";
import { events, suggestedCourses } from "../../dummy";
import { SuccessLogout } from "@/components/messages";

const LogoutPage = () => {
  return (
    <main>
      <SuccessLogout />

      <LogoutHero />

      <SuggestedCourses label="Learners are viewing" data={suggestedCourses} />

      <SuggestedEvents label="Discover latest events" data={events} />
    </main>
  );
};

export default LogoutPage;
