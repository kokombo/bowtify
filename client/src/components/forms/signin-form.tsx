import { PasswordField, TextField } from "../fields";
import { Form, Formik } from "formik";
import type { FormikHelpers } from "formik";
import { signinValidationSchema } from "@/utilities/validation-schemas";
import { FormButton } from "../buttons";
import SigninFormActionBox from "../signin-form-action-box";
import CustomError from "../custom-error";
import { SIGN_IN_FORM } from "@/constants/data";

type Props = {
  initialFormValues: SigninFormType;
  onClickSignin: (
    values: SigninFormType,
    formikHelpers: FormikHelpers<SigninFormType>
  ) => Promise<void>;
  error: string | undefined;
  isLoading: boolean;
};

const SigninForm = (props: Props) => {
  return (
    <Formik
      initialValues={props.initialFormValues}
      onSubmit={props.onClickSignin}
      validationSchema={signinValidationSchema}
      validateOnBlur={false}
      validateOnChange={false}
    >
      <Form className="flex flex-col gap-6">
        <h1 className="text-lg font-bold self-center text-black">
          {SIGN_IN_FORM.heading}
        </h1>

        <TextField
          type="email"
          name="email"
          id="email"
          required={true}
          label="Email"
        />

        <PasswordField />

        {props.error && (
          <CustomError message={props.error} class="self-center" />
        )}

        <FormButton
          label={props.isLoading ? "Signing In..." : "Sign In"}
          disabled={props.isLoading}
        />

        <SigninFormActionBox />
      </Form>
    </Formik>
  );
};

export default SigninForm;
