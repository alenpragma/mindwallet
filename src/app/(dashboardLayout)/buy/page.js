"use client";
import Image from "next/image";
import React, { useState } from "react";
import sardin from "@/assets/sardine.png";
import coin from "@/assets/coin.png";
import crypto from "@/assets/crypto.png";
import DownArrow from "@/components/icons/downArrow";
import Title from "@/components/ui/title";
import BuyTabContent from "@/components/ui/buy/buyTabContent";

const Buy = () => {
  const [show, setShow] = useState("1");

  return (
    <div className='px-2 flex items-center flex-col lg:flex-row gap-5 py-10 '>
      <div className='bg-[#F4F4F4] max-w-[100%] w-[640px] lg:w-[640px] pb-14  mx-auto   rounded-lg lg:rounded-3xl'>
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
        {show == 1 && <BuyTabContent />}
        {show == 2 && <div className='mx-2 lg:mx-7'>tab 2</div>}
      </div>

      {/* ******************* */}
      {/* How do you want to buy your crypto? */}
      {/* *******************  */}
      <div className='w-full lg:w-[474px] lg:h-[624px] rounded-lg lg:rounded-3xl bg-[#F4F4F4]  pt-4 pb-20 lg:pt-7 px-3 lg:px-12'>
        <div className='text-center'>
          <h2 className='font-bold text-lg mb-5'>
            How do you want to buy your crypto?
          </h2>
          <p className='text-sm px-12 text-[#000000] font-normal leading-5'>
            Compare rates from these providers. Quotes are sorted by overall
            price.
          </p>
        </div>

        <div className='mt-7 flex items-center mx-auto flex-col gap-y-5 lg:mt-16'>
          <div className='flex justify-between place-items-center px-2 lg:px-6 w-full lg:w-[371px] h-[70px] rounded-3xl border-[1px] border-[#BDBDBD]'>
            <div>
              <Image src={sardin} alt='' />
            </div>
            <div className='flex place-items-center gap-4'>
              <div>
                <h2 className='font-bold text-lg'>0.045186 ETH</h2>
                <span className='text-sm text-[#909090]'>≈ €97.69 EUR</span>
              </div>
              <DownArrow />
            </div>
          </div>
          <div className='flex justify-between place-items-center  px-2 lg:px-6 w-full lg:w-[371px] h-[70px] rounded-3xl border-[1px] border-[#BDBDBD]'>
            <div>
              <Image src={crypto} alt='' />
            </div>
            <div className='flex place-items-center gap-4'>
              <div>
                <h2 className='font-bold text-lg'>0.045186 ETH</h2>
                <span className='text-sm text-[#909090]'>≈ €97.69 EUR</span>
              </div>
              <DownArrow />
            </div>
          </div>
          <div className='flex justify-between place-items-center  px-2 lg:px-6 w-full lg:w-[371px] h-[70px] rounded-3xl border-[1px] border-[#BDBDBD]'>
            <div>
              <Image src={sardin} alt='' />
            </div>
            <div className='flex place-items-center gap-4'>
              <div>
                <h2 className='font-bold text-lg'>0.045186 ETH</h2>
                <span className='text-sm text-[#909090]'>≈ €97.69 EUR</span>
              </div>
              <DownArrow />
            </div>
          </div>
          <div className='flex justify-between place-items-center  px-2 lg:px-6 w-full lg:w-[371px] h-[70px] rounded-3xl border-[1px] border-[#BDBDBD]'>
            <div>
              <Image src={sardin} alt='' />
            </div>
            <div className='flex place-items-center gap-4'>
              <div>
                <h2 className='font-bold text-lg'>0.045186 ETH</h2>
                <span className='text-sm text-[#909090]'>≈ €97.69 EUR</span>
              </div>
              <DownArrow />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buy;
