import { twMerge } from "tailwind-merge";

type Props = {
  label: string;
  classes: string;
};

const TagCard = (props: Props) => {
  return (
    <span
      className={twMerge(
        "w-fit py-1 px-3 text-xs text-white font-light",
        props.classes
      )}
    >
      {props.label}
    </span>
  );
};

export default TagCard;
