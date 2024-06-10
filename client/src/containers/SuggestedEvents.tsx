import { SuggestedEventCard } from "@/components/suggested-event";
import Link from "next/link";

type Props = {
  label: string;
  data: EventType[];
};

const SuggestedEvents = (props: Props) => {
  return (
    <section className="paddingX my-16">
      <div className="flex items-center justify-between mb-5">
        <h4 className="text-2xl font-bold">{props.label}</h4>

        <Link
          href=""
          className="text-pink-500 underline font-bold underline-offset-4"
        >
          More Events
        </Link>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {props.data.map((event) => (
          <SuggestedEventCard key={event.id} event={event} />
        ))}
      </div>
    </section>
  );
};

export default SuggestedEvents;
