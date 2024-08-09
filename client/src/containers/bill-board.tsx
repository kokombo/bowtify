import images from "@/constants/images";
import Image from "next/image";

const BillBoard = () => {
  return (
    <section className="block relative paddingX my-12 lg:my-16">
      <div className="h-[350px] lg:h-[400px] bg-pink-700 w-full">
        <Image
          src={images.bowtifyhero1}
          alt="hero-banner"
          fill
          quality={100}
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
    </section>
  );
};

export default BillBoard;
