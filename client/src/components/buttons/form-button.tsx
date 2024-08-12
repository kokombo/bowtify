import { twMerge } from "tailwind-merge";

type Props = {
  children: React.ReactNode;
  disabled?: boolean;
};

const FormButton = ({ children, disabled }: Props) => {
  return (
    <button
      type="submit"
      aria-disabled={disabled}
      className={twMerge(
        "py-5 w-full bg-purple text-white font-semibold text-base",
        disabled && "cursor-not-allowed"
      )}
    >
      {children}
    </button>
  );
};

export default FormButton;
