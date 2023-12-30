import React, { useState } from 'react'

export const SelectCountry = ({items , set_country}) => {
    const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);



  const handleItemClick = (item) => {
    setSelectedItem(item);
    set_country(item)
    setIsOpen(false);
  };  
  return (
    <div className="relative inline-block text-left w-full  ">
    <div >
      <span className="rounded-md shadow-sm ">
        <button
          type="button"
          className="inline-flex justify-between items-center w-full w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:border-blue-500 focus:shadow-outline-blue active:bg-gray-200 transition ease-in-out duration-150"
          id="dropdown-menu"
          aria-haspopup="true"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          {selectedItem ? selectedItem.name : 'Select an country'}
          <svg
            className={`w-5 h-5 ml-2 -mr-1 transition-transform duration-200 ${
              isOpen ? 'transform rotate-180' : ''
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              clipRule="evenodd"
              d="M6.293 8.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L10 7.414l-2.293 2.293a1 1 0 01-1.414 0z"
              fillRule="evenodd"
            />
          </svg>
        </button>
      </span>
    </div>
    {isOpen && (
      <div
        className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="dropdown-menu"
      >
        <div className="py-1" role="none">
          {items?.map((item) => (
            <button
              key={item.id}
              className={`w-full text-left px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900 ${
                selectedItem && selectedItem.id === item.id ? 'bg-gray-200' : ''
              }`}
              role="menuitem"
              onClick={() => handleItemClick(item)}
            >
              {item?.name}
            </button>
          ))}
        </div>
      </div>
    )}
  </div>
  )
}
