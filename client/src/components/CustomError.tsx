type Props = {
  message: string | undefined;
};

const CustomError = (props: Props) => {
  return <div className="text-red font-medium text-sm ">{props.message}</div>;
};

export default CustomError;
