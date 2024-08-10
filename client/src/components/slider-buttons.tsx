import { Fragment } from "react";
import type { SetStateAction, Dispatch } from "react";
import { GrPrevious, GrNext } from "react-icons/gr";
import { RoundIconButton } from "./buttons";
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
          <RoundIconButton
            onClick={() =>
              props.setInterval(
                (interval) => interval - props.numberOfDataPerSlider
              )
            }
            icon={GrPrevious}
            className={twMerge(props.prevButtonClass, "-left-4 absolute")}
            ariaLabel="previous slide button"
          />
        )}
      </Fragment>

      <Fragment>
        {props.interval <
          props.numberOfDataPerSlider * props.numberOfAdditionalSlides && (
          <RoundIconButton
            onClick={() =>
              props.setInterval(
                (interval) => interval + props.numberOfDataPerSlider
              )
            }
            icon={GrNext}
            className={twMerge(props.nextButtonClass, "-right-4 absolute")}
            ariaLabel="next slide button"
          />
        )}
      </Fragment>
    </div>
  );
};

export default SliderButtons;
