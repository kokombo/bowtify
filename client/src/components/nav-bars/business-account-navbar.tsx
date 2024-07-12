"use client";
import { CgBell } from "react-icons/cg";
import { MyIcon } from "@/components";
import { AccountDropdown } from "@/components/dropdowns";
import { useCurrentUser } from "@/hooks";

const BusinessAccountNavBar = () => {
  const { session } = useCurrentUser();

  return (
    <nav className="flex items-center justify-between h-20 paddingX">
      <div />

      <div className="flex items-center gap-6">
        <button type="button">
          <MyIcon icon={CgBell} />
        </button>

        <AccountDropdown session={session} />
      </div>
    </nav>
  );
};

export default BusinessAccountNavBar;
