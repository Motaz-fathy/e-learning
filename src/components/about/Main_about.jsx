import React from "react";
import { Images } from "./Images";
import { Aricals_about } from "./Aricals_about";
import { Bluring_circl } from "../../shared/Bluring_circl";
import { Bluring_effect } from "../../shared/Bluring_effect";

export const Main_about = () => {
  return (
    // <section className="w-5/6 m-auto h-screen max-sm:h-auto py-4 flex justify-between items-center max-sm:flex-col gap-0 dark:bg-gray-800 px-0">
    //   <Aricals_about />
    //   <Images />
    // </section>
    <div className="bg-gray-200 w-full lg:h-screen   dark:bg-gray-900 ">

    <div className="mx-auto   py-16 max-sm:py-0">
      <div className="relative isolate overflow-hidden  bg-gray-200 text-black dark:bg-gray-900  shadow-2xl    md:flex  md:pt-0 flex  items-center">
        <Bluring_circl color={"white"}/>
        <Aricals_about />
        <div className="relative  h-screen ">
          <img
            className="absolute left-0 right-0 top-0 w-[60rem] max-sm:w-[30rem] max-w-none  bg-white/5 ring-1 ring-white/10 h-full"
            src="./images/service/teletech-about.webp"
            alt="App screenshot"
          
          />
        </div>
       <Bluring_effect />
      </div>
    </div>
  </div>
  );
};
