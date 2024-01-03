import React, { useEffect, useRef, useState } from 'react'
import { ChangeLanguage } from '../../../uitilty/Lang/lang'
import { SearchForm } from './SearchForm';
import Toggle from '../../../shared/Toggle';

export const Navbar = ({profile , set_profile , toggleSidebar}) => {

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
    <nav className=" w-full px-2 m-auto py-4 bg-gray-200  flex items-center justify-between bg-white/50 backdrop-blur-sm  border-b-[1px] border-b-gray-400">
      <div className="flex items-center ">
        {/* Menu Icon */}
        <button
          className="lg:hidden mr-4"
          onClick={toggleSidebar}
        >
          <svg
            className="w-6 h-6 fill-current text-gray-500"
            viewBox="0 0 24 24"
          >
            <path
              d="M4 6h16M4 12h16M4 18h16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        {/* Logo */}
        {/* <img src="/path/to/logo.png" alt="Logo" className="w-8 h-8" /> */}
      </div>
      <div className="flex items-center gap-3 ">
        {/* Buttons */}
        <button className=" text-gray-500 hover:text-gray-700">
          Button 1
        </button>
        <button className=" text-gray-500 hover:text-gray-700">
          Button 2
        </button>
        <button className=" text-gray-500 hover:text-gray-700">
          Button 3
        </button>
        {/* Search Form */}
        <SearchForm />
        {/* lang button */}
        <div className="relative group">
              <div     onClick={() => {
                        handleToggle();
                        setShowPopover(!showPopover) // Call the toggle function from the parent component
                      }}
              className="w-8 h-8 rounded-[100%] bg-gray-200 cursor-pointer flex justify-center items-center hover:text-gray-400">  
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
                </svg>     
              </div>

              <div ref={popoverRef}  className={`${showPopover === false && "h-0 py-0 mt-0 w-0 opacity-0 overflow-hidden"} transition ease-in-out duration-300 absolute z-10 translate-x-[-80%] rtl:translate-x-[0%] bg-white text-gray-700 py-1 mt-2 rounded-md shadow-lg w-40`}>
                <div
                  onClick={() => {
                  ChangeLanguage("en")
                  setShowPopover(false)
                  }}
                  className="block p-2  text-sm w-full cursor-pointer hover:bg-gray-200"
                >
                  En
                </div>
                <div 
                  onClick={() => {
                  ChangeLanguage("ar")
                  setShowPopover(false)
                  }}
                  className="block p-2  text-sm w-full cursor-pointer hover:bg-gray-200"
                >
                 عربى
                </div>
         
              </div>

        </div>
        {/* mode button */}
        <Toggle />

      </div>
    </nav>
  )
}
