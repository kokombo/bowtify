"use client";
import Link from "next/link";

type Props = {
  href: string;
  label: string;
};

const BorderedLink = ({ href, label }: Props) => {
  return (
    <Link
      href={href}
      className="py-3 px-4 bg-white border-1 border-black text-black font-semibold text-sm "
    >
      {label}
    </Link>
  );
};

export default BorderedLink;
