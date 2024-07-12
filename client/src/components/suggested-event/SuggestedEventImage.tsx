import Image from "next/image";

type Props = {
  image: string;
  alt: string;
};

const SuggestedEventImage = (props: Props) => {
  return (
    <div className="block relative w-2/6 h-full bg-gray">
      <Image
        src={props.image}
        alt={props.alt}
        fill
        quality={100}
        loading="lazy"
        sizes="any"
        className="object-cover object-center"
      />
    </div>
  );
};

export default SuggestedEventImage;
