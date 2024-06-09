import { useCurrentUser } from "@/hooks";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { INDIVIDUAL_ACCOUNT_AUTHENTICATED_LINKS } from "@/constants/data";

const ProfileIcon = () => {
  const { user } = useCurrentUser();

  return (
    <Dropdown backdrop="transparent">
      <DropdownTrigger>
        <div className="bg-black text-white font-semibold py-2 px-3 rounded-full cursor-pointer">
          {user?.first_name.slice(0, 1)}
          {user?.last_name.slice(0, 1)}
        </div>
      </DropdownTrigger>

      <DropdownMenu variant="flat" aria-label="Static Actions">
        <DropdownItem key="learning" className="mb-1">
          <Link href="#">My learning</Link>
        </DropdownItem>

        <DropdownItem key="cart" className="mb-1">
          <Link href="#">My cart</Link>
        </DropdownItem>

        <DropdownItem key="wishlist" className="mb-1">
          <Link href="#">Wishlist</Link>
        </DropdownItem>

        <DropdownItem key="bowtifyBusiness" className="mb-1">
          <Link href="#">Bowtify business</Link>
        </DropdownItem>

        <DropdownItem key="notifications" className="mb-1">
          <Link href="#">Notifications</Link>
        </DropdownItem>

        <DropdownItem key="settings" className="mb-1">
          <Link href="#">Account Settings</Link>
        </DropdownItem>

        <DropdownItem key="transaction" className="mb-1">
          <Link href="#">Transaction history</Link>
        </DropdownItem>

        <DropdownItem key="transaction" className="mb-1">
          <button type="button" onClick={() => signOut()}>
            Sign out
          </button>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default ProfileIcon;
