import { Dispatch, Fragment, SetStateAction } from "react";
import { GrPrevious, GrNext } from "react-icons/gr";
import { RoundedIconButton } from "./buttons";
import { twMerge } from "tailwind-merge";

type Props = {
  setInterval: Dispatch<SetStateAction<number>>;
  showPrevButton: boolean;
  showNextButton: boolean;
  prevButtonClass: string;
  nextButtonClass: string;
};

const SliderButtons = (props: Props) => {
  return (
    <Fragment>
      <Fragment>
        {props.showPrevButton && (
          <RoundedIconButton
            onClick={() => props.setInterval((interval) => interval - 3)}
            icon={GrPrevious}
            classes={twMerge(props.prevButtonClass, "-left-4 ")}
          />
        )}
      </Fragment>

      <Fragment>
        {props.showNextButton && (
          <RoundedIconButton
            onClick={() => props.setInterval((interval) => interval + 3)}
            icon={GrNext}
            classes={twMerge(props.nextButtonClass, "-right-4 ")}
          />
        )}
      </Fragment>
    </Fragment>
  );
};

export default SliderButtons;
