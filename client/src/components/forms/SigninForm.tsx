import { AxiosError } from "axios";
import { PasswordField, TextField } from "../fields";
import { Form, Formik, FormikHelpers } from "formik";
import { signinValidationSchema } from "@/utilities/validationSchemas";
import { FormButton } from "../buttons";
import SigninFormActionBox from "../SigninFormActionBox";

type Props = {
  initialFormValues: SigninFormType;
  onClickSignin: (
    values: SigninFormType,
    formikHelpers: FormikHelpers<SigninFormType>
  ) => Promise<void>;
  error: AxiosError<AuthErrorResponse> | null;
  isPending: boolean;
  isError: boolean;
};

const SignupForm = (props: Props) => {
  return (
    <div>
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

          <PasswordField name="password" id="password" />

          <FormButton label="Signup" />

          <SigninFormActionBox />
        </Form>
      </Formik>
    </div>
  );
};

export default SignupForm;
