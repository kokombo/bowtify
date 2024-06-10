type Props = {
  rating: number;
  reviewsLength: number;
};

const SuggestedCourseRating = (props: Props) => {
  return (
    <span className="text-sm">
      <span className="font-bold">{props.rating.toFixed(1)}</span>{" "}
      <span className="text-xs">
        (<span>{props.reviewsLength.toLocaleString()}</span>)
      </span>
    </span>
  );
};

export default SuggestedCourseRating;
