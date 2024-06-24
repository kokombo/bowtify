import { StarterLessonCard } from "@/components/starter-lesson";
import Link from "next/link";
import { useState } from "react";
import { SliderButtons } from "@/components";

type Props = {
  heading: string;
  linkLabel: string;
  linkHref: string;
  data: Lesson[];
};

const StarterLessons = (props: Props) => {
  const [interval, setInterval] = useState<number>(0);

  const numberOfDataPerSlider = 3;

  return (
    <section className="paddingX my-8 lg:my-16">
      <div className="flex items-center justify-between gap-3 mb-8">
        <h4 className="text-2xl md:text-3xl font-bold">{props.heading}</h4>

        <Link
          href={props.linkHref}
          className="text-pink-500 underline text-sm md:text-lg font-bold underline-offset-4"
        >
          {props.linkLabel}
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 relative">
        {props.data
          .slice(0 + interval, numberOfDataPerSlider + interval)
          .map((lesson) => {
            return <StarterLessonCard key={lesson.id} lesson={lesson} />;
          })}

        <SliderButtons
          setInterval={setInterval}
          interval={interval}
          numberOfAdditionalSlides={2}
          prevButtonClass="top-1/2 -translate-y-1/2"
          nextButtonClass="top-1/2 -translate-y-1/2"
          numberOfDataPerSlider={numberOfDataPerSlider}
        />
      </div>
    </section>
  );
};

export default StarterLessons;
