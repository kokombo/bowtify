"use state";

import Image, { type StaticImageData } from "next/image";
import { useCallback, useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { twMerge } from "tailwind-merge";
import { RoundIconButton } from "./buttons";

type Data = {
  data: Array<string> | Array<StaticImageData>;
};

const Carousel = ({ data }: Data) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 60000);

    return () => clearInterval(interval);
  }, [data.length]);

  const handleClickLeftArrow = useCallback(() => {
    if (index === 0) {
      setIndex(data.length - 1);
    } else {
      setIndex((prevIndex) => prevIndex - 1);
    }
  }, [index, data.length]);

  const handleClickRightArrow = useCallback(() => {
    if (index === data.length - 1) {
      setIndex(0);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  }, [index, data.length]);

  return (
    <div className="flex overflow-hidden relative">
      {data?.map((image, sliderIndex) => {
        const opacity = index === sliderIndex ? "opacity-[1]" : "";

        return (
          <div
            key={`${sliderIndex}-${image}`}
            className={twMerge("w-full flex-shrink-0 bg-grey", opacity)}
            style={{
              transform: `translateX(-${index * 100}%)`,
            }}
          >
            <div className="block relative h-[350px] lg:h-[450px]">
              <Image
                src={image}
                alt="carousel image"
                fill
                quality={100}
                loading={sliderIndex < 1 ? "eager" : "lazy"}
                priority={sliderIndex < 1}
                sizes="100vw"
                className="object-cover object-top"
              />
            </div>
          </div>
        );
      })}

      <RoundIconButton
        icon={IoIosArrowBack}
        onClick={handleClickLeftArrow}
        className="absolute left-2 md:left-5 top-1/2 -translate-y-1/2"
        ariaLabel="carousel previous button"
      />

      <RoundIconButton
        icon={IoIosArrowForward}
        onClick={handleClickRightArrow}
        className="absolute right-2 md:right-5 top-1/2 -translate-y-1/2"
        ariaLabel="carousel next button"
      />
    </div>
  );
};

export default Carousel;
