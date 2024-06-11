import { StarterLessonCard } from "@/components/starter-lesson";
import { useCurrentUser } from "@/hooks";
import Link from "next/link";
import { starterLessons } from "../../dummy";
import { useState } from "react";
import { SliderButtons } from "@/components";

const StarterLessons = () => {
  const { user } = useCurrentUser();
  const [interval, setInterval] = useState<number>(0);

  return (
    <section className="paddingX my-16">
      <div className="flex items-center justify-between mb-8">
        <h4 className="text-3xl font-bold">
          Let{"'"}s start learning, {user?.first_name}
        </h4>

        <Link
          href=""
          className="text-pink-500 underline font-bold underline-offset-4"
        >
          My learning
        </Link>
      </div>

      <div className="grid grid-cols-3 gap-4 relative">
        {starterLessons.slice(0 + interval, 3 + interval).map((lesson) => {
          return <StarterLessonCard key={lesson.id} lesson={lesson} />;
        })}

        <SliderButtons
          setInterval={setInterval}
          showPrevButton={interval >= 3}
          showNextButton={interval < 6}
          prevButtonClass="top-1/2 -translate-y-1/2"
          nextButtonClass="top-1/2 -translate-y-1/2"
        />
      </div>
    </section>
  );
};

export default StarterLessons;
