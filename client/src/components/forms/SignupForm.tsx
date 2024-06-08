import { AxiosError } from "axios";
import { CheckBox, PasswordField, TextField } from "../fields";
import { Form, Formik, FormikHelpers } from "formik";
import { signupValidationSchema } from "@/utilities/validationSchemas";
import { FormButton } from "../buttons";

type Props = {
  initialFormValues: SignupFormType;
  onClickSignup: (
    values: SignupFormType,
    formikHelpers: FormikHelpers<SignupFormType>
  ) => Promise<void>;
  error: AxiosError<AuthErrorResponse> | null;
  isPending: boolean;
  isError: boolean;
  formLabel: string;
};

const SignupForm = (props: Props) => {
  return (
    <div>
      <Formik
        initialValues={props.initialFormValues}
        onSubmit={props.onClickSignup}
        validationSchema={signupValidationSchema}
      >
        <Form className="flex flex-col gap-6">
          <h1 className="text-base font-bold self-center">{props.formLabel}</h1>

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

          <PasswordField name="password" id="password" />

          <CheckBox
            name="subscribeToEmail"
            id="subscribeToEmail"
            label="Send me special offers and personalized tips."
          />

          <FormButton label="Signup" />
        </Form>
      </Formik>
    </div>
  );
};

export default SignupForm;
