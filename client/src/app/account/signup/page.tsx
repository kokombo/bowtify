"use client";

import { SignupForm } from "@/components/forms";

const initialFormValues: SignupFormType = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

const Signup = () => {
  return (
    <main className="grid place-items-center py-12">
      <SignupForm
        initialFormValues={initialFormValues}
        isError={false}
        isPending={false}
        formLabel="Sign up to Bowtify"
        error={null}
        onClickSignup={async () => {}}
      />
    </main>
  );
};

export default Signup;
