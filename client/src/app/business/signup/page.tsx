"use client";

import { SignupPage } from "@/views";

const BusinessAccountSignupPage = () => {
  return (
    <SignupPage
      formLabel="Start listing courses or events on Bowtify"
      accountType="business"
      callbackUrl="/ba/dashboard"
    />
  );
};

export default BusinessAccountSignupPage;
