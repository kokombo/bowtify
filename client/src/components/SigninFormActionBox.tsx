import Link from "next/link";

const SigninFormActionBox = () => {
  return (
    <span>
      <Link
        href="/account/forgot-password"
        className="underline text-purple font-semibold text-sm"
      >
        Forgot Password?
      </Link>

      <h6 className="self-center text-sm">
        Or don{"'"}t have an account?{" "}
        <Link
          href="/account/signup"
          className="underline text-purple font-semibold"
        >
          Sign up
        </Link>
      </h6>
    </span>
  );
};

export default SigninFormActionBox;
