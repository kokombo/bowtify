import { PasswordField, TextField } from "../fields";
import { Form, Formik, FormikHelpers } from "formik";
import { signinValidationSchema } from "@/utilities/validationSchemas";
import { FormButton } from "../buttons";
import SigninFormActionBox from "../SigninFormActionBox";
import CustomError from "../CustomError";

type Props = {
  initialFormValues: SigninFormType;
  onClickSignin: (
    values: SigninFormType,
    formikHelpers: FormikHelpers<SigninFormType>
  ) => Promise<void>;
  error: string;
  isLoading: boolean;
};

const SigninForm = (props: Props) => {
  return (
    <Formik
      initialValues={props.initialFormValues}
      onSubmit={props.onClickSignin}
      validationSchema={signinValidationSchema}
      validateOnBlur={false}
    >
      <Form className="flex flex-col gap-6">
        <h1 className="text-base font-bold self-center">
          Sign in to your Bowtify Account
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