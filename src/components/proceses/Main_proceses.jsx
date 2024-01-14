import React from "react";
import { Proceses_header } from "./Proceses_header";
import { Proceses_card } from "./Proceses_card";
import { Bluring_effect } from "../../shared/Bluring_effect";
import { Bluring_circl } from "../../shared/Bluring_circl";
export const Main_proceses = () => {
  return (
    <div className="relative isolate w-full h-auto isolate py-32  backdrop-blur-2xl flex items-center flex-col border-b-[1px] border-gray-300">
      <Bluring_effect />
      <Proceses_header />
      <Proceses_card />
      <Bluring_circl color={"#57cced"} />
    </div>
  );
};
