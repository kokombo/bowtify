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
  isIndividualAccount: boolean;
};

const IndividualAuthenticatedHome = ({
  session,
  isIndividualAccount,
}: Props) => {
  return (
    <main>
      <HomeNavigationBar
        isIndividualAccount={isIndividualAccount}
        session={session}
      />
      <ProfileBanner session={session} />
      <BillBoard />
      <StarterLessons
        heading={` Let's start learning, ${session?.user.firstName}`}
        linkHref=""
        linkLabel="My Learning"
        data={starterLessons}
      />
      <SuggestedCourses
        heading="Because you searched for Front-end Development"
        data={suggestedCourses}
      />
      <SuggestedEvents
        heading="Discover latest events & happenings"
        data={events}
      />
      <SuggestedCourses
        heading='Because you viewed "Data Science"'
        data={suggestedCourses}
      />
      <SuggestedCourses
        heading="Learners are viewings"
        data={suggestedCourses}
      />
      <SuggestedCourses
        heading="Top courses in Backend Development"
        data={suggestedCourses}
      />
      <SuggestedEvents heading="Newest events in town" data={events} />
      <SuggestedCourses heading="Newest Courses on Node.js" data={newCourses} />
    </main>
  );
};

export default IndividualAuthenticatedHome;
