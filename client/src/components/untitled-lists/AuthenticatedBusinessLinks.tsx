import { DropdownItem, DropdownMenu } from "@nextui-org/react";
import Link from "next/link";
import { Signout } from "../buttons";

const AuthenticatedBusinessLinks = () => {
  return (
    <DropdownMenu variant="flat" aria-label="Static Actions">
      <DropdownItem key="courses" className="mb-1" textValue="courses">
        <Link href="/ba/courses">My courses</Link>
      </DropdownItem>

      <DropdownItem
        key="notifications"
        className="mb-1"
        textValue="notifications"
      >
        <Link href="#">Notifications</Link>
      </DropdownItem>

      <DropdownItem key="settings" className="mb-1" textValue="settings">
        <Link href="#">Account Settings</Link>
      </DropdownItem>

      <DropdownItem key="signout" className="mb-1" textValue="signout">
        <Signout />
      </DropdownItem>
    </DropdownMenu>
  );
};

export default AuthenticatedBusinessLinks;
