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
          <div onClick={() => setShow(!show)} className='lg:hidden ms-2'>
            {show ? (
              <div>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  x='0px'
                  y='0px'
                  width='30'
                  height='30'
                  viewBox='0 0 50 50'
                >
                  <path d='M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z'></path>
                </svg>
              </div>
            ) : (
              <div>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  x='0px'
                  y='0px'
                  width='30'
                  height='30'
                  viewBox='0 0 50 50'
                >
                  <path d='M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z'></path>
                </svg>
              </div>
            )}
            {/* <span className='border border-black py-2 px-2'>icon</span> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
