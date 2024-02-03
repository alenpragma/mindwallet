"use client";
import DownArrow from "@/components/icons/downArrow";
import Search from "@/components/icons/search";
import React, { useState } from "react";

const SearchTabContent = () => {
  return (
    <>
      <div className='lg:w-[802px] bg-[#fff] mt-[35px] h-[40px] lg:h-14 px-3  rounded-2xl flex place-items-center justify-between gap-4 border-[1px] border-[#FF971D]'>
        <div className='flex place-items-center gap-1'>
          <Search />
          <input
            className='text-[#434343] placeholder:w-[40%] bg-[#fff] text-lg '
            placeholder=' Search for a token by name, symbol, or address'
          />
        </div>

        <div className='flex h-full place-items-center gap-2'>
          <hr className='border border-[#3D3D3D] h-full ' />
          <p className=' text-[#343434]'>All Network</p>
          <div>
            <DownArrow />
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchTabContent;
