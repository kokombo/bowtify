import { formatDuration } from "@/utilities";

type Props = {
  duration: number;
  showDot: boolean;
};

const Duration = (props: Props) => {
  return (
    <h5 className="font-light">
      {props.showDot && <span>&#8226;</span>} {formatDuration(props.duration)}
    </h5>
  );
};

export default Duration;
