import React, { useState, useEffect, useRef } from "react";

const Popover = ({ className, toggle , children }) => {
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
    <div className="">
      <button
        className={className}
        onClick={() => {
          handleToggle();
          toggle(); // Call the toggle function from the parent component
        }}
      >
        Toggle Popover
      </button>
      {showPopover && (
        <div
          ref={popoverRef}
          className="absolute top-0 left-0  w-full  p-2 bg-white/10 backdrop-blur-sm"
        >
          <div className="w-full flex justify-end items-center ">
          <span className="px-4 py-1 bg-gray-800 text-white rounded-md cursor-pointer" onClick={() => setShowPopover(false)}>close</span>
          </div>
          {/* Popover content */}
          {children}
        </div>
      )}
    </div>
  );
};

export default Popover;