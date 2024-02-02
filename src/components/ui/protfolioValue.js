import React from "react";

const ProtfolioValue = () => {
  return (
    <div className='max-w-screen mx-auto px-3  w-[300px] lg:w-[357px] mt-4    '>
      <div className='relative m-0 p-0'>
        <div className='w-[110px] lg:w-[124px] rounded-full h-[110px] lg:h-[124px] bg-[#FF971D]'></div>

        <div className='gradient z-10 p-5 pt-6 relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[180px] h-[120px] lg:w-[233px] lg:h-[150px]'>
          <span className='text-[#252525] text-sm '>Portfolio Value</span>
          <h2 className='text-2xl font-bold pt-4 leading-7'>$23.00</h2>
        </div>

        <div className='absolute bottom-4 right-0 w-[110px] lg:w-[125px] rounded-full h-[110px] lg:h-[125px] bg-[#290059]'></div>
      </div>
    </div>
  );
};

export default ProtfolioValue;
