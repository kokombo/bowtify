"use client";

import { SigninForm } from "@/components/forms";
import { FormikHelpers } from "formik";

const initialFormValues: SigninFormType = {
  email: "",
  password: "",
};

const Login = () => {
  const signin = async (
    values: SigninFormType,
    formikHelpers: FormikHelpers<SigninFormType>
  ) => {
    console.log(values);
  };

  return (
    <main className="grid place-items-center py-12">
      <SigninForm
        initialFormValues={initialFormValues}
        isError={false}
        isPending={false}
        error={null}
        onClickSignin={signin}
      />
    </main>
  );
};

export default Login;
