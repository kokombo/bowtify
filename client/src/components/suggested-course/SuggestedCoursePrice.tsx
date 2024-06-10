type Props = {
  price: number;
};

const SuggestedCoursePrice = (props: Props) => {
  return (
    <h4 className="text-lg font-bold">&#8358;{props.price.toLocaleString()}</h4>
  );
};

export default SuggestedCoursePrice;
