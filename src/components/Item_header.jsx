import React from "react";

export const Item_header = () => {
  return (
    <div className="w-full h-full flex justify-between px-10 max-sm:px-2 items-center gap-2 max-sm:flex-col ">
      <div className="w-full max-sm:w-full flex flex-col items-center h-full  gap-6 max-sm:gap-1 m-auto">
      <div className="w-full sm:mb-8 sm:flex sm:justify-center">
        <div className="relative rounded-full max-sm:text-xs px-3 py-1 text-sm leading-6 text-gray-600 text-center ring-1 ring-gray-900/10 hover:ring-gray-900/20">
          Announcing our next round of funding.{' '}
          <span  className="font-semibold text-indigo-600">
            <span className="absolute inset-0" aria-hidden="true" />
            Read more <span aria-hidden="true">&rarr;</span>
          </span>
        </div>
      </div>
        <span className="w-full max-sm:text-xl max-sm:w-full max-sm:m-auto  text-6xl  font-sans leading-11 font-bold text-center dark:text-white">
          نحن نقدم أفضل خدمات . التى توفر احتياجاتك.
        </span>
        <p className="w-full text-center max-sm:text-xs dark:text-gray-200">
          في عصر التكنولوجيا الحديثة الذي نعيش فيه، تشكل المدن قلب حياتنا
          اليومية، حيث يعيش ويتفاعل فيها الملايين من الأشخاص. وفي ظل التحديات
          المتزايدة التي تواجه المدن في مجالات مثل التنظيم الحضري، وإدارة
          المرافق العامة، والحفاظ على البيئة، يصبح أمر تحسين وتسهيل عمليات
          الإدارة المدنية ضرورة ملحة.
        </p>
      </div>
    </div>
  );
};
