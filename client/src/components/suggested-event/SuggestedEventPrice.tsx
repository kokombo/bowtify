import { Fragment } from "react";

type Props = {
  price?: number;
  isPaidEvent: boolean;
};

const SuggestedEventPrice = (props: Props) => {
  return (
    <Fragment>
      {props.isPaidEvent ? (
        <span className="flex flex-col items-center">
          <span className="text-[8px] font-extrabold italic">starts at</span>
          <span className="font-bold italic text-pink-500">
            &#8358;{props.price?.toLocaleString()}
          </span>
        </span>
      ) : (
        <span className="font-bold italic text-pink-500">FREE</span>
      )}
    </Fragment>
  );
};

export default SuggestedEventPrice;
