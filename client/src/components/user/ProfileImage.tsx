import { useCurrentUser } from "@/hooks";
import { twMerge } from "tailwind-merge";

type Props = {
  fontSize: string;
  paddingY: string;
  paddingX: string;
  cursorEnabled: boolean;
};

const ProfileImage = (props: Props) => {
  const { user } = useCurrentUser();

  return (
    <div
      className={twMerge(
        "bg-black text-white font-semibold rounded-full",
        props.fontSize,
        props.paddingX,
        props.paddingY,
        props.cursorEnabled && "cursor-pointer"
      )}
    >
      {user?.first_name.slice(0, 1)}
      {user?.last_name.slice(0, 1)}
    </div>
  );
};

export default ProfileImage;
