"use client";

import Carousel from "@/components/carousel";
import images from "@/constants/images";

const BillBoard = () => {
  return (
    <section className="mt-6 lg:mt-12">
      <Carousel data={[images.bowtifyhero2, images.bowtifyhero1]} />
    </section>
  );
};

export default BillBoard;
