import { Checkbox } from "@nextui-org/react";
import { Field, FieldProps } from "formik";

type Props = {
  name: string;
  id: string;
  label?: string;
};

const CheckBox = (props: Props) => {
  return (
    <Field name={props.name} id={props.id}>
      {({ field }: FieldProps) => {
        return (
          <span>
            <label htmlFor={props.id}></label>
            <Checkbox
              defaultSelected
              {...field}
              radius="none"
              className="w-[400px] text-xs"
            >
              <span className="text-sm  font-medium">{props.label}</span>
            </Checkbox>
          </span>
        );
      }}
    </Field>
  );
};

export default CheckBox;
