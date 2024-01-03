import React from 'react'

export const Saidbar = ({showSidebar , setShowSidebar}) => {
  return (
    <div
    className={` shadow-sm w-1/5 flex-shrink-0  border-r-[1px] rtl:border-l-[1px] border-gray-400   ${
      showSidebar ? 'block' : 'hidden'
    } lg:block  lg:min-h-[48vw] max-sm:z-50 max-sm:w-full max-sm:absolute max-sm:min-h-screen max-sm:bg-white/50 max-sm:backdrop-blur-sm`}
  >
    {/* Sidebar content */}
    <div className="p-4">
      <div className='w-full  justify-end items-end hidden max-sm:flex cursor-pointer' onClick={() => setShowSidebar(false)}><span className='text-md font-extrabold '>x</span></div>
      {/* Logo */}
      <div className="text-center mb-6">
         {/* <img src="/path/to/logo.png" alt="Logo" className="w-8 h-8" /> */}
         <div>Logo</div>
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
  )
}
