"use client";

import { SignupPage } from "@/views";

const IndividualAccountSignupPage = () => {
  return (
    <SignupPage
      formLabel="Sign up to access courses and events"
      accountType="individual"
      callbackUrl=""
    />
  );
};

export default IndividualAccountSignupPage;
