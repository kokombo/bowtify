import Link from "next/link";

const StarterCourseCard = () => {
  return (
    <Link href="">
      <article className="h-[160px] border-1 border-black flex w-[400px]">
        <iframe
          width="150"
          height="100%"
          src="https://www.youtube.com/embed/bio_H1-6pDo"
          allow="picture-in-picture"
        ></iframe>

        <article className="px-3 py-2 flex flex-col justify-between">
          <span className="flex flex-col gap-1">
            <h5 className="text-gray text-xs font-medium">
              JavaScript Essentials
            </h5>
            <h5 className="text-base font-semibold">JavaScript Console</h5>
          </span>

          <span className="text-sm flex gap-2">
            <h5 className="font-medium">Course</h5>
            <h5 className="font-light">&#8226; 5m</h5>
          </span>
        </article>
      </article>
    </Link>
  );
};

export default StarterCourseCard;
