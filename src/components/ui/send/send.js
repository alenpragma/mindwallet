import React from "react";
import Assets from "./assets";

const SendTab = () => {
  return (
    <div>
      <div className='px-[20px] font-semibold lg:px-[46px] mt-[30px] lg:mt-[76px]'>
        {/* Send from */}
        <div>
          <h2 className=' text-md lg:text-lg text-[#343434]'>Send form</h2>
          <div>
            <select
              className='custom-select bg-[#fff] text-[#909090] text-sm lg:text-lg text-odd:text-green-200 text-even:text-blue-200      flex place-items-center border-[1px] border-[#FF971D] rounded-3xl  px-4 w-full lg:w-[553px] h-10 lg:h-14 focus:outline-none'
              name=''
              id=''
            >
              <option
                className='flex gap-5 text-odd:text-green-200 text-even:text-blue-200'
                value='PMIND'
              >
                User Wallet Address (8779877y765)
              </option>
              <option
                className=' text-odd:text-green-200 text-even:text-blue-200 text-primary opacity-50'
                value='USD'
              >
                BTD
              </option>
            </select>
          </div>
        </div>
        {/* Send To */}
        <div className='mt-[20px] lg:mt-[35px]'>
          <h2 className=' text-md lg:text-lg '>Send to</h2>
          <div>
            <input
              type='text'
              className='h-[40px] lg:h-[55px] w-full lg:w-[553px] border-[1px] border-[#FF971D] rounded-3xl text-[#909090]  px-3  outline-none'
            />{" "}
          </div>
        </div>

        {/* Assets */}
        <Assets />
      </div>
    </div>
  );
};

export default SendTab;
