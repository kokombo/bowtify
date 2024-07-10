import { RedirectAuthUser } from "@/components/auth";
import SignupPage from "@/app/account/_components/signup-page";

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
