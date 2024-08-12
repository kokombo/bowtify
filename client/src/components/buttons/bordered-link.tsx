"use client";
import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
};

const BorderedLink = ({ href, children }: Props) => {
  return (
    <Link
      href={href}
      className="py-3 px-4 bg-white border-1 border-black text-black font-semibold text-sm "
    >
      {children}
    </Link>
  );
};

export default BorderedLink;
