import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import Link from "next/link";

const ProfileIcon = () => {
  return (
    <Dropdown backdrop="transparent">
      <DropdownTrigger>
        <div className="bg-black text-white font-semibold py-2 px-3 rounded-full cursor-pointer">
          SI
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
      </DropdownMenu>
    </Dropdown>
  );
};

export default ProfileIcon;
