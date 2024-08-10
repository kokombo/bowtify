"use client";
import { SliderButtons } from "@/components";
import { SuggestedCourseCard } from "@/components/suggested-course";
import { useNumberOfDataPerSlider } from "@/hooks";
import { useState } from "react";

type Props = {
  headingPrefix: string;
  category?: string;
  data: Course[] | undefined;
};

const SuggestedCourses = (props: Props) => {
  const [interval, setInterval] = useState<number>(0);
  const numberOfDataPerSlider = useNumberOfDataPerSlider(6, 5);

  return (
    <section className="paddingX my-16">
      <h2 className="mb-5 text-xl md:text-2xl font-bold">
        {props.headingPrefix}{" "}
        <span className="text-pink-500">{props.category}</span>
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-3 gap-y-6 lg:gap-y-0 relative">
        {props.data
          ?.slice(0 + interval, numberOfDataPerSlider + interval)
          .map((course) => {
            return <SuggestedCourseCard key={course.id} course={course} />;
          })}

        <SliderButtons
          setInterval={setInterval}
          interval={interval}
          numberOfAdditionalSlides={1}
          prevButtonClass="top-14"
          nextButtonClass="top-14"
          numberOfDataPerSlider={numberOfDataPerSlider}
        />
      </div>
    </section>
  );
};

export default SuggestedCourses;
