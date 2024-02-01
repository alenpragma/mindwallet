import Image from "next/image";
import React from "react";
import coin1 from "@/assets/coin1.png";
import mind from "@/assets/coin1.png";
import pmind from "@/assets/pmlogo.png";
import arrow from "@/assets/arrowDuble.png";

const Swap = () => {
  return (
    <div className='w-[654px] px-11 pt-11 pb-10 h-[707px] bg-[#EDEDED]'>
      <div className='flex items-center gap-[18px] flex-col   mx-auto'>
        {/* User Wallet Address */}
        <div className=' relative   text-sm w-[390px] h-10 '>
          <Image
            className='absolute w-[27px]    top-1/2 left-5 transform -translate-x-1/2 -translate-y-1/2 h-[27px] flex place-items-center items-center'
            src={coin1}
            alt=''
          />
          <select
            className='custom-select ps-10 flex place-items-center border-[1px] rounded-3xl  px-4 text-sm w-full h-10    focus:outline-none'
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

        {/* Mind Chain Network */}
        <div className=' relative   text-sm w-[390px] h-10 '>
          <Image
            className='absolute w-[27px]    top-1/2 left-5 transform -translate-x-1/2 -translate-y-1/2 h-[27px] flex place-items-center items-center'
            src={coin1}
            alt=''
          />
          <select
            className='custom-select ps-10 flex place-items-center border-[1px] rounded-3xl  px-4 text-sm w-full h-10    focus:outline-none'
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
      </div>

      {/* *************** */}
      {/* Swap Form */}
      {/* *************** */}
      <div className='mt-9'>
        <h2 className='font-semibold pb-5'>Swap Form</h2>
        <div className=' flex place-items-center text-start border-[1px] bg-white border-[#FF971D] w-[563px] h-[55px]  rounded-2xl '>
          <div className='relative   bg-[#EDEDED] flex place-items-center gap-1   '>
            <div className=' absolute px-3'>
              <Image className='' src={mind} alt='aa' />
            </div>
            <select
              className='custom-select  focus:outline-none h-[55px] ps-12 font-semibold  w-[150px] border-[1px] border-[#FF971D] rounded-s-2xl'
              name=''
              id=''
            >
              <option className=' text-primary opacity-50' value='MIND'>
                MIND
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
          <div className=' flex justify-start ps-6 text-[#909090] bg-white'>
            <p className=' font-semibold text-lg  '> 00</p>
          </div>
        </div>
      </div>

      <div className='mt-9 flex justify-end'>
        <Image src={arrow} alt='' />
      </div>
      {/* ****************/}
      {/* Swap to */}
      {/* ****************/}

      <div>
        <h2 className='font-semibold pb-5'>Swap to</h2>
        <div className=' flex place-items-center text-start border-[1px] bg-white border-[#FF971D] w-[563px] h-[55px]  rounded-2xl '>
          <div className='relative   bg-[#EDEDED] flex place-items-center gap-1   '>
            <div className=' absolute p-3'>
              <Image className='' src={pmind} alt='aa' />
            </div>
            <select
              className='custom-select h-[55px] focus:outline-0 ps-12 font-semibold  w-[150px] border-[1px] border-[#FF971D] rounded-s-2xl'
              name=''
              id=''
            >
              <option className=' text-primary opacity-50' value='MIND'>
                MIND{" "}
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
          <div className=' flex justify-start ps-6 text-[#909090] bg-white'>
            <p className=' font-semibold text-lg  '> 00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Swap;
