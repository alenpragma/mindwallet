import DownArrow from "@/components/icons/downArrow";
import Image from "next/image";
import React from "react";
import Title from "../title";
import coin from "@/assets/coin.png";

const SellTabContent = () => {
  return (
    <div>
      <div className=' '>
        {/* User Wallet Address */}

        <div className='flex justify-center text-2xl lg:text-3xl py-10 lg:py-20'>
          <Title>
            <h2>100$</h2>
          </Title>
        </div>

        <div className='  flex flex-col gap-5 lg:gap-8'>
          <div className='flex justify-between  px-2 lg:px-10 rounded-[45px] border-[1px] bg-[#fff] border-[#BDBDBD]'>
            <div className='flex py-1 lg:py-4 place-items-center gap-2 lg:gap-7'>
              <div>
                <Image src={coin} alt='' />
              </div>
              <div>
                <h2 className='font-semibold  lg:text-lg text-[#181818]'>
                  MaindChain
                </h2>
                <span className='text-[#909090] font-medium text-xs '>
                  MIND Mainnet
                </span>
              </div>
            </div>
            <div className='flex gap-3 place-items-center'>
              <span className='text-[#909090] font-medium text-xs '>
                5-10 Mins
              </span>
              <DownArrow />
            </div>
          </div>

          <div className='flex justify-between  px-2 lg:px-10 rounded-[45px] border-[1px] bg-[#fff] border-[#BDBDBD]'>
            <div className='flex py-2 lg:py-4 place-items-center gap-1 lg:gap-7'>
              <div>
                <Image src={coin} alt='' />
              </div>
              <div>
                <span className='text-[#909090] font-medium text-xs '>
                  Debit Or Credit{" "}
                </span>
              </div>
            </div>
            <div className='flex gap-3 place-items-center'>
              <span className='text-[#909090] font-medium text-xs '>
                12Mind
              </span>
              <DownArrow />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellTabContent;
