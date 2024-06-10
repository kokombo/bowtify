import { MdOutlineAccessTime } from "react-icons/md";

type Props = {
  time: string;
};

const EventTime = (props: Props) => {
  return (
    <span className="flex items-center gap-[2px]">
      <MdOutlineAccessTime className="h-4 w-4" /> <span>{props.time}</span>
    </span>
  );
};

export default EventTime;
