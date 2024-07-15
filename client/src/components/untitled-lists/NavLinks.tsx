import { NAV_LINKS } from "@/constants/data";
import Link from "next/link";

const NavLinks = () => {
  return (
    <ul className="flex items-center gap-6">
      {NAV_LINKS.map((item, index) => (
        <li key={`${index}-${item.label}`} className="text-sm hover:underline ">
          <Link href={item.href}>{item.label} </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
