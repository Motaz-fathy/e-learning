import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Toggle from '../shared/Toggle';
export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropservise , set_dropservise] = useState(false)
  const [profile , set_profile] = useState(false)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const {data} = useSelector(state => state.LoginReducer)
  return (
    <nav className="bg-gray-200/50 backdrop:blur-md dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              {/* <img className="h-8 w-8" src="/path/to/logo.png" alt="Logo" /> */} Logo
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  to="#"
                  className="text-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </Link>
                <Link
                  to="#"
                  className="text-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  About Us
                </Link>
                <div className="relative group">
                  <button  onClick={() => set_dropservise(!dropservise)}
                  className="text-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Services
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
                  className="text-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact Us
                </Link>
                <Link
                  to="#"
                  className="text-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Partner
                </Link>
                <Link
                  to="#"
                  className="text-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Problem
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6 gap-2">
              {!data ? <div className='flex justify-center items-center gap-2'>
                <span className='text-sm font-bold '>{data?.data?.name || "Motaz fathy "}</span>
                <div className="relative group">
                  <div  onClick={() => set_profile(!profile)}
                  className="w-8 h-8 rounded-[100%] bg-gray-200 cursor-pointer">       
                  </div>
                  <div className={`${profile && "h-0 py-0 mt-0 w-0 opacity-0 overflow-hidden"} transition ease-in-out duration-300 absolute z-10 translate-x-[-80%] bg-white text-gray-700 py-1 mt-2 rounded-md shadow-lg w-40`}>
                    <Link
                      to="#"
                      className="block p-2  text-sm"
                    >
                      Service 1
                    </Link>
                    <Link
                      to="#"
                      className="block p-2  text-sm"
                    >
                      Service 2
                    </Link>
                    <Link
                      to="#"
                      className="block p-2  text-sm"
                    >
                      Service 3
                    </Link>
                  </div>

                </div>
                <Toggle />
              </div>  : <>
                <button className="text-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Login
              </button>
              <button className="ml-4 text-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Sign Up
              </button>
              <Toggle />
              </> } 
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-900 hover:bg-gray-700 hover:text-white px-2 py-2 rounded-md text-sm font-medium"
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
              Home
            </Link>
            <Link
              to="#"
              className="text-gray-900 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              About Us
            </Link>
            <div className="relative group">
              <button onClick={() => set_dropservise(!dropservise)} className="text-gray-900 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Services
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
              Contact Us
            </Link>
            <Link
              to="#"
              className="text-gray-900 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Partner
            </Link>
            <Link
              to="#"
              className="text-gray-900 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Problem
            </Link>
          </div>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button className="text-gray-900 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Login
            </button>
            <button className="text-gray-900 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
