import React from "react";

export const PrimCard = ({ arg, color, title, number }) => {
  return (
    <div
      className={` shadow-xl  rounded-xl bg-opacity-10 bg-gray-300   p-4 flex flex-col items-center gap-2  w-1/4 `}
    >
      <h2 className="text-md font-bold text-gray-600 dark:text-white ">
        {title}
      </h2>
      <div
        className={`bg-sky-400 dark:bg-indigo-700 text-white rounded-[100%] text-sm 
         text-center w-10 h-10 flex justify-center items-center
         hover:scale-110 transition ease-in-out duration-300 dark:text-white 
         `}
      >
        {number}
      </div>
    </div>
  );
};
