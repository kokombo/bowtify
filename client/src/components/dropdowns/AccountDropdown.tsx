import { useCurrentUser } from "@/hooks";
import { Dropdown, DropdownTrigger } from "@nextui-org/react";

import {
  AuthenticatedBusinessLinks,
  AuthenticatedIndividualLinks,
} from "../untitled-lists";

const AccountDropdown = () => {
  const { user, isBusinessAccount, isIndividualAccount } = useCurrentUser();

  return (
    <Dropdown backdrop="transparent">
      <DropdownTrigger>
        <div className="bg-black text-white text-lg font-semibold h-11 w-11 rounded-full cursor-pointer flex items-center justify-center">
          {user?.first_name.slice(0, 1)}
          {user?.last_name.slice(0, 1)}
        </div>
      </DropdownTrigger>

      {isIndividualAccount && <AuthenticatedIndividualLinks />}

      {isBusinessAccount && <AuthenticatedBusinessLinks />}
    </Dropdown>
  );
};

export default AccountDropdown;
