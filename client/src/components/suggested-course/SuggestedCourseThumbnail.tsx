import Image from "next/image";

type Props = {
  thumbNail: string;
  title: string;
};

const SuggestedCourseThumbnail = (props: Props) => {
  return (
    <div className="block relative h-[160px] mb-2 border-1 border-grey">
      <Image
        src={props.thumbNail}
        alt={props.title}
        quality={100}
        loading="lazy"
        fill
        sizes="any"
        className="object-cover object-center"
      />
    </div>
  );
};

export default SuggestedCourseThumbnail;
