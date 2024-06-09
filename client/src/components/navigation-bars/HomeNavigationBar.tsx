import Link from "next/link";
import { BowtifyLogo } from "../logos";
import { MainSearchBox } from "../search-boxes";
import { BorderedLink, ColorLink } from "../buttons";
import { FaShoppingCart } from "react-icons/fa";
import { NAV_LINKS } from "@/constants/data";
import { useCurrentUser } from "@/hooks";
import { Fragment } from "react";
import { LuHeart } from "react-icons/lu";
import { CgBell } from "react-icons/cg";
import MyIcon from "../MyIcon";
import { ProfileIcon } from "../icons";

const HomeNavigationBar = () => {
  const { session, sessionLoading, isIndividualAccount } = useCurrentUser();

  return (
    <nav className="flex items-center justify-between py-4 paddingX shadow-xl">
      <span className="flex items-center gap-6">
        <BowtifyLogo />

        <Link href="/#" className="text-sm hover:text-purple">
          Explore
        </Link>
      </span>

      <MainSearchBox />

      <ul className="flex items-center gap-6">
        {NAV_LINKS.map((item, index) => (
          <li key={index} className="text-sm hover:underline ">
            <Link href={item.href}>{item.label} </Link>
          </li>
        ))}
      </ul>

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

            {session ? (
              <Fragment>
                <Link href="">
                  <MyIcon icon={LuHeart} />
                </Link>

                <Link href="">
                  <MyIcon icon={CgBell} />
                </Link>

                <ProfileIcon />
              </Fragment>
            ) : (
              <Fragment>
                <BorderedLink href="/account/login" label="Sign In" />

                <ColorLink href="/account/signup" label="Sign Up" />
              </Fragment>
            )}
          </div>
        )}
      </Fragment>
    </nav>
  );
};

export default HomeNavigationBar;
