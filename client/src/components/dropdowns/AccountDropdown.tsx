import { useCurrentUser } from "@/hooks";
import { Dropdown, DropdownTrigger } from "@nextui-org/react";
import {
  AuthenticatedBusinessLinks,
  AuthenticatedIndividualLinks,
} from "../untitled-lists";
import { ProfileImage } from "../user";

const AccountDropdown = () => {
  const { isBusinessAccount, isIndividualAccount } = useCurrentUser();

  return (
    <Dropdown backdrop="transparent" radius="sm">
      <DropdownTrigger>
        <button type="button">
          <ProfileImage height="h-10" width="w-10" fontSize="text-lg" />
        </button>
      </DropdownTrigger>

      {isIndividualAccount && <AuthenticatedIndividualLinks />}

      {isBusinessAccount && <AuthenticatedBusinessLinks />}
    </Dropdown>
  );
};

export default AccountDropdown;
