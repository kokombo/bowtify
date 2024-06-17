import { SignupForm } from "@/components/forms";
import { OverlayTransparentLoader } from "@/components/loaders";
import { apiBaseUrl } from "@/constants/data";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { FormikHelpers } from "formik";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

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

  const [signingIn, setSigningIn] = useState(false);
  const router = useRouter();

  const signupRequest = async (formData: SignupFormType) => {
    const res = await axios.post(apiBaseUrl + "/auth/signup", formData);
    return res.data;
  };

  const { mutateAsync, isError, isPending, error } = useMutation<
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
      setSigningIn(true);

      await signIn("credentials", {
        email: values.email,
        password: values.password,
        redirect: false,
      })
        .then((res) => {
          if (res?.ok) {
            router.push(props.callbackUrl);
            onsubmitProps.resetForm();
          }
        })
        .finally(() => {
          setSigningIn(false);
        });
    });
  };

  return (
    <main className="grid place-items-center py-14">
      {(isPending || signingIn) && <OverlayTransparentLoader />}

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
