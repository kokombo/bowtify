import Link from "next/link";
import { BowtifyLogo } from "../logos";
import { MainSearchBox } from "../search-boxes";
import { BorderedLink, ColorLink } from "../buttons";
import { FaShoppingCart } from "react-icons/fa";
import { NAV_LINKS } from "@/constants/data";

const HomeNavigationBar = () => {
  return (
    <nav className="flex items-center justify-between py-4 px-[5%] shadow-xl">
      <span className="flex items-center gap-6">
        <BowtifyLogo />

        <Link href="#" className="text-sm hover:text-purple">
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

      <div className="flex items-center gap-4">
        <Link href="">
          <FaShoppingCart />
        </Link>

        <BorderedLink href="/account/login" label="Sign In" />

        <ColorLink href="/account/signup" label="Sign Up" />
      </div>
    </nav>
  );
};

export default HomeNavigationBar;
