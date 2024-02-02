"use client";

import { useState } from "react";

const Send = () => {
  const [show, setShow] = useState("1");
  return (
    <div className='mt-[51px] flex justify-center mx-auto'>
      <div className=' w-full lg:w-[654px] pt-4 pb-[70px]  bg-[#EDEDED]'>
        <div>
          <div className='bg-white mt-4   mx-3 flex p-1 rounded-full w-fit gap-4'>
            <p
              onClick={() => setShow(1)}
              className={`${
                show == 1 && "bg-[#FF971D] text-[#fff] "
              } px-3 py-1 rounded-full text-[#FF971D] cursor-pointer font-semibold`}
            >
              Tokens
            </p>
            <p
              onClick={() => setShow(2)}
              className={`${
                show == 2 && "bg-[#FF971D] text-[#fff]"
              } px-3 py-1 rounded-full text-[#FF971D] cursor-pointer font-semibold`}
            >
              NFTs
            </p>
          </div>
        </div>
        <div className='px-[46px] mt-[76px]'>
          {/* Send from */}
          <div>
            <h2 className='font-semibold text-lg text-[#343434]'>Send form</h2>
            <div>
              <select
                className='custom-select text-odd:text-green-200 text-even:text-blue-200 text-lg font-semibold  flex place-items-center border-[1px] border-[#FF971D] rounded-3xl  px-4 w-full lg:w-[553px] h-14 focus:outline-none'
                name=''
                id=''
              >
                <option
                  className='flex gap-5 text-odd:text-green-200 text-even:text-blue-200'
                  value='PMIND'
                >
                  <span className='text-lg font-semibold'>
                    {" "}
                    User Wallet Address
                  </span>
                  <span className='text-lg font-semibold'>(8779877y765)</span>
                </option>
                <option
                  className=' text-odd:text-green-200 text-even:text-blue-200 text-primary opacity-50'
                  value='USD'
                >
                  <span className=''> BTD</span>
                  <span className=''> USD</span>
                </option>
              </select>
            </div>
          </div>
          {/* Send To */}
          <div className='mt-[35px]'>
            <h2 className='font-semibold text-lg text-[#343434]'>Send to</h2>
            <div>
              <select
                className='custom-select   text-lg font-semibold  flex place-items-center border-[1px] border-[#FF971D] rounded-3xl  px-4 w-full lg:w-[553px] h-14 focus:outline-none'
                name=''
                id=''
              >
                <option className='flex gap-5 text-[#909090]' value='PMIND'>
                  <p>Enter public address (0x) or ENS name</p>{" "}
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
          <div className='mt-[35px]'>
            <h2 className='font-semibold text-lg text-[#343434]'>Send to</h2>
            <div>
              <select
                className='custom-select text-[#909090] text-lg font-semibold  flex place-items-center border-[1px] border-[#FF971D] rounded-3xl  px-4  w-full lg:w-[553px] h-14 focus:outline-none'
                name=''
                id=''
              >
                <option className='flex gap-5 text-[#909090]' value='PMIND'>
                  <span className='text-lg font-semibold'>
                    {" "}
                    User Wallet Address
                  </span>
                  <span className='text-lg font-semibold'>(8779877y765)</span>
                </option>
                <option
                  className=' text-odd:text-green-200 text-even:text-blue-200 text-primary opacity-50'
                  value='USD'
                >
                  <span className=''> BTD</span>
                  <span className=''> USD</span>
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Send;
