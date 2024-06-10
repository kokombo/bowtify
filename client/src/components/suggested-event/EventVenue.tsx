import { IoLocation } from "react-icons/io5";

type Props = {
  location: string;
};

const EventVenue = (props: Props) => {
  return (
    <span className="flex items-center gap-[2px]">
      <IoLocation className="h-4 w-4" scale={1} />
      <span>{props.location} </span>
    </span>
  );
};

export default EventVenue;
