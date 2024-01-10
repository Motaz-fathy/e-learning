import React, { useEffect, useRef, useState } from "react";

export const SearchForm = () => {
  const [showPopover, setShowPopover] = useState(false);
  
  const popoverRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setShowPopover(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleToggle = () => {
    setShowPopover(!showPopover);
  };
  return (
    <div>
      <button
         onClick={() => {
          handleToggle();
          setShowPopover(!showPopover) // Call the toggle function from the parent component
        }}
        className="p-2 bg-transparent transition ease-in-out duration-300 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white  border border-blue-500 hover:border-transparent rounded-[100%]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-5 h-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </button>
      {showPopover &&
        <div ref={popoverRef} className="absolute w-full h-auto left-0 right-0 z-50  flex items-center justify-center   ">
          <div className="bg-white p-6 rounded-lg shadow-lg w-5/6 ">
            <div className="mb-4">
              <label htmlFor="search" className="sr-only">
                Search
              </label>
              <input
                type="text"
                id="search"
                className="border border-gray-300 rounded-lg p-2 w-full"
                placeholder="Search..."
              />
            </div>
            <div className="flex justify-end">
              <button
                onClick={handleToggle}
                className="bg-gray-800 text-white px-4 py-2 rounded-md"
              >
                Close
              </button>
            </div>
          </div>
        </div>}
    </div>
  );
};
