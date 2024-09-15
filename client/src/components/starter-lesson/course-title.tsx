type Props = {
  courseTitle: string;
};

const CourseTitle = (props: Props) => {
  return (
    <h5 className="text-gray text-xs font-medium">
      <span className="block text-ellipsis overflow-hidden sm:line-clamp-2 md:line-clamp-1">
        {props.courseTitle}
      </span>
    </h5>
  );
};

export default CourseTitle;
