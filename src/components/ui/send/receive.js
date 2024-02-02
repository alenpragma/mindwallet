import React from "react";
import qr from "@/assets/qrcode.png";
import Image from "next/image";

const Receive = () => {
  return (
    <div>
      <div className='mt-[20px] lg:mt-[35px]'>
        <h2 className='font-semibold text-md lg:text-lg '>Receive To</h2>
        <div>
          <select
            className='custom-select  text-[#909090]  text-sm lg:text-lg font-semibold  flex place-items-center border-[1px] border-[#FF971D] rounded-3xl  px-4 w-full lg:w-[h-10 lg:553px] h-10 lg:h-14 focus:outline-none'
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
      <div className='pt-7 flex justify-center mx-auto'>
        <Image className='w-[358px] h-[358px]' src={qr} alt='' />
      </div>
    </div>
  );
};

export default Receive;
