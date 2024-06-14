import { twMerge } from "tailwind-merge";

type Props = {
  label: string;
  disabled?: boolean;
};

const FormButton = (props: Props) => {
  return (
    <button
      type="submit"
      disabled={props.disabled}
      className={twMerge(
        "py-5 w-full bg-purple text-white font-semibold text-base",
        props.disabled && "cursor-not-allowed"
      )}
    >
      {props.label}
    </button>
  );
};

export default FormButton;
