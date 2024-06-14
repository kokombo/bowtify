import { CgBell } from "react-icons/cg";
import MyIcon from "../MyIcon";
import { AccountDropdown } from "../dropdowns";

const BusinessAccountNavBar = () => {
  return (
    <nav className="flex items-center justify-between py-4 paddingX">
      <div />

      <div className="flex items-center gap-6">
        <button>
          <MyIcon icon={CgBell} />
        </button>

        <AccountDropdown />
      </div>
    </nav>
  );
};

export default BusinessAccountNavBar;
