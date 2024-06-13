import { useCurrentUser } from "@/hooks";
import { twMerge } from "tailwind-merge";

type Props = {
  fontSize: string;
  height: string;
  width: string;
  cursorEnabled?: boolean;
};

const ProfileImage = (props: Props) => {
  const { user } = useCurrentUser();

  return (
    <div
      className={twMerge(
        "bg-black text-white font-semibold rounded-full flex items-center justify-center",
        props.fontSize,
        props.height,
        props.width,
        props.cursorEnabled && "cursor-pointer"
      )}
    >
      {user?.first_name.slice(0, 1)}
      {user?.last_name.slice(0, 1)}
    </div>
  );
};

export default ProfileImage;
