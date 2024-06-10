import { CgCalendarDates } from "react-icons/cg";

type Props = {
  date: string;
};

const EventDate = (props: Props) => {
  return (
    <span className="flex items-center gap-[2px]">
      <CgCalendarDates className="h-4 w-4" /> <span>{props.date}</span>
    </span>
  );
};

export default EventDate;
