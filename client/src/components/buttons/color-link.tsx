"use client";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

type Props = {
  href: string;
  label: string;
  size: "large" | "small";
};

const ColorLink = ({ href, label, size }: Props) => {
  let style = "";

  if (size === "large") {
    style = "py-4 px-5 font-bold";
  } else if (size === "small") {
    style = "py-3 px-4 text-sm font-semibold";
  }

  return (
    <Link
      href={href}
      className={twMerge("inline-block bg-black text-white", style)}
    >
      {label}
    </Link>
  );
};

export default ColorLink;
