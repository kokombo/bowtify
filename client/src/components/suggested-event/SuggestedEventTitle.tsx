import { sliceString } from "@/utilities";

type Props = {
  title: string;
};

const SuggestedEventTitle = (props: Props) => {
  return (
    <h5 className="text-base font-semibold text-wrap leading-tight capitalize">
      {sliceString(props.title, 20)}
    </h5>
  );
};

export default SuggestedEventTitle;
