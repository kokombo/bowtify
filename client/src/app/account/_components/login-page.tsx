"use client";
import { SigninForm } from "@/components/forms";
import { OverlayTransparentLoader } from "@/components/loaders";
import { authError } from "@/constants/data";
import { useClearErrorMessage } from "@/hooks";
import type { FormikHelpers } from "formik";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { getSession } from "next-auth/react";

const initialFormValues: SigninFormType = {
  email: "",
  password: "",
};

const LoginPage = () => {
  const [error, setError] = useState<string | undefined>(undefined);
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
        const session = await getSession();

        if (session) {
          const callbackUrl =
            session.user.accountType === "business" ? "/ba/dashboard" : "/";
          router.push(callbackUrl);
          onsubmitProps.resetForm();
        }
      }

      if (res?.error) {
        setError(res.error || authError);
      }
    } catch (error) {
      return setError(authError);
    } finally {
      setLoading(false);
    }
  };

  useClearErrorMessage(setError);

  return (
    <main className="grid place-items-center py-14 lg:py-20">
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

export default LoginPage;
