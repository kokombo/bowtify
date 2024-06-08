type Props = {
  label: string;
};

const FormButton = (props: Props) => {
  return (
    <button
      type="submit"
      className="py-5 w-full bg-purple text-white font-semibold text-base"
    >
      {props.label}
    </button>
  );
};

export default FormButton;
