import Link from "next/link";

const SignupFormActionBox = () => {
  return (
    <h6 className="self-center text-sm">
      Already have an account?{" "}
      <Link
        href="/account/signin"
        className="underline text-purple font-semibold"
      >
        Sign in
      </Link>
    </h6>
  );
};

export default SignupFormActionBox;
