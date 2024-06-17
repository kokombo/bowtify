import { useCurrentUser } from "@/hooks";
import ProfileImage from "./ProfileImage";

const ProfileBanner = () => {
  const { user } = useCurrentUser();

  return (
    <div className="paddingX my-12">
      <article className="flex items-center gap-4">
        <ProfileImage
          height="h-20"
          width="w-20"
          cursorEnabled={false}
          fontSize="text-3xl"
        />

        <article className="flex flex-col gap-2">
          <h4 className="text-2xl font-bold capitalize">
            Welcome, {user?.first_name} {user?.last_name}
          </h4>

          <h6 className="text-sm">Discover courses and latest events around</h6>
        </article>
      </article>

      <article />
    </div>
  );
};

export default ProfileBanner;
