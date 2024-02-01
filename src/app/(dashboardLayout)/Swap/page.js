import Image from "next/image";
import React from "react";
import coin1 from "@/assets/coin1.png";
import pmlogo from "@/assets/pmlogo.png";

const Swap = () => {
  return (
    <div>
      <div
        className='w-[654px] h-[707px] bg-[#EDEDED
]'
      >
        <div className=' relative  text-sm w-390px] h-10 '>
          <Image
            className='absolute w-[27px]    top-1/2 left-5 transform -translate-x-1/2 -translate-y-1/2 h-[27px] flex place-items-center items-center'
            src={coin1}
            alt=''
          />
          <select
            className='custom-select ps-10 flex place-items-center border-[1px] rounded-3xl  px-4 text-sm w-full h-10  bg-[#EDEDED] focus:outline-none'
            name=''
            id=''
          >
            <option className=' text-primary p  opacity-50' value='PMIND'>
              User Wallet Address
            </option>
            <option className=' text-primary opacity-50' value='USD'>
              USD
            </option>
            <option className=' text-primary opacity-50' value='EUR'>
              USD
            </option>
          </select>
        </div>
        <div className='pt-[18px] relative  text-sm w-390px] h-10 '>
          <Image
            className='absolute w-[27px]    top-1/2 left-5 transform -translate-x-1/2 -translate-y-1/2 h-[27px] flex place-items-center items-center'
            src={coin1}
            alt=''
          />
          <select
            className='custom-select ps-10 flex place-items-center border-[1px] rounded-3xl  px-4 text-sm w-full h-10  bg-[#EDEDED] focus:outline-none'
            name=''
            id=''
          >
            <option className=' text-primary p  opacity-50' value='PMIND'>
              User Wallet Address
            </option>
            <option className=' text-primary opacity-50' value='USD'>
              USD
            </option>
            <option className=' text-primary opacity-50' value='EUR'>
              USD
            </option>
          </select>
        </div>
        <div className='mt-9'>
          <h2 className='font-semibold'>Swap Form</h2>
          <div className='mt-6'>
            <div className='lg:mx-8 flex place-items-center gap-1 mt-12 '>
              <image className='' src={pmlogo} alt='' />
              <select
                className=' h-[55px] border-none outline-none  bg-[#EDEDED] text-primary'
                name=''
                id=''
              >
                <option className=' text-primary opacity-50' value='PMIND'>
                  PMIND
                </option>
                <option className=' text-primary opacity-50' value='USD'>
                  USD
                </option>
                <option className=' text-primary opacity-50' value='EUR'>
                  EUR
                </option>
                <option className=' text-primary opacity-50' value='GBP'>
                  GBP
                </option>
                <option className=' text-primary opacity-50' value='JPY'>
                  JPY
                </option>
                <option className=' text-primary opacity-50' value='AUD'>
                  AUD
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Swap;
