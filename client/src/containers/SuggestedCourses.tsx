import { SuggestedCourseCard } from "@/components/suggested-course";

type Props = {
  label: string;
  data: Course[] | undefined;
};

const SuggestedCourses = (props: Props) => {
  return (
    <section className="paddingX py-10">
      <h2 className="mb-5 text-2xl font-bold">{props.label}</h2>

      <div className="grid grid-cols-5 gap-3">
        {props.data?.map((course) => {
          return <SuggestedCourseCard key={course.id} course={course} />;
        })}
      </div>
    </section>
  );
};

export default SuggestedCourses;
