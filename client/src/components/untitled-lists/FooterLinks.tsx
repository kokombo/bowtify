import { footerLinks } from "@/constants/data";
import Link from "next/link";

const FooterLinks = () => {
  return (
    <div className="grid grid-cols-3 gap-y-2 w-full lg:w-4/6">
      {footerLinks.map((link, index) => {
        return (
          <Link
            key={`${index}-${link.label}`}
            href={link.href}
            className="text-sm hover:underline underline-offset-2"
          >
            {link.label}
          </Link>
        );
      })}
    </div>
  );
};

export default FooterLinks;
