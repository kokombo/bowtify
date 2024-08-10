import type { IconType } from "react-icons";
import MyIcon from "../my-icon";
import { twMerge } from "tailwind-merge";

type Props = {
  icon: IconType;
  onClick: () => void;
  className: string;
  ariaLabel: string;
};

const RoundIconButton = ({ icon, onClick, className, ariaLabel }: Props) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={twMerge(
        " bg-black p-2 md:p-3 z-[1000px] rounded-full text-white",
        className
      )}
      aria-label={ariaLabel}
    >
      <MyIcon icon={icon} />
    </button>
  );
};

export default RoundIconButton;
