import SignupPage from "@/app/account/_components/signup-page";

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
