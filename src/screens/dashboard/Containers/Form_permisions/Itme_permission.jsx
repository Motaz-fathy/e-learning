import React from 'react'

export const Itme_permission = ({premission , handleCheckboxChange , filter_name}) => {
  return (
    <>
       {premission.map((admin , index) => {
       if(admin.content_type_details.model === filter_name) {
        return  (
        <div key={index} className="w-full flex justify-start items-center gap-2 border-b-[1px] border-sky-500">
            <p className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">{admin.codename}</p>
            <div className="inline-flex items-center">
            <label className="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="checkbox">
            <input type="checkbox"
                className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-gray-400
                transition-all before:absolute before:top-2/4 before:left-2/4 
                before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 
                before:rounded-full before:bg-blue-gray-400 before:opacity-0 before:transition-opacity
                checked:border-sky-900 checked:bg-sky-500 checked:before:bg-sky-400 hover:before:opacity-10
                dark:checked:bg-gray-400 dark:checked:before:bg-white
                "
                id="checkbox"  onChange={() => {
                   handleCheckboxChange(admin)
                  }}/>
            <span
                className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                stroke="currentColor" stroke-width="1">
                <path fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"></path>
                </svg>
            </span>
            </label>
            </div> 
        </div>
        
        )
        
       }
      })}

    </>
  )
}
