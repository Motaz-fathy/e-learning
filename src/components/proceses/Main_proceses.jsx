import React from "react";
import { Proceses_header } from "./Proceses_header";
import { Proceses_card } from "./Proceses_card";

export const Main_proceses = () => {
  return (
    <div className="relative w-full h-auto isolate py-32  backdrop-blur-2xl flex items-center flex-col border-b-[1px] border-gray-300">
      <Proceses_header />
      <Proceses_card />
    </div>
  );
};
