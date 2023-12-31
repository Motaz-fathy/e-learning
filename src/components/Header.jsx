import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from 'swiper/modules';
export const Header = () => {
  return (
    <div className="w-full h-[45vw] max-sm:h-[60vw] flex justify-center items-center dark:bg-black  translate-y-20 ">
      <div className="w-full h-full py-5 flex justify-center items-center ">
      <Swiper className="block "
      autoplay={{
        delay: 4500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      >
        <SwiperSlide className="flex justify-center items-center gap-2  h-[100%] w-full "><span className="flex justify-center items-center ">Slide 1</span></SwiperSlide>
        <SwiperSlide className="flex justify-center items-center gap-2  h-[100%] w-full "><span className="flex justify-center items-center ">Slide 2</span></SwiperSlide>
        <SwiperSlide className="flex justify-center items-center gap-2  h-[100%] w-full "><span className="flex justify-center items-center ">Slide 3</span></SwiperSlide>
        <SwiperSlide className="flex justify-center items-center gap-2  h-[100%] w-full "><span className="flex justify-center items-center ">Slide 4</span></SwiperSlide>
        <SwiperSlide className="flex justify-center items-center gap-2  h-[100%] w-full "><span className="flex justify-center items-center ">Slide 5</span></SwiperSlide>
        <SwiperSlide className="flex justify-center items-center gap-2  h-[100%] w-full "><span className="flex justify-center items-center ">Slide 6</span></SwiperSlide>
        <SwiperSlide className="flex justify-center items-center gap-2  h-[100%] w-full "><span className="flex justify-center items-center ">Slide 7</span></SwiperSlide>
        <SwiperSlide className="flex justify-center items-center gap-2  h-[100%] w-full "><span className="flex justify-center items-center ">Slide 8</span></SwiperSlide>
        <SwiperSlide className="flex justify-center items-center gap-2  h-[100%] w-full "><span className="flex justify-center items-center ">Slide 9</span></SwiperSlide>
      </Swiper>
      </div>
    </div>
  );
};
