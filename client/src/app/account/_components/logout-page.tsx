"use client";
import { LogoutHero, SuggestedCourses, SuggestedEvents } from "@/containers";
import { events, suggestedCourses } from "../../../../dummy";
import { SuccessLogout } from "@/components/messages";

const LogoutPage = () => {
  return (
    <main>
      <SuccessLogout />

      <LogoutHero />

      <SuggestedCourses
        heading="Learners are viewing"
        data={suggestedCourses}
      />

      <SuggestedEvents heading="Discover latest events" data={events} />
    </main>
  );
};

export default LogoutPage;
