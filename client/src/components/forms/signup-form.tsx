import { CheckBox, PasswordField, TextField } from "../fields";
import { Form, Formik } from "formik";
import type { FormikHelpers } from "formik";
import { signupValidationSchema } from "@/utilities/validation-schemas";
import { FormButton } from "../buttons";
import { SUBSCRIBE_TO_EMAIL } from "@/constants/data";
import SignupFormPolicy from "../signup-form-policy";
import Divider from "../Divider";
import SignupFormActionBox from "../signup-form-action-box";
import CustomError from "../custom-error";

type Props = {
  initialFormValues: SignupFormType;
  onClickSignup: (
    values: SignupFormType,
    formikHelpers: FormikHelpers<SignupFormType>
  ) => Promise<void>;
  error: string | undefined;
  isPending: boolean;
  isError: boolean;
  formLabel: string;
};

const SignupForm = (props: Props) => {
  return (
    <Formik
      initialValues={props.initialFormValues}
      onSubmit={props.onClickSignup}
      validationSchema={signupValidationSchema}
      validateOnBlur={false}
      validateOnChange={false}
    >
      <Form className="flex flex-col gap-6">
        <h1 className="text-lg font-bold self-center text-black">
          {props.formLabel}
        </h1>

        <TextField
          type="text"
          name="firstName"
          id="firstName"
          required={true}
          label="First name"
        />

        <TextField
          type="text"
          name="lastName"
          id="lastName"
          required={true}
          label="Last name"
        />

        <TextField
          type="email"
          name="email"
          id="email"
          required={true}
          label="Email"
        />

        <PasswordField />

        <CheckBox
          name="subscribeToEmail"
          id="subscribeToEmail"
          label={
            props.initialFormValues.accountType === "individual"
              ? SUBSCRIBE_TO_EMAIL.individual
              : SUBSCRIBE_TO_EMAIL.business
          }
        />

        {props.error && (
          <CustomError message={props.error} class="self-center" />
        )}

        <FormButton
          label={props.isPending ? "Signing Up..." : "Sign Up"}
          disabled={props.isPending}
        />

        <SignupFormPolicy />

        <Divider />

        <SignupFormActionBox />
      </Form>
    </Formik>
  );
};

export default SignupForm;
