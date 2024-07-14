"use client";
import { ProfileBanner } from "@/components/user";
import {
  BillBoard,
  StarterLessons,
  SuggestedCourses,
  SuggestedEvents,
} from "@/containers";
import {
  events,
  newCourses,
  starterLessons,
  suggestedCourses,
} from "../../../../dummy";
import { HomeNavigationBar } from "@/components/nav-bars";
import type { Session } from "next-auth";

type Props = {
  session: Session | null;
};

const IndividualAuthenticatedHome = ({ session }: Props) => {
  return (
    <main>
      <HomeNavigationBar session={session} />
      <ProfileBanner session={session} />
      <BillBoard />
      <StarterLessons
        heading={` Let's start learning, ${session?.user.firstName}`}
        linkHref=""
        linkLabel="My Learning"
        data={starterLessons}
      />
      <SuggestedCourses
        headingPrefix="Because you searched for"
        category="Front-end Development"
        data={suggestedCourses}
      />
      <SuggestedEvents
        heading="Discover latest events & happenings"
        data={events}
      />
      <SuggestedCourses
        headingPrefix="Because you viewed"
        category='"Data Science"'
        data={suggestedCourses}
      />
      <SuggestedCourses
        headingPrefix="Learners are viewings"
        data={suggestedCourses}
      />
      <SuggestedCourses
        headingPrefix="Top courses in"
        category="Backend Development"
        data={suggestedCourses}
      />
      <SuggestedEvents heading="Newest events in town" data={events} />
      <SuggestedCourses
        headingPrefix="Newest Courses on"
        category="Node.js"
        data={newCourses}
      />
    </main>
  );
};

export default IndividualAuthenticatedHome;
