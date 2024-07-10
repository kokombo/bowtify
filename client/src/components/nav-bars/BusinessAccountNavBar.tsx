"use client";
import { CgBell } from "react-icons/cg";
import { MyIcon } from "@/components";
import { AccountDropdown } from "@/components/dropdowns";

const BusinessAccountNavBar = () => {
  return (
    <nav className="flex items-center justify-between h-20 paddingX">
      <div />

      <div className="flex items-center gap-6">
        <button type="button">
          <MyIcon icon={CgBell} />
        </button>

        <AccountDropdown />
      </div>
    </nav>
  );
};

export default BusinessAccountNavBar;
