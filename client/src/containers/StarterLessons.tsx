import { StarterLessonCard } from "@/components/starter-lesson";
import { useCurrentUser } from "@/hooks";
import Link from "next/link";
import { starterLessons } from "../../dummy";

const StarterLessons = () => {
  const { user } = useCurrentUser();

  return (
    <section className="paddingX py-10">
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

      <div className="grid grid-cols-3 gap-4">
        {starterLessons.map((lesson) => (
          <StarterLessonCard key={lesson.id} lesson={lesson} />
        ))}
      </div>
    </section>
  );
};

export default StarterLessons;
