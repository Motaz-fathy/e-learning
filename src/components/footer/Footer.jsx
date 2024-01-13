import React from "react";
import { Bluring_effect } from "../../shared/Bluring_effect";
import { Bluring_circl } from "../../shared/Bluring_circl";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="relative w-full h-auto isolate py-16  backdrop-blur-2xl flex items-center flex-col overflow-hidden  ">
      <Bluring_effect />
      <div className="w-5/6  h-auto flex justify-between items-start  gap-4 max-sm:flex-col  border-b-[1px] border-gray-500 dark:border-gray-200 py-4">
        <section className="flex flex-col items-start gap-3 w-1/3 max-sm:w-full ">
          <img
            alt=""
            src="./images/footer/Teletech-Logo-white.png"
            className="w-20 h-20 overflow-hidden"
          />
          <p className="text-md p-2 dark:text-white ">
            في عصر التكنولوجيا الحديثة الذي نعيش فيه، تشكل المدن قلب حياتنا
            اليومية، حيث يعيش ويتفاعل فيها الملايين من الأشخاص. وفي ظل التحديات
            المتزايدة التي تواجه المدن في مجالات مثل التنظيم الحضري، وإدارة
            المرافق العامة، والحفاظ على البيئة، يصبح أمر تحسين وتسهيل عمليات
            الإدارة المدنية ضرورة ملحة.
          </p>
          <div className="w-5/6 h-20 flex justify-between items-center p-4 bg-white shadow-xl rounded-2xl ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
              />
            </svg>
            <div className="flex flex-col items-start gap-2">
              <span className="text-xl ">تحدث إلى دعمنا</span>
              <p className=" ">01016663555</p>
            </div>
          </div>
        </section>

        <section className="flex justify-center items-start gap-3 w-1/3 max-sm:w-full ">
          <ul className="w-full flex flex-col items-start dark:text-white">
            <li>الخدمات</li>
            <li className="flex justify-start items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
                />
              </svg>
              <Link to="/"> أسواق المدينة </Link>
            </li>
            <li className="flex justify-start items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
                />
              </svg>
              <Link to="/"> أسواق المدينة </Link>
            </li>

            <li className="flex justify-start items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
                />
              </svg>
              <Link to="/"> خريطة المدينة </Link>
            </li>

            <li className="flex justify-start items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
                />
              </svg>
              <Link to="/"> شركات الصيانة </Link>
            </li>

            <li className="flex justify-start items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
                />
              </svg>
              <Link to="/"> معالم المدينة </Link>
            </li>

            <li className="flex justify-start items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
                />
              </svg>
              <Link to="/"> أرقام الطورائ </Link>
            </li>
          </ul>

          <ul className="w-full flex flex-col items-start dark:text-white">
            <li>لينكات تهمك</li>
            <li className="flex justify-start items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
                />
              </svg>
              <Link to="/"> من نحن </Link>
            </li>
            <li className="flex justify-start items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
                />
              </svg>
              <Link to="/"> اتصل بنا </Link>
            </li>

            <li className="flex justify-start items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
                />
              </svg>
              <Link to="/"> شركاءنا </Link>
            </li>

            <li className="flex justify-start items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
                />
              </svg>
              <Link to="/"> تقديم شكوي </Link>
            </li>
          </ul>

        </section>

        <section  className="flex flex-col items-start gap-3 w-1/3 max-sm:w-full dark:text-white"> 
          <h2>النشرة الإخبارية</h2>
          <p>قم بمتابعة النشرة الآخبارية ليصلك كل جديد لدينا !</p>
           <div className="w-auto h-12 bg-white shadow-md p-4 flex justify-between items-center ">
            <button>send</button>
            <input type="text" />
           </div>
        </section>
      </div>
       <div className="pt-4  ">حقوق النشر © 2024. جميع الحقوق محفوظة Moatz</div>
      <Bluring_circl color={"blue"} />
    </div>
  );
};
