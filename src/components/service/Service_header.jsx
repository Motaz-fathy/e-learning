import React from "react";
import { useInView } from 'react-intersection-observer';

export const Service_header = () => {
  const { ref: th1, inView: vis1 } = useInView(); 
  const { ref: th2, inView: vis2 } = useInView(); 
  const { ref: th3, inView: vis3 } = useInView(); 
  return (
    <div className="w-full relative isolate px-6 pt-0 lg:px-8">
      <div className="w-full mx-auto    ">
        <span ref={th1} className={`${vis1 && 'animate-slid-in-1'} dark:text-white w-full text-center flex justify-center items-center py-5 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl  mx-auto max-w-2xl`}>
          service
        </span>
        <div className="text-center w-full ">
          <h1 ref={th2}  className={`${vis2 && 'animate-slid-in-2'} text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl max-w-2xl  mx-auto dark:text-white`}>
            Data to enrich your online business
          </h1>
          <p ref={th3}  className={`${vis3 && 'animate-slid-in-3'} mt-6 text-lg leading-8 text-gray-600 max-w-2xl  mx-auto dark:text-gray-400`}>
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>

          
        </div>
      </div>
    </div>
  );
};
