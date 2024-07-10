import { sliceString } from "@/utilities";

type Props = {
  courseTitle: string;
};

const CourseTitle = (props: Props) => {
  return (
    <h5 className="text-gray text-xs font-medium">
      {sliceString(props.courseTitle, 25)}
    </h5>
  );
};

export default CourseTitle;
