import React from 'react'

export const Saidbar = ({showSidebar , setShowSidebar , set_toggle_conntent}) => {
  
  return (
    <div
    className={` shadow-md w-1/5 flex-shrink-0  border-r-[1px] rtl:border-l-[1px] border-white  bg-gradient-to-t to-sky-500 from-white dark:bg-gray-600  ${
      showSidebar ? 'block' : 'hidden'
    } lg:block  lg:min-h-[48vw] max-sm:z-50 max-sm:w-full max-sm:absolute max-sm:min-h-screen max-sm:bg-white/50 max-sm:backdrop-blur-sm`}
  >
    {/* Sidebar content */}
    <div className="pt-4">
      <div className='w-full  justify-end items-end hidden max-sm:flex cursor-pointer' onClick={() => setShowSidebar(false)}><span className='text-md font-extrabold '>x</span></div>
      {/* Logo */}
      <div className="text-center mb-6">
         {/* <img src="/path/to/logo.png" alt="Logo" className="w-8 h-8" /> */}
         <div>Logo</div>
      </div>
      {/* Buttons */}
      <div className="w-full  m-auto flex flex-col items-center">
        <button onClick={() => set_toggle_conntent(0)}
        className=" w-full  py-2 bg-transparent transition ease-in-out duration-300 text-white hover:bg-white  font-semibold hover:text-sky-500  border-t border-white hover:border-transparent ">
        Main
        </button>
        <button  onClick={() => set_toggle_conntent(1)}
     className=" w-full  py-2 bg-transparent transition ease-in-out duration-300 text-white hover:bg-white  font-semibold hover:text-sky-500  border-t border-white hover:border-transparent ">
     permission settings
        </button>
        <button
     className=" w-full  py-2 bg-transparent transition ease-in-out duration-300 text-white hover:bg-white  font-semibold hover:text-sky-500  border-t border-white hover:border-transparent ">
     Button 3
        </button>
      </div>

      {/* <div className='absolute bottom-[100px] w-full h-[15vw] rounded-[20px] bg-gradient-to-t to-white from-sky-500 dark:bg-gray-600 flex justify-center items-center'>
      <button
     className=" w-full  py-2 bg-transparent transition ease-in-out duration-300 text-white hover:bg-white  font-semibold hover:text-sky-500  border-t border-white hover:border-transparent ">
     Button 3
        </button>
      </div> */}
    </div>
    </div>
  )
}
