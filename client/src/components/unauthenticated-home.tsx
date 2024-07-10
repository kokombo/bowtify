"use client";
import HomeNavigationBar from "./nav-bars/HomeNavigationBar";
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

      <SuggestedCourses
        heading="Learners are viewing"
        data={suggestedCourses}
      />

      <SuggestedEvents heading="Discover latest events" data={events} />
    </main>
  );
};

export default UnauthenticatedHome;
