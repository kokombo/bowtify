import { twMerge } from "tailwind-merge";

type Props = {
  label: string;
  disabled?: boolean;
};

const FormButton = ({ label, disabled }: Props) => {
  return (
    <button
      type="submit"
      aria-disabled={disabled}
      className={twMerge(
        "py-5 w-full bg-purple text-white font-semibold text-base",
        disabled && "cursor-not-allowed"
      )}
    >
      {label}
    </button>
  );
};

export default FormButton;
