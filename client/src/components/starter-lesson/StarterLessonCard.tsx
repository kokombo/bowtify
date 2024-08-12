import Link from "next/link";
import CourseTitle from "./course-title";
import LessonTitle from "./LessonTitle";
import StarterLessonImage from "./StarterLessonImage";
import Duration from "../formatted-duration";

type Props = {
  lesson: Lesson;
};

const StarterLessonCard = (props: Props) => {
  return (
    <Link href="">
      <article className="h-[160px] border-1 border-grey flex w-full">
        <StarterLessonImage url={props.lesson.video_url} />

        <article className="px-3 py-2 flex flex-col justify-between">
          <span className="flex flex-col gap-1">
            <CourseTitle courseTitle={props.lesson.courseTitle} />

            <LessonTitle title={props.lesson.title} />
          </span>

          <span className="text-xs flex gap-2">
            <h5 className="font-medium">Lesson</h5>
            <Duration duration={props.lesson.duration} showDot />
          </span>
        </article>
      </article>
    </Link>
  );
};

export default StarterLessonCard;
