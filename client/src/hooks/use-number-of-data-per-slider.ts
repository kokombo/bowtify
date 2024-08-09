import { useEffect, useState } from "react";

export const useNumberOfDataPerSlider = (tablet: number, pc: number) => {
  const [numberOfDataPerSlider, setNumberOfDataPerSlider] =
    useState<number>(pc);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setNumberOfDataPerSlider(tablet);
      } else {
        setNumberOfDataPerSlider(pc);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [tablet, pc]);

  return numberOfDataPerSlider;
};
