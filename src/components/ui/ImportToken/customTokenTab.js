import DownArrow from "@/components/icons/downArrow";
import Search from "@/components/icons/search";
import React from "react";

const CustomTokenTab = () => {
  return (
    <div className=''>
      <div className='mt-[30px] '>
        <h2 className='font-semibold text-[#343434] text-lg'>Custom Token </h2>
      </div>
      <div className='mt-5 lg:mt-[40px]'>
        <p className='text-sm font-normal text-[#2E2E2E]'>
          Token contract address
        </p>
        <div className='max-w-full lg:w-[802px] bg-[#fff]  mt-3 h-[40px] lg:h-14 px-3  rounded-2xl flex justify-between place-items-center gap-4 border-[1px] border-[#FF971D]'>
          <div className='flex place-items-center gap-x-1'>
            <Search className='text-xs' />
            <input
              className='text-[#434343] w-full border h-full outline-none bg-[#fff] text-lg '
              // placeholder='Token contract address'
            />
          </div>
          <div className='flex h-full'>
            <hr className='border border-[#3D3D3D] h-full ' />
            <div>
              <select className='flex text-sm   h-full place-items-center gap-2'>
                <option className=' text-[#343434] flex'>
                  Select Network 1
                </option>

                <option className=' text-[#343434] flex'>
                  Select Network 2
                </option>
                <div>
                  <DownArrow />
                </div>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-5 flex flex-col lg:flex-row gap-5'>
        <div>
          <p className='text-sm pb-2.5 text-[#2E2E2E]'>Token symble</p>
          <input
            type='text'
            className='h-[40px] lg:h-[55px] w-full lg:w-[390px] border-[1px] border-[#FF971D] rounded-xl lg:rounded-2xl px-2  outline-none'
          />
        </div>
        <div>
          <p className='text-sm pb-2.5 text-[#2E2E2E]'>Token symble</p>
          <input
            type='text'
            className='h-[40px] lg:h-[55px] w-full lg:w-[390px] border-[1px] border-[#FF971D] rounded-xl lg:rounded-2xl  px-2  outline-none'
          />
        </div>
      </div>
      <div className='mt-6 lg:mt-11'>
        <button className='max-w-[527px] bg-[#FF971D] w-full lg:w-[527px] h-8 lg:h-[55px] rounded-2xl font-bold text-md lg:text-lg text-white'>
          Add Custo Token
        </button>
      </div>
    </div>
  );
};

export default CustomTokenTab;
