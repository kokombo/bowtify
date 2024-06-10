type Props = {
  authors: string[];
};

const SuggestedCourseAuthors = (props: Props) => {
  return (
    <h6 className="text-wrap text-xs capitalize">
      {props.authors.join(", ").length > 30
        ? `${props.authors.join(", ").slice(0, 30)}...`
        : props.authors.join(", ")}
    </h6>
  );
};

export default SuggestedCourseAuthors;
