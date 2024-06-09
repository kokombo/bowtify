import { StarterCourseCard } from "@/components/course-cards";
import { useCurrentUser } from "@/hooks";
import Link from "next/link";

const StarterCourses = () => {
  const { user } = useCurrentUser();

  return (
    <section className="paddingX py-10">
      <div className="flex items-center justify-between mb-8">
        <h4 className="text-3xl font-bold">
          Let{"'"}s start learning, {user?.first_name}
        </h4>

        <Link
          href=""
          className="text-purple underline font-bold underline-offset-4"
        >
          My learning
        </Link>
      </div>

      <div className="flex gap-4">
        {[...Array(3)].map((_, index) => (
          <StarterCourseCard key={index} />
        ))}
      </div>
    </section>
  );
};

export default StarterCourses;
