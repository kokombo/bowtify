import { IoLocationOutline } from "react-icons/io5";

type Props = {
  location: string;
};

const EventVenue = (props: Props) => {
  return (
    <span className="flex items-center gap-[2px] capitalize">
      <IoLocationOutline className="h-4 w-4" scale={1} />

      <span className="block text-ellipsis overflow-hidden sm:line-clamp-2 md:line-clamp-1">
        {props.location}
      </span>
    </span>
  );
};

export default EventVenue;
