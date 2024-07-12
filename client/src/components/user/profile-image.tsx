"use client";
import type { Session } from "next-auth";
import { twMerge } from "tailwind-merge";

type Props = {
  fontSize: string;
  height: string;
  width: string;
  cursorEnabled?: boolean;
  session: Session | null;
};

const ProfileImage = (props: Props) => {
  return (
    <div
      className={twMerge(
        "bg-black text-white font-semibold rounded-full flex items-center justify-center uppercase",
        props.fontSize,
        props.height,
        props.width,
        props.cursorEnabled && "cursor-pointer"
      )}
    >
      {props.session?.user?.firstName?.slice(0, 1)}
      {props.session?.user?.lastName?.slice(0, 1)}
    </div>
  );
};

export default ProfileImage;
