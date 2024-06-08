import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  DropdownSection,
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
        <DropdownItem key="learning">
          <Link href="#">My learning</Link>
        </DropdownItem>

        <DropdownItem key="cart">
          <Link href="#">My cart</Link>
        </DropdownItem>

        <DropdownItem key="wishlist">
          <Link href="#">Wishlist</Link>
        </DropdownItem>

        <DropdownItem key="bowtifyBusiness">
          <Link href="#">Bowtify business</Link>
        </DropdownItem>

        <DropdownItem key="notifications">
          <Link href="#">Notifications</Link>
        </DropdownItem>

        <DropdownItem key="settings">
          <Link href="#">Account Settings</Link>
        </DropdownItem>

        <DropdownItem key="transaction">
          <Link href="#">Transaction history</Link>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default ProfileIcon;
