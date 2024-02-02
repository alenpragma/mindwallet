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
              className='custom-select  text-[#909090] text-sm lg:text-lg text-odd:text-green-200 text-even:text-blue-200      flex place-items-center border-[1px] border-[#FF971D] rounded-3xl  px-4 w-full lg:w-[553px] h-10 lg:h-14 focus:outline-none'
              name=''
              id=''
            >
              <option
                className='flex gap-5 text-odd:text-green-200 text-even:text-blue-200'
                value='PMIND'
              >
                <span className='text-sm lg:text-lg '>
                  {" "}
                  User Wallet Address
                </span>
                <span className='text-lg '>(8779877y765)</span>
              </option>
              <option
                className=' text-odd:text-green-200 text-even:text-blue-200 text-primary opacity-50'
                value='USD'
              >
                <span className='text-[#800]'>BTD</span>
                <span className='text-[#fff]'> USD</span>
              </option>
            </select>
          </div>
        </div>
        {/* Send To */}
        <div className='mt-[20px] lg:mt-[35px]'>
          <h2 className=' text-md lg:text-lg '>Send to</h2>
          <div>
            <select
              className='custom-select  text-[#909090]  text-sm lg:text-lg   flex place-items-center border-[1px] border-[#FF971D] rounded-3xl  px-4 w-full lg:w-[h-10 lg:553px] h-10 lg:h-14 focus:outline-none'
              name=''
              id=''
            >
              <option className='flex gap-5 text-[#909090]' value='PMIND'>
                <span>Enter public address (0x) or ENS name</span>{" "}
              </option>
              <option
                className=' text-[#909090] text-primary opacity-50'
                value='USD'
              >
                <span className=''> BTD</span>
                <span className=''> USD</span>
              </option>
            </select>
          </div>
        </div>

        {/* Assets */}
        <Assets />
      </div>
    </div>
  );
};

export default SendTab;
