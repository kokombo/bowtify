import Link from "next/link";
import { BestSellerTag, NewCourseTag } from "../tags";
import SuggestedCourseThumbnail from "./SuggestedCourseThumbnail";
import SuggestedCourseTitle from "./SuggestedCourseTitle";
import SuggestedCourseAuthors from "./SuggestedCourseAuthors";
import SuggestedCourseRating from "./SuggestedCourseRating";
import SuggestedCoursePrice from "./SuggestedCoursePrice";

type Props = {
  course: Course;
};

const SuggestedCourseCard = (props: Props) => {
  return (
    <Link href="#">
      <article>
        <SuggestedCourseThumbnail
          thumbNail={props.course.thumbNail}
          title={props.course.title}
        />

        <article className="flex flex-col gap-1">
          <SuggestedCourseTitle title={props.course.title} />

          <SuggestedCourseAuthors authors={props.course.authors} />

          <SuggestedCourseRating
            rating={props.course.rating}
            reviewsLength={props.course.reviewsLength}
          />

          <SuggestedCoursePrice price={props.course.price} />

          <span className="flex gap-1">
            {props.course.isBestSeller && <BestSellerTag />}

            {props.course.isNewCourse && <NewCourseTag />}
          </span>
        </article>
      </article>
    </Link>
  );
};

export default SuggestedCourseCard;
