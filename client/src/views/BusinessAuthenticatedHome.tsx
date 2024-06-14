import { MyIcon } from "@/components";
import { AccountDropdown } from "@/components/dropdowns";
import { CgBell } from "react-icons/cg";

const BusinessAuthenticatedHome = () => {
  return (
    <main>
      <nav className="flex items-center justify-between py-4 paddingX">
        <div />

        <div className="flex items-center gap-6">
          <button>
            <MyIcon icon={CgBell} />
          </button>

          <AccountDropdown />
        </div>
      </nav>
    </main>
  );
};

export default BusinessAuthenticatedHome;
