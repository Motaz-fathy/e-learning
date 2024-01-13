/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { Service_header } from "./Service_header";
import { Bluring_circl } from "../../shared/Bluring_circl";
import { Service_card } from "./Service_card";
import { Bluring_effect } from "../../shared/Bluring_effect";

export const Service_main = () => {
  return (
    <section className="relative w-full h-auto isolate  border-b-[1px] border-gray-300 py-32 flex items-center flex-col 
       ">
      <Bluring_effect />
      <div className="relative isolate overflow-hidden w-full flex flex-col items-center ">
         <Service_header />
          <div className="px-8 m-auto"> <Service_card /></div>
         
      </div>
      <Bluring_circl color={"white"} />
    </section>
  );
};
