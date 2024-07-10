import { signOut } from "next-auth/react";

const Signout = () => {
  return (
    <button
      type="button"
      onClick={() => {
        signOut({ callbackUrl: "/account/logout" });
      }}
    >
      Sign out
    </button>
  );
};

export default Signout;
