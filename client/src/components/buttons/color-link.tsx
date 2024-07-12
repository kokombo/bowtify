"use client";
import Link from "next/link";

type Props = {
  href: string;
  label: string;
};

const ColorLink = (props: Props) => {
  return (
    <Link
      href={props.href}
      className="py-3 px-5 bg-black text-white font-medium text-sm"
    >
      {props.label}
    </Link>
  );
};

export default ColorLink;
