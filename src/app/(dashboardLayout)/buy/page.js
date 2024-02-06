"use client";
import Image from "next/image";
import React, { useState } from "react";
import sardin from "@/assets/sardine.png";
import crypto from "@/assets/crypto.png";
import DownArrow from "@/components/icons/downArrow";
import BuyAndSellTab from "@/components/ui/buy/buyAndSellTab";
import Title from "@/components/ui/title";
import coin from "@/assets/coin.png";

const Buy = () => {
  const [show, setShow] = useState("1");

  return (
    <div className='px-2 mx-w-full  flex justify-center w-full  flex-col lg:flex-row gap-5 py-10 '>
      {/* left side card */}
      <BuyAndSellTab />
      {/* left side card */}

      {/* ******************* */}
      {/* How do you want to buy your crypto? */}
      {/* *******************  */}
      <div className='flex justify-center'>
        <div className='w-full md:max-w-[640px]   lg:w-[310px]  xl:w-[474px] pt-[35px]  rounded-lg lg:rounded-3xl bg-[#F4F4F4]   pb-20 lg:pt-7 px-3 lg:px-5 xl:px-12'>
          <div className='text-center'>
            <h2 className='font-bold text-lg mb-5'>
              How do you want to buy your crypto?
            </h2>
            <p className='text-sm px-2 lg:px-2 xl:px-12 text-[#000000] font-normal leading-5'>
              Compare rates from these providers. Quotes are sorted by overall
              price.
            </p>
          </div>

          <div className='mt-7 flex items-center mx-auto flex-col gap-y-5 lg:mt-16'>
            <div className='flex justify-between place-items-center px-2 w-full lg:px-6   h-[70px] rounded-3xl border-[1px] border-[#BDBDBD]'>
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
            <div className='flex justify-between place-items-center  px-2 lg:px-6 w-full  h-[70px] rounded-3xl border-[1px] border-[#BDBDBD]'>
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
            <div className='flex justify-between place-items-center  px-2 lg:px-6 w-full  h-[70px] rounded-3xl border-[1px] border-[#BDBDBD]'>
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
            <div className='flex justify-between place-items-center  px-2 lg:px-6 w-full  h-[70px] rounded-3xl border-[1px] border-[#BDBDBD]'>
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
    </div>
  );
};

export default Buy;
