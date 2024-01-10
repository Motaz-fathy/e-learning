import React, { useEffect, useRef, useState } from 'react'
import { SearchForm } from '../../../shared/SearchForm';
import Toggle from '../../../shared/Toggle';
import { LangButton } from '../../../shared/LangButton';

export const Navbar = ({profile , set_profile , toggleSidebar}) => {

 
  return (
    <nav className="dark:bg-gray-600 w-full  m-auto p-2 rounded-full  shadow-md border-[1px] border-sky-400 flex items-center justify-between bg-white/50 backdrop-blur-sm  mt-5">
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
        <span>Logo</span>
      </div>
      <div className="flex items-center gap-3 ">
        {/* Buttons */}
        {/* <button 
        className=" p-2 bg-transparent transition ease-in-out duration-300 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white  border border-blue-500 hover:border-transparent rounded">
          Button 1
        </button>
        <button  className=" p-2 bg-transparent transition ease-in-out duration-300 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white  border border-blue-500 hover:border-transparent rounded">
          Button 2
        </button>
        <button  className=" p-2 bg-transparent transition ease-in-out duration-300 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white  border border-blue-500 hover:border-transparent rounded">
           Button 3
        </button> */}
        {/* Search Form */}
        <SearchForm />
        {/* lang button */}
         <LangButton />
        {/* mode button */}
        <Toggle />

      </div>
    </nav>
    
  )
}
