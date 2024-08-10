"use client";

import Carousel from "@/components/carousel";
import images from "@/constants/images";

const UnauthenticatedHomeHero = () => {
  return <Carousel data={[images.bowtifyhero1, images.bowtifyhero2]} />;
};

export default UnauthenticatedHomeHero;
