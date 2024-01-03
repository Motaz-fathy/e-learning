import React from "react";

export const PrimCard = ({ arg, color, title, number }) => {
  return (
    <div
      className={`bg${color} bg-opacity-20 shadow-lg  p-4 flex flex-col items-center gap-2  ${arg}`}
    >
      <h2 className="text-md font-bold text-gray-600 ">
        {title}
      </h2>
      <div
        className={`bg${color} text-white rounded-[100%] text-sm 
         text-center w-10 h-10 flex justify-center items-center
         hover:scale-110 transition ease-in-out duration-300
         `}
      >
        {number}
      </div>
    </div>
  );
};
