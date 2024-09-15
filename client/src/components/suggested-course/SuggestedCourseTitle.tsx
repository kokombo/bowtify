type Props = {
  title: string;
};

const SuggestedCourseTitle = (props: Props) => {
  return (
    <span>
      <h4 className="text-base lg:text-lg leading-tight font-bold capitalize">
        <span className="block text-ellipsis overflow-hidden sm:line-clamp-2 md:line-clamp-1">
          {props.title}
        </span>
      </h4>
    </span>
  );
};

export default SuggestedCourseTitle;
