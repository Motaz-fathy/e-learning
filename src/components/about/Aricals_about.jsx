import React from 'react';
import { useInView } from 'react-intersection-observer';
export const Aricals_about = () => {

  const { ref: th1, inView: vis1 } = useInView();
  const { ref: th2, inView: vis2 } = useInView();
  const { ref: th3, inView: vis3 } = useInView();
  return (
    <div className="w-2/5 h-auto  flex flex-col items-start max-sm:w-full p-2 gap-4 dark:text-white max-sm:p-0">
     
        <span ref={th1} className={`text-4xl font-bold dark:text-white max-sm:w-full max-sm:text-center ${vis1 === true && 'animate-slid-in-1'}`}>
          فقط خدمات عالية الجودة
        </span>
      
      <p ref={th2} className={`text-gray-800 dark:text-white max-sm:w-full max-sm:text-center ${vis2 && 'animate-slid-in-2'}`}>
        هدفنا الرئيسي هو توفير منصة رقمية تجمع بين المواطنين والسلطات المحلية،
        بهدف تحسين التواصل وتبادل المعلومات بين الطرفين. سيقدم الموقع مجموعة
        واسعة من الخدمات والميزات التي تسهل على المواطنين الوصول إلى المعلومات
        الحيوية والمشاركة في إدارة مجتمعاتهم. . ...
      </p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="Layer_1"
        data-name="Layer 1"
        viewBox="0 0 115.34 122.88"
        data-locator-target="vscode"
        className="w-20 h-20 bg-sky-400 p-3 rounded-full max-sm:m-auto"
      >
        <path d="M97.74,119.52a2,2,0,0,1-.68-.12V65.93a2,2,0,0,1,.68-.12c3.34,0,6.43,5,8.48,7l-.46-12.12c0-12.8-3.72-23.11-9.68-30.93a7.37,7.37,0,0,1-5.86-2.23l-.68-.7C80.91,18.29,69,14.44,57.24,14.66S33.76,19.19,25.69,26.91l-.66.64a7.3,7.3,0,0,1-6.49,2.05c-6,7.84-9.75,18.21-9.75,31.14L8.33,74.63c2.25-2.71,6.34-8.66,10-8.82v53.71C10.52,119.36,4.91,107.05,3,101H0V60.74A57.33,57.33,0,0,1,12.83,24.57a7.35,7.35,0,0,1,1.8-7.36l1-.95C26.36,6,41.62.3,57,0s31.25,4.9,42.87,16.46l.91.93a7.33,7.33,0,0,1,1.74,7.2,57.34,57.34,0,0,1,12.81,36.13V101h-2.21c-1.89,6.14-7.54,18.57-15.39,18.57Zm-5.55,3.36h-9a3.48,3.48,0,0,1-3.48-3.47V65.65a3.49,3.49,0,0,1,3.48-3.48h9v60.71Zm-69-60.71H33a3.5,3.5,0,0,1,3.48,3.48v53.76A3.49,3.49,0,0,1,33,122.88H23.14V62.17Z" />
      </svg>
      <p ref={th3} className={`text-gray-800 dark:text-white max-sm:w-full max-sm:text-center ${vis3 && 'animate-slid-in-3'}`}>
        ميزات الموقع: لوحة التحكم الشخصية: يتيح الموقع للمواطنين إمكانية إنشاء
        حساب شخصي يتيح لهم متابعة مستجدات المشاريع والخدمات في منطقتهم. نظام
        إبلاغ الأعطال: يمكن للمستخدمين الإبلاغ عن أعطال أو مشاكل في البنية
        التحتية بشكل فوري، مما يساعد في تحسين استجابة السلطات المحلية. منتدى
        المجتمع: يتيح الموقع للمستخدمين التفاعل والتبادل الفعّال للآراء
        والمقترحات حول القضايا المحلية.
      </p>
    </div>
  );
};
