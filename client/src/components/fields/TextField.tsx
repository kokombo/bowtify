import { Field, ErrorMessage, FieldProps } from "formik";

type Props = {
  name: string;
  id: string;
  type: "email" | "password" | "text" | "number";
  placeholder?: string;
  disabled?: boolean;
  autoComplete?: "on" | "off";
  maxLength?: number;
  extraClasses?: string;
  labelVisible?: boolean;
};

const TextField = (props: Props) => {
  return (
    <div className={props.extraClasses}>
      <Field name={props.name} id={props.id}>
        {({ field }: FieldProps) => {
          return (
            <span>
              <label htmlFor={props.name}>{props.placeholder}</label>

              <input
                {...field}
                className=" border-chalk border-[1px] rounded-lg w-full px-4 py-3 text-sm lg:text-base"
                type={props.type}
                placeholder={props.placeholder}
                autoComplete={props.autoComplete}
                disabled={props.disabled}
                maxLength={props.maxLength}
              />
            </span>
          );
        }}
      </Field>

      <ErrorMessage
        name={props.name}
        component="div"
        id={props.id}
        className="text-red-700 text-xs font-semibold md:text-sm"
      />
    </div>
  );
};

export default TextField;
