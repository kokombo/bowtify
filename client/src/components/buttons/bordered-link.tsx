"use client";
import Link from "next/link";

type Props = {
  href: string;
  label: string;
};

const BorderedLink = (props: Props) => {
  return (
    <Link
      href={props.href}
      className="py-3 px-5 bg-white border-1 border-black text-black font-medium text-sm "
    >
      {props.label}
    </Link>
  );
};

export default BorderedLink;
