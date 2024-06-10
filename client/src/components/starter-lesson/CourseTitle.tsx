type Props = {
  courseTitle: string;
};

const CourseTitle = (props: Props) => {
  return (
    <h5 className="text-gray text-xs font-medium">
      {props.courseTitle.length > 25
        ? `${props.courseTitle.slice(0, 25)}...`
        : props.courseTitle}
    </h5>
  );
};

export default CourseTitle;
