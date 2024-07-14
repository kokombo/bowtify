"use client";
import { SliderButtons } from "@/components";
import { SuggestedEventCard } from "@/components/suggested-event";
import Link from "next/link";
import { useState } from "react";

type Props = {
  heading: string;
  data: EventType[];
};

const SuggestedEvents = (props: Props) => {
  const [interval, setInterval] = useState<number>(0);
  const numberOfDataPerSlider = 3;

  return (
    <section className="paddingX my-12 lg:my-16">
      <div className="flex items-center justify-between gap-3 mb-5">
        <h4 className="text-xl md:text-2xl font-bold">{props.heading}</h4>

        <Link
          href=""
          className="text-pink-500 underline text-sm md:text-base font-bold underline-offset-4"
        >
          More Events
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 lg:gap-y-0 gap-4 relative">
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
