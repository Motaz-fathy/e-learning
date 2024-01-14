import React from "react";
import { useInView } from "react-intersection-observer";
export const Proceses_card = () => {

  const { ref: tht1, inView: vist1 } = useInView(); 
  const { ref: th2, inView: vis2 } = useInView(); 
  const { ref: th3, inView: vis3 } = useInView(); 
  const { ref: th4, inView: vis4 } = useInView(); 


  return (
    <section className="w-full h-auto p-4 flex justify-center items-center gap-3 max-sm:flex-col ">

      <div ref={tht1} className={`${vist1 && 'animate-slid-card-1'} w-5/6 m-auto h-[23rem] py-3 overflow-hidden p-4 rounded-xl shadow-xl bg-opacity-10 flex justify-center items-center hover:border-[1px] hover:border-sky-300   bg-white transition-all ease-in-out duration-300 hover:scale-105 cursor-pointer `}>
        <div className="flex flex-col items-center w-full h-full gap-3 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 mt-10 dark:text-sky-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
            />
          </svg>

          <span className="w-full text-center  p-2 text-3xl   dark:text-white ">
            نظام إدارة المواقع والبنية التحتية
          </span>
          <span className="w-full text-center p-2 text-xl  dark:text-gray-300 ">
            توفير نظام متكامل يتيح للسلطات المحلية إدارة المواقع والبنية التحتية
            بشكل فعّال. يتضمن ذلك إدارة المعلومات الجغرافية (GIS)، ومتابعة
            الصيانة، وتحليل البيانات لتحسين التخطيط الحضري.
          </span>
        </div>
      </div>

      <div ref={th2} className={`${vis2 && 'animate-slid-card-2'} w-5/6 m-auto h-[23rem] py-3 overflow-hidden p-4 rounded-xl shadow-xl bg-opacity-10 flex justify-center items-center hover:border-[1px] hover:border-sky-300   bg-white transition-all ease-in-out duration-300 hover:scale-105 cursor-pointer `}>
        <div className="flex flex-col items-center w-full h-full gap-3 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 mt-10 dark:text-sky-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
            />
          </svg>

          <span className="w-full text-center  p-2 text-3xl   dark:text-white ">
            تحسين الخدمات العامة
          </span>
          <span className="w-full text-center p-2 text-xl  dark:text-gray-300 ">
            تقديم حلاول تكنولوجية لتحسين توفير الخدمات العامة، مثل جدولة النقل
            العام، وتحسين إدارة النفايات، وتحسين خدمات الطاقة.
          </span>
        </div>
      </div>

      <div ref={th3} className={`${vis3 && 'animate-slid-card-3'} w-5/6 m-auto h-[23rem] py-3 overflow-hidden p-4 rounded-xl shadow-xl bg-opacity-10 flex justify-center items-center hover:border-[1px] hover:border-sky-300   bg-white transition-all ease-in-out duration-300 hover:scale-105 cursor-pointer `}>
        <div className="flex flex-col items-center w-full h-full gap-3 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 mt-10 dark:text-sky-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z"
            />
          </svg>

          <span className="w-full text-center  p-2 text-3xl   dark:text-white ">
            نظام إدارة الأمان والطوارئ
          </span>
          <span className="w-full text-center p-2 text-xl  dark:text-gray-300 ">
            تطوير نظام يتيح للمدن التحضير للحوادث والتصدي للطوارئ بفعالية. ذلك
            يتضمن إدارة الإنذارات، وتوجيه الموارد، وتوفير معلومات حية للجمهور.
          </span>
        </div>
      </div>

      <div ref={th4} className={`${vis4 && 'animate-slid-card-4'} w-5/6 m-auto h-[23rem] py-3 overflow-hidden p-4 rounded-xl shadow-xl bg-opacity-10 flex justify-center items-center hover:border-[1px] hover:border-sky-300   bg-white transition-all ease-in-out duration-300 hover:scale-105 cursor-pointer `}>
        <div className="flex flex-col items-center w-full h-full gap-3 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 mt-10 dark:text-sky-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3"
            />
          </svg>

          <span className="w-full text-center  p-2 text-3xl   dark:text-white ">
            بوابات المواطن والتواصل
          </span>
          <span className="w-full text-center p-2 text-xl  dark:text-gray-300 ">
            توفير واجهات رقمية سهلة الاستخدام للمواطنين لتحسين التواصل مع
            الحكومة المحلية، مما يشمل استطلاعات الرأي، وتقديم الشكاوى، وتوفير
            المعلومات الهامة.
          </span>
        </div>
      </div>

    </section>
  );
};
