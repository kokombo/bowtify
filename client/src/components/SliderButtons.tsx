import { Dispatch, Fragment, SetStateAction } from "react";
import { GrPrevious, GrNext } from "react-icons/gr";
import { RoundedIconButton } from "./buttons";

type Props = {
  interval: number;
  setInterval: Dispatch<SetStateAction<number>>;
};

const SliderButtons = (props: Props) => {
  return (
    <Fragment>
      <Fragment>
        {props.interval >= 3 && (
          <RoundedIconButton
            onClick={() => props.setInterval((interval) => interval - 3)}
            icon={GrPrevious}
            classes="-left-4"
          />
        )}
      </Fragment>

      <Fragment>
        {props.interval < 6 && (
          <RoundedIconButton
            onClick={() => props.setInterval((interval) => interval + 3)}
            icon={GrNext}
            classes="-right-4"
          />
        )}
      </Fragment>
    </Fragment>
  );
};

export default SliderButtons;
