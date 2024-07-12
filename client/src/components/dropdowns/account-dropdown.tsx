"use client";
import { Dropdown, DropdownTrigger } from "@nextui-org/react";
import { ProfileImage } from "../user";
import type { Session } from "next-auth";
import dynamic from "next/dynamic";

const AuthenticatedIndividualLinks = dynamic(
  () => import("../untitled-lists/AuthenticatedIndividualLinks"),
  { ssr: false }
);

const AuthenticatedBusinessLinks = dynamic(
  () => import("../untitled-lists/AuthenticatedBusinessLinks"),
  { ssr: false }
);

const AccountDropdown = ({ session }: { session: Session | null }) => {
  const isIndividualAccount = session?.user?.accountType === "individual";
  const isBusinessAccount = session?.user?.accountType === "business";

  return (
    <Dropdown backdrop="transparent" radius="sm" shouldBlockScroll={false}>
      <DropdownTrigger>
        <span>
          <ProfileImage
            height="h-10"
            width="w-10"
            fontSize="text-lg"
            cursorEnabled
            session={session}
          />
        </span>
      </DropdownTrigger>

      {isIndividualAccount && <AuthenticatedIndividualLinks />}

      {isBusinessAccount && <AuthenticatedBusinessLinks />}
    </Dropdown>
  );
};

export default AccountDropdown;
