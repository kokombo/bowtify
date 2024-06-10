import Link from "next/link";
import SuggestedEventImage from "./SuggestedEventImage";
import SuggestedEventTitle from "./SuggestedEventTitle";
import { EventTypeTag } from "../tags";
import { IoLocation } from "react-icons/io5";
import { CgCalendarDates } from "react-icons/cg";
import { MdOutlineAccessTime } from "react-icons/md";
import EventVenue from "./EventVenue";
import EventDate from "./EventDate";
import EventTime from "./EventTime";

const SuggestedEventCard = () => {
  return (
    <Link href="">
      <article className="h-[160px] border-1 border-grey flex w-full">
        <SuggestedEventImage
          image="https://res.cloudinary.com/dillfekiy/image/upload/v1710676081/product-images/w9dved8rxj6wt8p1czfq.jpg"
          title="Davido Musical concert"
        />

        <article className="px-3 py-2 flex flex-col justify-between">
          <span className="flex flex-col gap-1">
            <EventTypeTag label="Music" />

            <SuggestedEventTitle title="Davido Musical concert Fela Shrine Fela Shrine Fela Shrine Fela Shrine" />
          </span>

          <span className="text-xs flex gap-2">
            <EventVenue location="Victoria Island, Lagos" />
          </span>

          <span className="text-xs flex gap-2">
            <EventDate date={new Date().toLocaleDateString()} />

            <EventTime time={new Date().toLocaleTimeString()} />
          </span>
        </article>
      </article>
    </Link>
  );
};

export default SuggestedEventCard;
