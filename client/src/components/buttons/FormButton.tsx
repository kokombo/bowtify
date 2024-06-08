type Props = {
  label: string;
  disabled?: boolean;
};

const FormButton = (props: Props) => {
  return (
    <button
      type="submit"
      disabled={props.disabled}
      className="py-5 w-full bg-purple text-white font-semibold text-base"
    >
      {props.label}
    </button>
  );
};

export default FormButton;
