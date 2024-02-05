"use client";
import DownArrow from "@/components/icons/downArrow";
import Search from "@/components/icons/search";
import CustomTokenTab from "@/components/ui/ImportToken/customTokenTab";
import SearchTabContent from "@/components/ui/ImportToken/searchTabContent";
import React, { useState } from "react";

const ImportToken = () => {
  const [show, setShow] = useState("1");

  return (
    <div className='px-2   '>
      <div className='bg-[#F4F4F4] w-full md:w-[500px] xl:w-[868px] xl:max-w-[868px] mt-6 pb-5 lg:pb-7  mx-auto rounded-lg  lg:rounded-3xl'>
        <div className='font-semibold px-2.5 text-[#343434]'>
          <h2 className='text-[24px] text-center pt-7 lg:pt-[60px]'>
            {" "}
            Import Token
          </h2>
        </div>
        <div className=' bg-white mt-4 mx-2.5  font-semibold   flex p-1 rounded-full w-fit gap-4'>
          <p
            onClick={() => setShow(1)}
            className={`${
              show == 1 && "bg-[#FF971D] text-[#fff] "
            } px-3 py-1 rounded-full text-[#FF971D] cursor-pointer `}
          >
            Search
          </p>
          <p
            onClick={() => setShow(2)}
            className={`${
              show == 2 && "bg-[#FF971D] text-[#fff]"
            } px-3 py-1 rounded-full text-[#FF971D] cursor-pointer `}
          >
            Custom Token
          </p>
        </div>
        {show == 1 && (
          <div className='mx-2 py-10 lg:mx-7'>
            <SearchTabContent />
          </div>
        )}
        {show == 2 && (
          <div className='mx-2 lg:mx-7 '>
            <CustomTokenTab />
          </div>
        )}
      </div>
    </div>
  );
};

export default ImportToken;
