import React, { useState } from "react";

export const Saidbar = ({
  showSidebar,
  setShowSidebar,
  set_toggle_content
}) => {
  const [showPermissionDropdown, setShowPermissionDropdown] = useState(false);
  const [activeOption , set_ActiveOption] = useState(0)
  const togglePermissionDropdown = () => {
    setShowPermissionDropdown(!showPermissionDropdown);
  };

  return (
    <div
      className={`relative isolate shadow-2xl w-1/5 flex-shrink-0 bg-opacity-0 bg-gray-300  ${showSidebar
        ? "block "
        : "hidden"}  lg:block  relative isolate overflow-x-hidden  max-sm:z-50 max-sm:w-full max-sm:fixed max-sm:min-h-screen max-sm:bg-white/50 max-sm:backdrop-blur-sm `}
    >
      {/* Sidebar content */}
      <div className="py-4 fixed w-1/5 z-0 max-sm:w-5/6 max-sm:translate-x-[10%]">
        <div
          className="w-full justify-end items-end hidden max-sm:flex cursor-pointer"
          onClick={() => setShowSidebar(false)}
        >
          <span className="text-md font-extrabold">x</span>
        </div>
        {/* Logo */}
        <div className="text-center mb-6">
          {/* <img src="/path/to/logo.png" alt="Logo" className="w-8 h-8" /> */}
          <div>Logo</div>
        </div>
        {/* Buttons */}
        <div className="w-full m-auto flex flex-col items-start">
          <button
            onClick={() => set_toggle_content(0)}
            className="w-full py-2 bg-transparent transition ease-in-out duration-300 text-gray-800 dark:text-white hover:bg-white  font-semibold hover:text-sky-500   text-start p-2 "
          >
            Main
          </button>

          <div className=" w-full">
            <button
              className="w-full py-2 bg-transparent  transition ease-in-out duration-300 text-gray-800 dark:text-white hover:bg-white  font-semibold hover:text-sky-500   text-start p-2"
              onClick={togglePermissionDropdown}
            >
              <div className="w-full flex justify-between item-center ">
              <span>Permission Settings</span>
                      <svg
                      className={`-mr-1 ml-2 h-5 w-5 ${showPermissionDropdown && 'rotate-180 transition-all ease-in-out duration-300' }`} 
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="#007aff"
                      aria-hidden="true"
                      >
                      <path
                      fillRule="evenodd"
                      d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                      clipRule="evenodd"
                      />
                      </svg>
              </div>

            </button>
            {showPermissionDropdown && (
  <div className="w-full">
    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
      {/* Dropdown options go here */}
      <div
        onClick={() => {
          set_toggle_content(11) 
          set_ActiveOption(11)}}
        className={`block w-full cursor-pointer px-4 py-2 text-sm text-gray-700 dark:text-white ${
          activeOption === 11 ? 'bg-gray-300 dark:bg-indigo-950 hover:text-sky-400 rounded-r-full' : 'hover:bg-gray-100 hover:text-sky-400'
        }`}
        role="menuitem"
      >
        Student permission
      </div>
      <div
        onClick={() => {
          set_toggle_content(12) 
          set_ActiveOption(12)}}
        className={`block w-full cursor-pointer px-4 py-2 text-sm text-gray-700 dark:text-white ${
          activeOption === 12 ? 'bg-gray-300 dark:bg-indigo-950 hover:text-sky-400 rounded-r-full' : 'hover:bg-gray-100 hover:text-sky-400'
        }`}
        role="menuitem"
      >
        Teacher permission
      </div>
      <div
        onClick={() => {
          set_toggle_content(13) 
          set_ActiveOption(13)}}
        className={`block w-full cursor-pointer px-4 py-2 text-sm text-gray-700 dark:text-white ${
          activeOption === 13 ? 'bg-gray-300 dark:bg-indigo-950 hover:text-sky-400 rounded-r-full' : 'hover:bg-gray-100 hover:text-sky-400'
        }`}
        role="menuitem"
      >
        Parent permission
      </div>
    </div>
  </div>
)}
          </div>

          <button className="w-full py-2 bg-transparent transition ease-in-out duration-300 text-gray-800 dark:text-white hover:bg-white  font-semibold hover:text-sky-500   text-start p-2">
            Button 3
          </button>
        </div>
      </div>
    </div>
  );
};
