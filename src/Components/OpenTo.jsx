import React from "react";

const OpenTo = () => {
  return (
    <div className='flex items-center w-fit gap-3 pl-2 pr-5  rounded-full border border-green-300/80 bg-[#f0fff0] dark:border-green-400/40 dark:bg-green-900/30'>
      {/* Indicator */}
      <div className='relative w-10 h-10 flex items-center justify-center shrink-0'>
        <span className='absolute w-8 h-8 rounded-full border border-green-400/25 animate-pulse-ring' />
        <span className='absolute w-5 h-5 rounded-full border border-green-400/45 animate-pulse-ring-mid' />
        <span className='relative z-10 w-2.5 h-2.5 rounded-full bg-linear-to-br from-green-300 via-green-500 to-green-700 animate-pulse-dot' />
      </div>

      {/* Text */}
      <div className=''>
        <p className='text-[14px] tracking-wide text-[#1e4620]  dark:text-green-50 leading-none'>
          Open to <span className=''>Opportunities</span>
        </p>
      </div>
    </div>
  );
};

export default OpenTo;
