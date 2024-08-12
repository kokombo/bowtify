import { twMerge } from "tailwind-merge";

type Props = {
  message: string | undefined;
  class?: string;
};

const CustomError = (props: Props) => {
  return (
    <div className={twMerge(props.class, "text-red-600 font-medium text-sm ")}>
      {props.message}
    </div>
  );
};

export default CustomError;
