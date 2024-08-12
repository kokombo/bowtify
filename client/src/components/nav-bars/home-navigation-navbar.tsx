import Link from "next/link";
import { BowtifyLogo } from "@/components/logos";
import { MainSearchBox } from "@/components/search-boxes";
import { BorderedLink, ColorLink } from "@/components/buttons";
import { FaShoppingCart } from "react-icons/fa";
import { Fragment } from "react";
import { LuHeart } from "react-icons/lu";
import { CgBell } from "react-icons/cg";
import { MyIcon } from "@/components";
import { AccountDropdown } from "@/components/dropdowns";
import { NavLinks } from "@/components/untitled-lists";
import type { Session } from "next-auth";

type Props = {
  session: Session | null;
};

const HomeNavigationBar = ({ session }: Props) => {
  return (
    <nav className="flex items-center justify-between h-20 paddingX shadow-md">
      <span className="flex items-center lg:gap-6">
        <BowtifyLogo />

        <Link href="/#" className="text-sm hover:text-purple hidden lg:inline">
          Explore
        </Link>
      </span>

      <div className="hidden lg:inline">
        <MainSearchBox />
      </div>

      <div className="hidden lg:inline">
        <NavLinks />
      </div>

      <Fragment>
        <div className="flex items-center gap-3 lg:gap-6">
          <Fragment>
            {!session || session?.user.accessToken === "individual" ? (
              <Link href="" className="hidden lg:inline-block">
                <MyIcon icon={FaShoppingCart} />
              </Link>
            ) : null}
          </Fragment>

          {session ? (
            <Fragment>
              <Link href="" className="hidden lg:inline-block">
                <MyIcon icon={LuHeart} />
              </Link>

              <Link href="" className="hidden lg:inline-block">
                <MyIcon icon={CgBell} />
              </Link>

              <AccountDropdown session={session} />
            </Fragment>
          ) : (
            <Fragment>
              <BorderedLink href="/account/login">Sign In</BorderedLink>

              <ColorLink href="/account/signup" size="small">
                Sign Up
              </ColorLink>
            </Fragment>
          )}
        </div>
      </Fragment>
    </nav>
  );
};

export default HomeNavigationBar;
