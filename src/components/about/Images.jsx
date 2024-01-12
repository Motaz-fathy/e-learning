import React from 'react';

export const Images = () => {
  return (
    <div className='relative w-3/5 max-sm:w-full overflow-hidden'>
      <div className='relative w-full h-auto max-sm:w-full '>
        <div className='absolute bottom-5  right-20 shadow-lg w-80 h-24 bg-white rounded-xl flex justify-between items-center'>
          <img
            src='./images/service/about-img2.jpg'
            alt='about-img2'
            className='w-20 h-20 m-2 rounded-lg order-2'
          />
          <div className='w-20 h-auto flex flex-col items-start p-1 order-3'>
            <span className='text-3xl font-bold text-red-300'>4.5k</span>
            <span className='text-md font-bold text-gray-800'>عملاء راضون</span>
          </div>
        </div>
        <img
          src='./images/service/teletech-about.webp'
          alt='teletech'
          className=' rounded-[30px] w-full lg:h-full m-auto order-1 max-sm:h-auto'
        />
      </div>
    </div>
  );
};