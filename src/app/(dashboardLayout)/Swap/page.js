import Image from "next/image";
import React from "react";
import coin1 from "@/assets/coin1.png";
import mind from "@/assets/coin1.png";
import pmind from "@/assets/pmlogo.png";
import arrow from "@/assets/arrowDuble.png";

const Swap = () => {
  return (
    <div className='flex justify-center'>
      <div className='w-[654px]  rounded-[15px] mt-[56px] px-11 pt-11 h-[707px] bg-[#EDEDED]'>
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
          <div className=' relative text-sm w-[390px] h-10 '>
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

        <div className='mt-[18px]'>
          <span className='font-medium text-lg'>
            MIND verified on 17 sources.
          </span>
          <span className='font-light ps-2 text-[#2E2E2E] text-xs'>
            Always confirm the token address on a{" "}
          </span>
          <p className='font-bold mt-3 text-[#FF971D] text-[]'>
            block explorer.
          </p>
        </div>
        <div className='mt-8'>
          <div className='flex gap-3 justify-center'>
            <p className='font-bold text-lg'>Advance Option</p>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='25'
              height='25'
              viewBox='0 0 25 25'
              fill='none'
            >
              <path
                d='M19.4896 8.55214C19.3928 8.45451 19.2775 8.37701 19.1506 8.32413C19.0237 8.27125 18.8875 8.24402 18.75 8.24402C18.6125 8.24402 18.4763 8.27125 18.3494 8.32413C18.2225 8.37701 18.1073 8.45451 18.0104 8.55214L13.2396 13.323C13.1428 13.4206 13.0275 13.4981 12.9006 13.551C12.7737 13.6039 12.6375 13.6311 12.5 13.6311C12.3625 13.6311 12.2263 13.6039 12.0994 13.551C11.9725 13.4981 11.8573 13.4206 11.7604 13.323L6.9896 8.55214C6.89276 8.45451 6.77755 8.37701 6.65061 8.32413C6.52368 8.27125 6.38752 8.24402 6.25001 8.24402C6.1125 8.24402 5.97635 8.27125 5.84941 8.32413C5.72247 8.37701 5.60726 8.45451 5.51043 8.55214C5.31642 8.74731 5.20752 9.01132 5.20752 9.28652C5.20752 9.56171 5.31642 9.82572 5.51043 10.0209L10.2917 14.8021C10.8776 15.3874 11.6719 15.7161 12.5 15.7161C13.3281 15.7161 14.1224 15.3874 14.7083 14.8021L19.4896 10.0209C19.6836 9.82572 19.7925 9.56171 19.7925 9.28652C19.7925 9.01132 19.6836 8.74731 19.4896 8.55214Z'
                fill='#000'
              />
            </svg>
          </div>
          <p className=' flex justify-center mt-5 rounded-2xl place-items-center text-white text-lg font-bold  text-center  h-14 bg-[#FF971D]'>
            Get Quotes
          </p>
        </div>
      </div>
    </div>
  );
};

export default Swap;
