import { sliceString } from "@/utilities";

type Props = {
  authors: string[];
};

const SuggestedCourseAuthors = (props: Props) => {
  return (
    <h6 className="text-wrap text-xs capitalize">
      {sliceString(props.authors.join(", "), 30)}
    </h6>
  );
};

export default SuggestedCourseAuthors;
