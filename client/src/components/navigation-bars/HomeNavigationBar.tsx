import Link from "next/link";
import { BowtifyLogo } from "../logos";
import { MainSearchBox } from "../search-boxes";
import { BorderedLink, ColorLink } from "../buttons";
import { FaShoppingCart } from "react-icons/fa";
import { useCurrentUser } from "@/hooks";
import { Fragment } from "react";
import { LuHeart } from "react-icons/lu";
import { CgBell } from "react-icons/cg";
import MyIcon from "../MyIcon";
import { AccountDropdown } from "../dropdowns";
import { NavLinks } from "../untitled-lists";

const HomeNavigationBar = () => {
  const { session, sessionLoading, isIndividualAccount } = useCurrentUser();

  return (
    <nav className="flex items-center justify-between py-4 paddingX shadow-lg">
      <span className="flex items-center gap-6">
        <BowtifyLogo />

        <Link href="/#" className="text-sm hover:text-purple">
          Explore
        </Link>
      </span>

      <MainSearchBox />

      <NavLinks />

      <Fragment>
        {sessionLoading ? (
          <div />
        ) : (
          <div className="flex items-center gap-6">
            <Fragment>
              {!session || isIndividualAccount ? (
                <Link href="">
                  <MyIcon icon={FaShoppingCart} />
                </Link>
              ) : null}
            </Fragment>

            <Fragment>
              {session ? (
                <Fragment>
                  <Link href="">
                    <MyIcon icon={LuHeart} />
                  </Link>

                  <Link href="">
                    <MyIcon icon={CgBell} />
                  </Link>

                  <AccountDropdown />
                </Fragment>
              ) : (
                <Fragment>
                  <BorderedLink href="/account/login" label="Sign In" />

                  <ColorLink href="/account/signup" label="Sign Up" />
                </Fragment>
              )}
            </Fragment>
          </div>
        )}
      </Fragment>
    </nav>
  );
};

export default HomeNavigationBar;
