import React  from 'react';
import { Section1 } from './Section1';
import { Section2 } from './Section2';
import { Footer } from './Footer';

export const Main = () => {




  return (
     <div className='container flex flex-col items-center gap-10 dark:bg-gray-600'>
        <Section1 />
        <Section2 />
        <Footer />
     </div>
  );
};

