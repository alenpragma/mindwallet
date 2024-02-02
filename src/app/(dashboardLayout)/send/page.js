"use client";

import Assets from "@/components/ui/send/assets";
import Receive from "@/components/ui/send/receive";
import SendTab from "@/components/ui/send/send";
import { useState } from "react";

const Send = () => {
  const [show, setShow] = useState("1");
  return (
    <div className='mt-[51px] px-2 rounded-md flex justify-center mx-auto'>
      <div className=' w-full lg:w-[654px] pt-4 pb-[70px]  bg-[#EDEDED]'>
        <div>
          <div className='bg-white mt-4  font-semibold mx-3 flex p-1 rounded-full w-fit gap-4'>
            <p
              onClick={() => setShow(1)}
              className={`${
                show == 1 && "bg-[#FF971D] text-[#fff] "
              } px-3 py-1 rounded-full text-[#FF971D] cursor-pointer `}
            >
              Send
            </p>
            <p
              onClick={() => setShow(2)}
              className={`${
                show == 2 && "bg-[#FF971D] text-[#fff]"
              } px-3 py-1 rounded-full text-[#FF971D] cursor-pointer `}
            >
              Receive
            </p>
          </div>
        </div>
        {show == 1 && <SendTab />}
        {show == 2 && <Receive />}
      </div>
    </div>
  );
};

export default Send;
