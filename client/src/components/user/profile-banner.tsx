import type { Session } from "next-auth";
import ProfileImage from "./profile-image";

type Props = {
  session: Session | null;
};

const ProfileBanner = ({ session }: Props) => {
  return (
    <div className="paddingX mt-6 lg:mt-12">
      <article className="flex items-center gap-4">
        <ProfileImage
          height="h-16 lg:h-20"
          width="w-16 lg:w-20"
          cursorEnabled={false}
          fontSize="text-2xl md:text-3xl"
          session={session}
        />

        <article className="flex flex-col gap-1 lg:gap-2">
          <h4 className="text-xl md:text-2xl font-bold capitalize">
            Welcome, {session?.user?.firstName} {session?.user?.lastName}
          </h4>

          <h6 className="text-xs md:text-sm">
            Discover courses and latest events around
          </h6>
        </article>
      </article>
    </div>
  );
};

export default ProfileBanner;
