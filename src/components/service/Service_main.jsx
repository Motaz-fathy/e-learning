/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { Service_header } from "./Service_header";
import { Bluring_circl } from "../../shared/Bluring_circl";

export const Service_main = () => {
  return (
    <section className="relative w-full h-auto  bg-gray-300  backdrop-blur-2xl flex items-center flex-col 
     dark:bg-gray-800  ">
      
      <div className="relative isolate overflow-hidden w-full flex flex-col items-center ">
         <Service_header />
         <Bluring_circl color={"white"} />
      </div>
    </section>
  );
};
