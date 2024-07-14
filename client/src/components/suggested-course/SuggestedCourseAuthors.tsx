import { sliceString } from "@/utilities";

type Props = {
  authors: string[];
};

const SuggestedCourseAuthors = (props: Props) => {
  return (
    <span>
      <h6 className="hidden md:inline text-wrap text-xs capitalize">
        {sliceString(props.authors.join(", "), 30)}
      </h6>

      <h6 className="inline md:hidden text-wrap text-xs capitalize">
        {sliceString(props.authors.join(", "), 25)}
      </h6>
    </span>
  );
};

export default SuggestedCourseAuthors;
