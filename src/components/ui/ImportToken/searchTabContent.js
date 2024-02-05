"use client";
import DownArrow from "@/components/icons/downArrow";
import Search from "@/components/icons/search";
import React, { useState } from "react";

const SearchTabContent = () => {
  return (
    <>
      <div className='max-w-full h-10 lg:w-[802px] bg-[#fff]  mt-3 lg:h-14 px-3 rounded-xl lg:rounded-2xl flex justify-between place-items-center gap-4 border-[1px] border-[#FF971D]'>
        <div className='flex  w-full  place-items-center gap-x-1'>
          <Search className='text-[10px]' />
          <input
            className='text-[#434343] min-h-full w-full   p-2 h-full border-none outline-none bg-[#fff] text-lg placeholder:text-sm   lg:pb-4'
            placeholder='Token contract address'
          />
        </div>
        <div className='flex h-full'>
          <hr className='border border-[#3D3D3D] h-full mr-1 ' />
          <div>
            <select className='custom-select2 bg-[#fff] cursor-pointer flex text-sm border-0 outline-none   h-full place-items-center gap-2'>
              <option className=' text-[#343434] flex'>Select Network 1</option>
              <option className=' text-[#343434] flex'>Select Network 2</option>
            </select>
            {/* <DownArrow /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchTabContent;
