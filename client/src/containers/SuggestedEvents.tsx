import { SuggestedEventCard } from "@/components/suggested-event";
import Link from "next/link";
import { events } from "../../dummy";

type Props = {
  label: string;
};

const SuggestedEvents = (props: Props) => {
  return (
    <section className="paddingX y-10">
      <div className="flex items-center justify-between mb-5">
        <h4 className="text-2xl font-bold">{props.label}</h4>

        <Link
          href=""
          className="text-purple underline font-bold underline-offset-4"
        >
          More Events
        </Link>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {events.map((event) => (
          <SuggestedEventCard key={event.id} event={event} />
        ))}
      </div>
    </section>
  );
};

export default SuggestedEvents;
