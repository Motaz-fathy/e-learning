import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Toggle from '../shared/Toggle';
import { useTranslation } from 'react-i18next';
import { ChangeLanguage } from '../uitilty/Lang/lang';
export const Navbar = () => {
  const {t} = useTranslation()
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropservise , set_dropservise] = useState(true)
  const [profile , set_profile] = useState(false)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const {data} = useSelector(state => state.LoginReducer)
  return (
    <nav className="fixed z-40 w-full bg-white shadow-md backdrop:blur-md dark:bg-black dark:border-b-[1px] max-sm:dark:border-b-[1px] py-2  ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 dark:text-white">
              {/* <img className="h-8 w-8" src="/path/to/logo.png" alt="Logo" /> */} Logo
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  to="#"
                  className="text-gray-900 dark:text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  {t("Home")}
                </Link>
                <Link
                  to="#"
                  className="text-gray-900 dark:text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  {t("About Us")}
                </Link>
                <div className="relative group">
                  <button  onClick={() => set_dropservise(!dropservise)}
                  className="text-gray-900 dark:text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    {t("Services")}
                  </button>
                  <div className={`${dropservise && "h-0 py-0 mt-0 w-0 opacity-0 overflow-hidden"} transition ease-in-out duration-300 absolute z-10  bg-white text-gray-700 py-1 mt-2 rounded-md shadow-lg w-40`}>
                    <Link
                      to="#"
                      className="block px-4 py-2 text-sm"
                    >
                      Service 1
                    </Link>
                    <Link
                      to="#"
                      className="block px-4 py-2 text-sm"
                    >
                      Service 2
                    </Link>
                    <Link
                      to="#"
                      className="block px-4 py-2 text-sm"
                    >
                      Service 3
                    </Link>
                  </div>

                </div>
                <Link
                  to="#"
                  className="text-gray-900 dark:text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  {t("Contact Us")}
                </Link>
                <Link
                  to="#"
                  className="text-gray-900 dark:text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  {t("Partner")}
                </Link>
                <Link
                  to="#"
                  className="text-gray-900 dark:text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  {t("Problem")}
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6 gap-2">
              {!!data ? <div className='flex justify-center items-center  gap-2 '>
                <span className='text-sm font-bold dark:text-white'>{data?.data?.username}</span>
                <div className="relative group">
                  <div  onClick={() => set_profile(!profile)}
                  className="w-8 h-8 rounded-[100%] bg-gray-200 cursor-pointer flex justify-center items-center">   
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
                  </svg>
                  </div>

                  <div className={`${profile === false && "h-0 py-0 mt-0 w-0 opacity-0 overflow-hidden"} transition ease-in-out duration-300 absolute z-10 translate-x-[-80%] rtl:translate-x-[0%] bg-white text-gray-700 py-1 mt-2 rounded-md shadow-lg w-40`}>
                    <div
                      onClick={() => {
                      ChangeLanguage("en")
                      set_profile(false)
                      }}
                      className="block p-2  text-sm w-full cursor-pointer hover:bg-gray-200"
                    >
                      En
                    </div>
                    <div
                      onClick={() => {
                      ChangeLanguage("ar")
                      set_profile(false)
                      }}
                      className="block p-2  text-sm w-full cursor-pointer hover:bg-gray-200"
                    >
                     عربى
                    </div>
             
                  </div>

                </div>
                <Toggle />
                <Link to={'/login'} className="text-gray-900 dark:text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                {t("Log Out")}
              </Link>
              </div>  : <>
                <Link to={'/login'} className="text-gray-900 dark:text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                {t("Login")}
              </Link>
              <Link to={'/register'} className="ml-4 text-gray-900 dark:text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                {t("Sign Up")}
              </Link>
              <div className="relative group">
                  <div  onClick={() => set_profile(!profile)}
                  className="w-8 h-8 rounded-[100%] bg-gray-200 cursor-pointer flex justify-center items-center hover:text-gray-400">  
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
                    </svg>     
                  </div>

                  <div className={`${profile === false && "h-0 py-0 mt-0 w-0 opacity-0 overflow-hidden"} transition ease-in-out duration-300 absolute z-10 translate-x-[-80%] rtl:translate-x-[0%] bg-white text-gray-700 py-1 mt-2 rounded-md shadow-lg w-40`}>
                    <div
                      onClick={() => {
                      ChangeLanguage("en")
                      set_profile(false)
                      }}
                      className="block p-2  text-sm w-full cursor-pointer hover:bg-gray-200"
                    >
                      En
                    </div>
                    <div
                      onClick={() => {
                      ChangeLanguage("ar")
                      set_profile(false)
                      }}
                      className="block p-2  text-sm w-full cursor-pointer hover:bg-gray-200"
                    >
                     عربى
                    </div>
             
                  </div>

                </div>
              <Toggle />

              </> } 
            </div>
          </div>
          <div className="md:hidden ">
            <button
              onClick={toggleMenu}
              className="text-gray-900 hover:bg-gray-700 dark:text-white hover:text-white px-2 py-2 rounded-md text-sm font-medium"
            >
              Menu
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="#"
              className="text-gray-900 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              {t("Home")}
            </Link>
            <Link
              to="#"
              className="text-gray-900 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              {t("About Us")}
            </Link>
            <div className="relative group">
              <button onClick={() => set_dropservise(!dropservise)} className="text-gray-900 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                {t("Services")}
              </button>
              <div className={`${dropservise && "h-0 py-0 mt-0 w-0 opacity-0"}  transition ease-in-out duration-300  bg-white text-gray-700 py-1 mt-2 rounded-md shadow-lg`}>
                <Link
                  to="#"
                  className="block px-4 py-2 text-base"
                >
                  Service 1
                </Link>
                <Link
                  to="#"
                  className="block px-4 py-2 text-base"
                >
                  Service 2
                </Link>
                <Link
                  to="#"
                  className="block px-4 py-2 text-base"
                >
                  Service 3
                </Link>
              </div>
            </div>
            <Link
              to="#"
              className="text-gray-900 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              {t("Contact Us")}
            </Link>
            <Link
              to="#"
              className="text-gray-900 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              {t("Partner")}
            </Link>
            <Link
              to="#"
              className="text-gray-900 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              {t("Problem")}
            </Link>
          </div>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link className="text-gray-900 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Login
            </Link>
            <Link className="text-gray-900 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
