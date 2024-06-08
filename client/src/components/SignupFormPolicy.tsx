import Link from "next/link";

const SignupFormPolicy = () => {
  return (
    <h6 className="text-xs font-light">
      By signing up, you agree to our{" "}
      <Link href="#" className="underline text-purple">
        Terms of Service
      </Link>{" "}
      and{" "}
      <Link href="#" className="underline text-purple">
        Privacy Policy
      </Link>{" "}
    </h6>
  );
};

export default SignupFormPolicy;
