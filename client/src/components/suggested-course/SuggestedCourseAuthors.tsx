type Props = {
  authors: string[];
};

const SuggestedCourseAuthors = (props: Props) => {
  return (
    <span>
      <h6 className="text-xs capitalize">
        <span className="block text-ellipsis overflow-hidden sm:line-clamp-2 md:line-clamp-1">
          {props.authors.join(", ")}
        </span>
      </h6>
    </span>
  );
};

export default SuggestedCourseAuthors;
