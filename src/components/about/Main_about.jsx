import React from "react";
import { Images } from "./Images";
import { Aricals_about } from "./Aricals_about";
import { Bluring_circl } from "../../shared/Bluring_circl";
import { Bluring_effect } from "../../shared/Bluring_effect";
export const Main_about = () => {
  return (
    <section  className={`
     relative isolate w-full px-4 py-24 max-sm:px-4 max-sm:py-16 m-auto overflow-hidden
     h-screen max-sm:h-auto border-b-[1px] gap-4 border-gray-300 flex justify-between items-center max-sm:flex-col
    
     `}  >
      <Bluring_effect />
      <Aricals_about />
      <Images />
      <Bluring_circl color={"blue"}/>
    </section>


  );
};
