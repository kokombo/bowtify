import { SliderButtons } from "@/components";
import { SuggestedCourseCard } from "@/components/suggested-course";
import { useState } from "react";

type Props = {
  label: string;
  data: Course[] | undefined;
};

const SuggestedCourses = (props: Props) => {
  const [interval, setInterval] = useState<number>(0);

  const numberOfDataPerSlider = 5;

  return (
    <section className="paddingX my-16">
      <h2 className="mb-5 text-2xl font-bold">{props.label}</h2>

      <div className="grid grid-cols-5 gap-3 relative">
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
