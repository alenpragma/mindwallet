import React from "react";

const ProtfolioValue = () => {
  return (
    <div className=' w-[357px] mt-4 h-[271px] border'>
      <div className='relative'>
        <div className='w-[124px] rounded-full h-[124px] bg-[#FF971D]'></div>

        <div className='gradient z-10 p-5 pt-6 relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[233px] h-[150px]'>
          <span className='text-[#252525] text-sm '>Portfolio Value</span>
          <h2 className='text-2xl font-bold pt-4 leading-7'>$23.00</h2>
        </div>

        <div className='absolute bottom-4 right-0 w-[125px] rounded-full h-[125px] bg-[#290059]'></div>
      </div>
    </div>
  );
};

export default ProtfolioValue;
