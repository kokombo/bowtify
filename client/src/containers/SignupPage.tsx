"use client";

import { SignupForm } from "@/components/forms";
import { FormikHelpers } from "formik";

type Props = {
  formLabel: string;
  accountType: string;
};

const SignupPage = (props: Props) => {
  const initialFormValues: SignupFormType = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    subscribeToEmail: true,
    accountType: props.accountType,
  };

  const signup = async (
    values: SignupFormType,
    formikHelpers: FormikHelpers<SignupFormType>
  ) => {};

  return (
    <main className="grid place-items-center py-12">
      <SignupForm
        initialFormValues={initialFormValues}
        isError={false}
        isPending={false}
        formLabel={props.formLabel}
        error={null}
        onClickSignup={signup}
      />
    </main>
  );
};

export default SignupPage;
