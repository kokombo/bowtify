import { DropdownItem, DropdownMenu } from "@nextui-org/react";
import { signOut } from "next-auth/react";
import Link from "next/link";

const AuthenticatedBusinessLinks = () => {
  return (
    <DropdownMenu variant="flat" aria-label="Static Actions">
      <DropdownItem key="courses" className="mb-1">
        <Link href="#">My courses</Link>
      </DropdownItem>

      <DropdownItem key="notifications" className="mb-1">
        <Link href="#">Notifications</Link>
      </DropdownItem>

      <DropdownItem key="settings" className="mb-1">
        <Link href="#">Account Settings</Link>
      </DropdownItem>

      <DropdownItem key="transaction" className="mb-1">
        <button type="button" onClick={() => signOut()}>
          Sign out
        </button>
      </DropdownItem>
    </DropdownMenu>
  );
};

export default AuthenticatedBusinessLinks;
