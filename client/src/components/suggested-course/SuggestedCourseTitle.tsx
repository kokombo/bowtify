type Props = {
  title: string;
};

const SuggestedCourseTitle = (props: Props) => {
  return (
    <h4 className="text-wrap text-lg leading-tight font-bold capitalize">
      {props.title.length > 40 ? `${props.title.slice(0, 40)}...` : props.title}
    </h4>
  );
};

export default SuggestedCourseTitle;
