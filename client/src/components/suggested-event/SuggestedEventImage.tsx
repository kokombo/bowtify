import Image from "next/image";

type Props = {
  image: string;
  title: string;
};

const SuggestedEventImage = (props: Props) => {
  return (
    <div className="relative w-[210px] h-full bg-gray">
      <Image
        src={props.image}
        alt={props.title}
        fill
        quality={100}
        loading="lazy"
        objectFit="cover"
        objectPosition="center"
      />
    </div>
  );
};

export default SuggestedEventImage;
