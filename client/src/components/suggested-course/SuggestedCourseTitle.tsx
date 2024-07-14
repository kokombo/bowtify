import { sliceString } from "@/utilities";

type Props = {
  title: string;
};

const SuggestedCourseTitle = (props: Props) => {
  return (
    <span>
      <h4 className="hidden md:inline text-wrap text-base lg:text-lg leading-tight font-bold capitalize">
        {sliceString(props.title, 40)}
      </h4>

      <h4 className="inline md:hidden text-wrap text-base lg:text-lg leading-tight font-bold capitalize">
        {sliceString(props.title, 30)}
      </h4>
    </span>
  );
};

export default SuggestedCourseTitle;
