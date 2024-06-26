import { useCurrentUser } from "@/hooks";
import { twMerge } from "tailwind-merge";

type Props = {
  fontSize: string;
  height: string;
  width: string;
  cursorEnabled?: boolean;
};

const ProfileImage = (props: Props) => {
  const { firstName, lastName } = useCurrentUser();

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
      {firstName?.slice(0, 1)}
      {lastName?.slice(0, 1)}
    </div>
  );
};

export default ProfileImage;
