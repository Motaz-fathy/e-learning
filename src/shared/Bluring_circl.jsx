import React from 'react';

export const Bluring_circl = ({ color }) => {
  return (
    <svg
      viewBox="0 0 1024 1024"
      className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0 max-sm:hidden"
      aria-hidden="true"
    >
      <circle cx={512} cy={512} r={512} fill={color} fillOpacity="0.3" />
      <defs>
        <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
          <stop stopColor={color} />
          <stop offset={1} stopColor={color} />
        </radialGradient>
      </defs>
    </svg>
  );
};