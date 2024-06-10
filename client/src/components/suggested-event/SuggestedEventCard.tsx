import Link from "next/link";
import SuggestedEventImage from "./SuggestedEventImage";
import SuggestedEventTitle from "./SuggestedEventTitle";
import { EventTypeTag } from "../tags";
import EventVenue from "./EventVenue";
import EventDate from "./EventDate";
import EventTime from "./EventTime";

type Props = {
  event: EventType;
};

const SuggestedEventCard = (props: Props) => {
  return (
    <Link href="">
      <article className="h-[160px] border-1 border-grey flex w-full">
        <SuggestedEventImage image={props.event.image} alt={props.event.name} />

        <article className="px-3 py-2 flex flex-col justify-between">
          <span className="flex flex-col gap-1">
            <div className="flex items-center gap-1">
              {props.event.tags.map((tag, index) => (
                <EventTypeTag key={index} label={tag} />
              ))}
            </div>

            <SuggestedEventTitle title={props.event.name} />
          </span>

          <span className="text-xs flex gap-2">
            <EventVenue location={props.event.location} />
          </span>

          <span className="text-xs flex gap-2">
            <EventDate date={props.event.date} />

            <EventTime time={props.event.time} />
          </span>
        </article>
      </article>
    </Link>
  );
};

export default SuggestedEventCard;
