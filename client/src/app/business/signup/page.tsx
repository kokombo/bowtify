"use client";

import { RedirectAuthUser } from "@/components";
import { SignupPage } from "@/views";

const BusinessAccountSignupPage = () => {
  return (
    <RedirectAuthUser>
      <SignupPage
        formLabel="Start listing courses or events on Bowtify"
        accountType="business"
        callbackUrl="/ba/dashboard"
      />
    </RedirectAuthUser>
  );
};

export default BusinessAccountSignupPage;
