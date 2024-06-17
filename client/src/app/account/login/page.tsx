"use client";

import { SigninForm } from "@/components/forms";
import { OverlayTransparentLoader } from "@/components/loaders";
import { authError } from "@/constants/data";
import { useClearErrorMessage } from "@/hooks";
import { FormikHelpers } from "formik";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const initialFormValues: SigninFormType = {
  email: "",
  password: "",
};

const Login = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const signin = async (
    values: SigninFormType,
    onsubmitProps: FormikHelpers<SigninFormType>
  ) => {
    try {
      setLoading(true);

      const res = await signIn("credentials", {
        ...values,
        redirect: false,
      });

      if (res?.ok) {
        router.push("/");
        onsubmitProps.resetForm();
      }

      if (res?.error) {
        setError(res.error || authError);
      }
    } catch (error: any) {
      return setError(error.message || authError);
    } finally {
      setLoading(false);
    }
  };

  useClearErrorMessage(setError);

  return (
    <main className="grid place-items-center py-20">
      {loading && <OverlayTransparentLoader />}

      <SigninForm
        initialFormValues={initialFormValues}
        isLoading={loading}
        error={error}
        onClickSignin={signin}
      />
    </main>
  );
};

export default Login;
