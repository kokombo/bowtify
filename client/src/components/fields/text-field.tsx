import { Field, ErrorMessage } from "formik";
import type { FieldProps } from "formik";

type Props = {
  name: string;
  id: string;
  type: "email" | "password" | "text" | "number";
  disabled?: boolean;
  autoComplete?: "on" | "off";
  maxLength?: number;
  required: boolean;
  label?: string;
};

const TextField = (props: Props) => {
  return (
    <div>
      <Field name={props.name} id={props.id}>
        {({ field }: FieldProps) => {
          return (
            <div className="relative border-black border-1 w-full">
              <label
                htmlFor={props.id}
                className="text-sm font-bold absolute left-3 top-1 text-black"
              >
                {props.label}
              </label>

              <input
                {...field}
                className="w-[400px] max-w-[90vw] h-16 px-3 pt-6 pb-2 outline-none text-black"
                type={props.type}
                autoComplete={props.autoComplete}
                disabled={props.disabled}
                maxLength={props.maxLength}
                required={props.required}
              />
            </div>
          );
        }}
      </Field>

      <ErrorMessage
        name={props.name}
        component="div"
        id={props.id}
        className="text-red-700 font-medium text-xs absolute"
      />
    </div>
  );
};

export default TextField;
