"use client";
import HomeNavigationBar from "./nav-bars/home-navigation-navbar";
import {
  UnauthenticatedHomeHero,
  SuggestedCourses,
  SuggestedEvents,
} from "@/containers";
import { events, suggestedCourses } from "../../dummy";
import type { Session } from "next-auth";

type Props = {
  session: Session | null;
};

const UnauthenticatedHome = ({ session }: Props) => {
  return (
    <main>
      <HomeNavigationBar session={session} />
      <UnauthenticatedHomeHero />
      <SuggestedCourses
        headingPrefix="Learners are viewing"
        data={suggestedCourses}
      />
      <SuggestedEvents heading="Discover latest events" data={events} />
    </main>
  );
};

export default UnauthenticatedHome;
