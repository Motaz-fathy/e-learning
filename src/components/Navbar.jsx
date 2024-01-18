import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Toggle from '../shared/Toggle';
import { useTranslation } from 'react-i18next';
import { ChangeLanguage } from '../uitilty/Lang/lang';
import { LangButton } from '../shared/LangButton';
export const Navbar = () => {
  const {t} = useTranslation()
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropservise , set_dropservise] = useState(true)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  let [scroll_height, setScroll_height] = useState();
  const Scroll_Height = () => {
    setScroll_height(window.scrollY);
  };
  window.addEventListener("scroll", Scroll_Height);
  const {data} = useSelector(state => state.LoginReducer)
  return (
    <nav className= {` z-50 rtl:font-sans rtl:font-bold ${scroll_height >= 40 && "fixed z-50  "} w-full backdrop-blur-lg  bg-white/70 dark:bg-gray-600 dark:bg-opacity-20`}  >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 dark:text-white">
              {/* <img className="h-8 w-8" src="/path/to/logo.png" alt="Logo" /> */} Logo
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  to="/"
                  className="text-gray-900 dark:text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  {t("Home")}
                </Link>
                <Link
                  to="/about"
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
                      to="/service"
                      className="block px-4 py-2 text-sm"
                    >
                      Service 1
                    </Link>
                    <Link
                      to="/service"
                      className="block px-4 py-2 text-sm"
                    >
                      Service 2
                    </Link>
                    <Link
                      to="/service"
                      className="block px-4 py-2 text-sm"
                    >
                      Service 3
                    </Link>
                  </div>

                </div>
                <Link
                  to="/contact"
                  className="text-gray-900 dark:text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  {t("Contact Us")}
                </Link>
                <Link
                  to="/partner"
                  className="text-gray-900 dark:text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  {t("Partner")}
                </Link>
                <Link
                  to="/problem"
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
                <LangButton />
                <Toggle />
                <Link to={'/login'} className="  bg-red-500 text-white dark:text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                {t("Log Out")}
                </Link>
              </div>  : <>
                <Link to={'/login'} className="text-gray-900 dark:text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                {t("Login")}
              </Link>
              <Link to={'/register'} className="ml-4 text-gray-900 dark:text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                {t("Sign Up")}
              </Link>
              <LangButton />
              <Toggle />

              </> } 
            </div>
          </div>
          <div className="md:hidden flex justify-center items-center gap-2">
            <LangButton />
            <Toggle />
            <button
              onClick={toggleMenu}
              className="text-gray-900 hover:bg-gray-700 dark:text-white hover:text-white px-2 py-2 rounded-md text-sm font-medium"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden dark:text-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="text-gray-900 hover:bg-gray-700 dark:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              {t("Home")}
            </Link>
            <Link
              to="/about"
              className="text-gray-900 hover:bg-gray-700 dark:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              {t("About Us")}
            </Link>
            <div className="relative group">
              <div onClick={() => set_dropservise(!dropservise)} className="text-gray-900 cursor-pointer hover:bg-gray-700 dark:text-white block px-3 py-2 rounded-md text-base font-medium">
                {t("Services")}
              </div>
              <div className={`${dropservise && "h-0 py-0 mt-0 w-0 opacity-0 overflow-hidden"}  transition-all ease-in-out duration-300 dark:text-white dark:bg-gray-800 bg-white text-gray-700 py-1 mt-2 rounded-md shadow-lg`}>
                <Link
                  to="/service"
                  className="block px-4 py-2 text-base hover:bg-gray-700 hover:rounded-lg"
                >
                  Service 1
                </Link>
                <Link
                  to="/service"
                  className="block px-4 py-2 text-base hover:bg-gray-700 hover:rounded-lg"
                >
                  Service 2
                </Link>
                <Link
                  to="/service"
                  className="block px-4 py-2 text-base hover:bg-gray-700 hover:rounded-lg"
                >
                  Service 3
                </Link>
              </div>
            </div>
            <Link
              to="/contact"
              className="text-gray-900 hover:bg-gray-700 dark:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              {t("Contact Us")}
            </Link>
            <Link
              to="/partner"
              className="text-gray-900 hover:bg-gray-700 dark:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              {t("Partner")}
            </Link>
            <Link
              to="/problem"
              className="text-gray-900 hover:bg-gray-700 dark:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              {t("Problem")}
            </Link>
          </div>
          <div className="w-full px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {!!data ? <>
                <Link to={'/login'} className="text-gray-900 hover:bg-red-500 bg-red-400 dark:text-white block px-3 py-2 rounded-md text-base font-medium text-center">
                {t("Log Out")}
                </Link>
            </> : <> 
            
            <Link to={'/login'} className="text-gray-900 hover:bg-gray-700 dark:text-white block px-3 py-2 rounded-md text-base font-medium">
              Login
            </Link>
            <Link to={'/register'} className="text-gray-900 hover:bg-gray-700 dark:text-white block px-3 py-2 rounded-md text-base font-medium">
              Sign Up
            </Link>
            </>}
          </div>
        </div>
      )}
    </nav>
  );
};
