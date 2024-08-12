import { ColorLink } from "@/components/buttons";
import images from "@/constants/images";
import Image from "next/image";

const BecomeAnInstructor = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-center gap-5 my-20 lg:my-28 paddingX">
      <Image
        src={images.instructor}
        alt="instructor"
        height={600}
        width={500}
      />

      <article className="max-w-lg space-y-6">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
          Become an Instructor
        </h2>

        <p className="md:text-lg lg:text-xl">
          Instructors from around the world teach millions of learners on Udemy.
          We provide the tools and skills to teach what you love.
        </p>

        <ColorLink
          label="Start teaching today"
          href="/business/overview"
          size="large"
        />
      </article>
    </section>
  );
};

export default BecomeAnInstructor;
