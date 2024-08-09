import images from "@/constants/images";
import Image from "next/image";

const UnauthenticatedHomeHero = () => {
  return (
    <section className="paddingX my-12 lg:my-16">
      <div className="block relative h-[350px] lg:h-[400px] bg-pink-700 w-full">
        <Image
          src={images.bowtifyhero2}
          alt="hero-banner"
          fill
          quality={100}
          priority
          sizes="100vw"
          className="object-cover object-top"
        />
      </div>
    </section>
  );
};

export default UnauthenticatedHomeHero;
