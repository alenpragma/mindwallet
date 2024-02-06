import React, { useState } from "react";
import Title from "@/components/ui/title";
import BuyTabContent from "@/components/ui/buy/buyTabContent";
import SellTabContent from "@/components/ui/buy/sellTabContent";
import coin from "@/assets/coin.png";

const BuyAndSellTab = () => {
  const [show, setShow] = useState("1");

  return (
    <div className='flex justify-center'>
      <div className='bg-[#F4F4F4] max-w-[100%] w-[430px] md:w-[640px] lg:w-[440px] xl:w-[640px] py-10    rounded-lg lg:rounded-3xl'>
        <div className='bg-white mt-4 mx-2.5  font-semibold   flex p-1 rounded-full w-fit gap-4'>
          <p
            onClick={() => setShow(1)}
            className={`${
              show == 1 && "bg-[#FF971D] text-[#fff] "
            } px-3 py-1 rounded-full text-[#FF971D] cursor-pointer `}
          >
            Buy
          </p>
          <p
            onClick={() => setShow(2)}
            className={`${
              show == 2 && "bg-[#FF971D] text-[#fff]"
            } px-3 py-1 rounded-full text-[#FF971D] cursor-pointer `}
          >
            Sell{" "}
          </p>
        </div>
        <div className='mx-2 lg:mx-7'>
          <div className='mt-5 flex  flex-wrap gap-3'>
            <select
              className='custom-select flex place-items-center border-[1px] rounded-3xl  px-4 text-sm w-[199px] h-10  bg-[#EDEDED] focus:outline-none'
              name=''
              id=''
            >
              <option className=' text-primary opacity-50' value='PMIND'>
                User Wallet Address{" "}
              </option>
              <option className=' text-primary opacity-50' value=' Address 1'>
                Address 1
              </option>
              <option className=' text-primary opacity-50' value=' Address 2'>
                Address 1
              </option>
            </select>
            <select
              className='custom-select  flex place-items-center border-[1px] rounded-3xl  px-4 text-sm w-[199px] h-10  bg-[#EDEDED] focus:outline-none'
              name=''
              id=''
            >
              <option
                className=' text-primary opacity-50'
                value='slect Country'
              >
                slect Country{" "}
              </option>
              <option className=' text-primary opacity-50' value=' Address 1'>
                Address 1
              </option>
              <option className=' text-primary opacity-50' value=' Address 2'>
                Address 1
              </option>
            </select>
            <select
              className='custom-select  flex place-items-center border-[1px] rounded-3xl  px-4 text-sm w-[199px] h-10  bg-[#EDEDED] focus:outline-none'
              name=''
              id=''
            >
              <option
                className=' text-primary opacity-50'
                value='select Currency'
              >
                select Currency{" "}
              </option>
              <option className=' text-primary opacity-50' value=' Address 1'>
                Address 1
              </option>
              <option className=' text-primary opacity-50' value=' Address 2'>
                Address 1
              </option>
            </select>
          </div>
        </div>
        {show == 1 && <BuyTabContent />}
        {show == 2 && (
          <div className='mx-2 lg:mx-7'>
            <SellTabContent />
          </div>
        )}
      </div>
    </div>
  );
};

export default BuyAndSellTab;
