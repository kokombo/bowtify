import Image from "next/image";

type Props = {
  thumbNail: string;
  title: string;
};

const SuggestedCourseThumbnail = (props: Props) => {
  return (
    <div className="relative h-[160px] w-full mb-2 border-1 border-grey">
      <Image
        src={props.thumbNail}
        alt={props.title}
        quality={100}
        loading="lazy"
        fill
        sizes="any"
      />
    </div>
  );
};

export default SuggestedCourseThumbnail;
