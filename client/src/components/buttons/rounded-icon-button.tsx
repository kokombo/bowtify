import type { IconType } from "react-icons";
import MyIcon from "../my-icon";
import { twMerge } from "tailwind-merge";

type Props = {
  icon: IconType;
  onClick: () => void;
  classes: string;
};

const RoundedIconButton = (props: Props) => {
  return (
    <button
      type="button"
      onClick={props.onClick}
      className={twMerge(
        " bg-black p-3 z-[1000px] rounded-full text-white",
        props.classes
      )}
    >
      <MyIcon icon={props.icon} />
    </button>
  );
};

export default RoundedIconButton;
