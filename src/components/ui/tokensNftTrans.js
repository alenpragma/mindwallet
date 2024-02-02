"use client";
import React, { useState } from "react";

import Transactions from "./transactions";
import Tokens from "./tokens";
import UserWalletDetails from "./userWalletDetails";
const TokensNftTrans = () => {
  const [show, setShow] = useState("1");

  return (
    <div className='bg-[#F4F4F4]    rounded-3xl  mt-5 pt-6 lg:pt-10  px-2 lg:pl-7'>
      {/* tab */}
      <div className='bg-white flex p-1 rounded-full w-fit  lg:gap-4'>
        <p
          onClick={() => setShow(1)}
          className={`${
            show == 1 && "bg-[#FF971D] text-[#fff] "
          } px-3 py-1 rounded-full text-[#FF971D] cursor-pointer font-semibold`}
        >
          Tokens
        </p>
        <p
          onClick={() => setShow(2)}
          className={`${
            show == 2 && "bg-[#FF971D] text-[#fff]"
          } px-3 py-1 rounded-full text-[#FF971D] cursor-pointer font-semibold`}
        >
          NFTs
        </p>
        <p
          onClick={() => setShow(3)}
          className={`${
            show == 3 && "bg-[#FF971D] text-[#fff] "
          } px-3 py-1 rounded-full text-[#FF971D] cursor-pointer font-semibold`}
        >
          Transactions
        </p>
      </div>

      <div className='mt-4'>
        {show == 3 ? "" : <UserWalletDetails />}
        {/* table */}

        {show == 1 && <Tokens />}
        {show == 2 && <Tokens />}
        {show == 3 && (
          <div className='mt-5'>
            <Transactions />
          </div>
        )}
      </div>
    </div>
  );
};

export default TokensNftTrans;
