"use client";

import { SignupForm } from "@/components/forms";
import { apiBaseUrl } from "@/constants/data";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { FormikHelpers } from "formik";
import { signIn } from "next-auth/react";

type Props = {
  formLabel: string;
  accountType: string;
  callbackUrl: string;
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

  const signupRequest = async (formData: SignupFormType) => {
    const res = await axios.post(apiBaseUrl + "/auth/signup", formData);

    return res.data;
  };

  const { mutateAsync, data, isError, isPending, error } = useMutation<
    AuthDataResponse,
    AxiosError<AuthErrorResponse>,
    SignupFormType
  >({
    mutationKey: ["signup"],
    mutationFn: signupRequest,
  });

  const signup = async (
    values: SignupFormType,
    onsubmitProps: FormikHelpers<SignupFormType>
  ) => {
    await mutateAsync({ ...values }).then(async () => {
      await signIn("credentials", {
        email: values.email,
        password: values.password,
        callbackUrl: props.callbackUrl,
        redirect: false,
      }).then((res) => {
        if (res?.ok) {
          onsubmitProps.resetForm();
        }
      });
    });
  };

  return (
    <main className="grid place-items-center py-12">
      <SignupForm
        initialFormValues={initialFormValues}
        isError={isError}
        isPending={isPending}
        formLabel={props.formLabel}
        error={error}
        onClickSignup={signup}
      />
    </main>
  );
};

export default SignupPage;