import React from 'react'
import { Service_card } from '../service/Service_card'
import { Bluring_effect } from '../../shared/Bluring_effect'

export const Proceses_header = () => {
  return (
    <div className="w-full relative isolate px-6 pt-0 lg:px-8">
    <Bluring_effect />
    <div className="w-full mx-auto    ">
      <span className="dark:text-white w-full text-center flex justify-center items-center py-5 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl  mx-auto max-w-2xl">
      عملية العمل لدينا
      </span>
      <div className="text-center w-full ">
        <h1 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl max-w-2xl  mx-auto dark:text-gray-400">
        كيف ستساعدك خدماتنا على تنمية عملك
        </h1>
   
       
      </div>
    </div>
  </div>
  )
}
