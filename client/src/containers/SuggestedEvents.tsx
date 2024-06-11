import { SliderButtons } from "@/components";
import { SuggestedEventCard } from "@/components/suggested-event";
import Link from "next/link";
import { useState } from "react";

type Props = {
  label: string;
  data: EventType[];
};

const SuggestedEvents = (props: Props) => {
  const [interval, setInterval] = useState<number>(0);

  const numberOfDataPerSlider = 3;

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

      <div className="grid grid-cols-3 gap-4 relative">
        {props.data
          .slice(0 + interval, numberOfDataPerSlider + interval)
          .map((event) => (
            <SuggestedEventCard key={event.id} event={event} />
          ))}

        <SliderButtons
          setInterval={setInterval}
          interval={interval}
          numberOfAdditionalSlides={1}
          prevButtonClass="top-1/2 -translate-y-1/2"
          nextButtonClass="top-1/2 -translate-y-1/2"
          numberOfDataPerSlider={numberOfDataPerSlider}
        />
      </div>
    </section>
  );
};

export default SuggestedEvents;
