import SignupPage from "@/app/account/_components/signup-page";

const BusinessAccountSignupPage = () => {
  return (
    <SignupPage
      formLabel="Signup as a business on Bowtify"
      accountType="business"
      callbackUrl="/ba/dashboard"
    />
  );
};

export default BusinessAccountSignupPage;
