import { Fragment } from "react";
import type { SetStateAction, Dispatch } from "react";
import { GrPrevious, GrNext } from "react-icons/gr";
import { RoundedIconButton } from "./buttons";
import { twMerge } from "tailwind-merge";

type Props = {
  setInterval: Dispatch<SetStateAction<number>>;
  prevButtonClass: string;
  nextButtonClass: string;
  numberOfDataPerSlider: number;
  interval: number;
  numberOfAdditionalSlides: number;
};

const SliderButtons = (props: Props) => {
  return (
    <div className="hidden lg:inline">
      <Fragment>
        {props.interval >= props.numberOfDataPerSlider && (
          <RoundedIconButton
            onClick={() =>
              props.setInterval(
                (interval) => interval - props.numberOfDataPerSlider
              )
            }
            icon={GrPrevious}
            classes={twMerge(props.prevButtonClass, "-left-4 absolute")}
          />
        )}
      </Fragment>

      <Fragment>
        {props.interval <
          props.numberOfDataPerSlider * props.numberOfAdditionalSlides && (
          <RoundedIconButton
            onClick={() =>
              props.setInterval(
                (interval) => interval + props.numberOfDataPerSlider
              )
            }
            icon={GrNext}
            classes={twMerge(props.nextButtonClass, "-right-4 absolute")}
          />
        )}
      </Fragment>
    </div>
  );
};

export default SliderButtons;
