import React, { useState } from "react";
import { Transition } from "@headlessui/react";
export const Video_content = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <div className="w-full flex justify-center items-center  ">
   
    <button 
      className=" flex justify-between dark:bg-gray-800  items-center   absolute top-20 z-50 w-1/4 max-sm:w-5/6 h-20 bg-white  p-6 rounded-full hover:bg-gray-400 transition-all ease-in-out duration-300"
      onClick={handleClick}
    >
         <span className="text-xl font-bold font-sans dark:text-white ">شاهد فيديو المقدمة لدينا</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-10 h-10 hover:text-sky-800 transition-all ease-in-out duration-300 text-gray-800  dark:text-white bg-sky-500 rounded-full p-1"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
        />
      </svg>
    </button>

    <Transition show={isOpen} as={React.Fragment}>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div
          className="fixed inset-0 transition-opacity"
          onClick={handleClose}
        >
          <div className="absolute inset-0 bg-black opacity-50  h-screen " />
        </div>
        <div className="relative z-10">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/your-video-id"
              title="Video"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </Transition>
  </div>
  );
};
