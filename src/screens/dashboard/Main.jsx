import React from 'react';
import { useState } from 'react';

export const Main = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="flex h-screen max-sm:z-[9999999]">
      {/* Sidebar */}
      <div
        className={`bg-gray-300/50 backdrop-blur-sm shadow-sm w-64 flex-shrink-0  ${
          showSidebar ? 'block' : 'hidden'
        } lg:block max-sm:z-50 max-sm:w-full max-sm:absolute max-sm:min-h-screen `}
      >
        {/* Sidebar content */}
        <div className="p-4">
          <div className='w-full  justify-end items-end hidden max-sm:flex cursor-pointer' onClick={() => setShowSidebar(false)}><span className='text-md font-extrabold '>x</span></div>
          {/* Logo */}
          <div className="text-center mb-6">
            <img src="/path/to/logo.png" alt="Logo" className="w-12 h-12" />
          </div>
          {/* Buttons */}
          <div className="space-y-2">
            <button className="w-full px-4 py-2 text-left rounded-lg bg-gray-300 hover:bg-gray-400">
              Button 1
            </button>
            <button className="w-full px-4 py-2 text-left rounded-lg bg-gray-300 hover:bg-gray-400">
              Button 2
            </button>
            <button className="w-full px-4 py-2 text-left rounded-lg bg-gray-300 hover:bg-gray-400">
              Button 3
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col flex-grow">
        {/* Navbar */}
        <nav className="bg-gray-200 px-4 py-2 flex items-center justify-between bg-white/50 backdrop-blur-sm shadow-sm">
          <div className="flex items-center">
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
            <img src="/path/to/logo.png" alt="Logo" className="w-8 h-8" />
          </div>
          <div className="flex items-center">
            {/* Buttons */}
            <button className="px-4 py-2 text-gray-500 hover:text-gray-700">
              Button 1
            </button>
            <button className="px-4 py-2 text-gray-500 hover:text-gray-700">
              Button 2
            </button>
            <button className="px-4 py-2 text-gray-500 hover:text-gray-700">
              Button 3
            </button>
          </div>
        </nav>

        {/* Container */}
        <div className="flex-grow bg-white p-4">
          {/* Content */}
          <h1 className="text-2xl font-bold mb-4">Dashboard Container</h1>
          <p>This is the main content area of the dashboard.</p>
        </div>
      </div>
    </div>
  );
};
