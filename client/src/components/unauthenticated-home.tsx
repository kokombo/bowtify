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
  isIndividualAccount: boolean;
};

const UnauthenticatedHome = ({ session, isIndividualAccount }: Props) => {
  return (
    <main>
      <HomeNavigationBar
        session={session}
        isIndividualAccount={isIndividualAccount}
      />

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
