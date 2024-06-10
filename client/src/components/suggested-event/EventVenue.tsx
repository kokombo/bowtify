import { sliceString } from "@/utilities";
import { IoLocationOutline } from "react-icons/io5";

type Props = {
  location: string;
};

const EventVenue = (props: Props) => {
  return (
    <span className="flex items-center gap-[2px] capitalize">
      <IoLocationOutline className="h-4 w-4" scale={1} />
      <span>{sliceString(props.location, 30)}</span>
    </span>
  );
};

export default EventVenue;
