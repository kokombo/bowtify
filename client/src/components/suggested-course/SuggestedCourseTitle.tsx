import { sliceString } from "@/utilities";

type Props = {
  title: string;
};

const SuggestedCourseTitle = (props: Props) => {
  return (
    <h4 className="text-wrap text-base lg:text-lg leading-tight font-bold capitalize">
      {sliceString(props.title, 40)}
    </h4>
  );
};

export default SuggestedCourseTitle;
