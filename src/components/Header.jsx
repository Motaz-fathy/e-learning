import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Item_header } from "./Item_header";
import { Navbar } from "./Navbar";
import { Bluring_circl } from "../shared/Bluring_circl";
import { Bluring_effect } from "../shared/Bluring_effect";
export const Header = () => {
  return (
   <>
   <Navbar />
    <div
      className="w-full h-[45vw] relative isolate max-sm:h-[100dvw] flex justify-center items-center   border-b-[1px] border-gray-300   ">
       <Bluring_effect />
      <div className="w-1/2 h-full  flex justify-center items-center  ">
        <Swiper
          className=" "
          dir={"rtl"}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false
          }}
          modules={[Autoplay]}
        >
          <SwiperSlide className="flex justify-center items-center gap-2  h-[100%] w-full ">
            <Item_header />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center gap-2  h-[100%] w-full ">
            <Item_header />2
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center gap-2  h-[100%] w-full ">
            <Item_header />3
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center gap-2  h-[100%] w-full ">
            <Item_header />4
          </SwiperSlide>
        </Swiper>
      </div>
      
       <div className="w-1/2 h-full  bg-cover " style={{backgroundImage : `url('./images/index/index-2.jpg')`}}></div>
       <Bluring_circl color={"#edeb57"}/>
    </div>
   </>
  );
};
