"use client";
import { DropdownItem, DropdownMenu } from "@nextui-org/react";
import Link from "next/link";
import { Signout } from "../buttons";

const AuthenticatedIndividualLinks = () => {
  return (
    <DropdownMenu variant="flat" aria-label="Static Actions">
      <DropdownItem key="learning" className="mb-1" textValue="learning">
        <Link href="#">My learning</Link>
      </DropdownItem>

      <DropdownItem key="cart" className="mb-1" textValue="cart">
        <Link href="#">My cart</Link>
      </DropdownItem>

      <DropdownItem key="wishlist" className="mb-1" textValue="wishlist">
        <Link href="#">Wishlist</Link>
      </DropdownItem>

      <DropdownItem
        key="bowtifyBusiness"
        className="mb-1"
        textValue="bowtifyBusiness"
      >
        <Link href="/business/overview">Bowtify business</Link>
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

      <DropdownItem key="transaction" className="mb-1" textValue="transaction">
        <Link href="#">Transaction history</Link>
      </DropdownItem>

      <DropdownItem key="signout" className="mb-1" textValue="signout">
        <Signout />
      </DropdownItem>
    </DropdownMenu>
  );
};

export default AuthenticatedIndividualLinks;
