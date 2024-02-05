import React, { useState } from "react";
import Search from "../icons/search";
import NotifactionIcon from "../icons/notifactionIcon";
import user from "@/assets/user1.png";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Header = ({ setShow, show }) => {
  const pathname = usePathname();
  const formattedPath = pathname.slice(1).replace(/-/g, " ");

  return (
    <div className='min-w-screen w-full lg:w-full px-2 lg:px-[30px] shadow-md h-16 lg:h-[94px]'>
      <div className='h-full flex justify-between place-items-center'>
        <div>
          <h2 className='text-base capitalize lg:text-2xl cursor-pointer font-bold leading-8 text-[#4B4B4B]'>
            {formattedPath}
          </h2>
        </div>

        <div className='flex place-items-center gap-2 lg:gap-5'>
          <div className='relative'>
            <div className='hidden lg:block w-[259px] h-[45px]'>
              <input
                className=' text-sm w-[259px] h-[45px] focus:outline-none px-5 text-[#464646] rounded-[10px] border-[1px] border-[#BABABA]'
                type='text'
                placeholder='Search for a token...'
              />
              <div className='cursor-pointer absolute px-2 right-2 top-0 h-full flex items-center'>
                <Search className='' />
              </div>
            </div>
          </div>

          <div className='w-11 h-11 cursor-pointer border-[1px] border-[#BABABA] rounded-full flex justify-center place-items-center'>
            <NotifactionIcon />
          </div>
          <div className='cursor-pointer'>
            <Image src={user} alt='user' />
          </div>
          <div onClick={() => setShow(!show)} className='lg:hidden'>
            <span className='border border-black py-2 px-2'>icon</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
