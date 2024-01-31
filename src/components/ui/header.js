import React from "react";
import Search from "../icons/search";
import NotifactionIcon from "../icons/notifactionIcon";
import user from "@/assets/user1.png";
import Image from "next/image";
const Header = () => {
  return (
    <div className=' lg:w-[1102px]  h-[45px]   mt-[44px]'>
      <div className='flex justify-between place-items-center'>
        <div>
          <h2 className='text-2xl font-bold leading-8 text-[#4B4B4B]'>
            Dashbord
          </h2>
        </div>

        <div className='flex gap-5'>
          <div className=' w-[259px] h-[45px]'>
            <input
              className=' text-sm w-full h-full focus:outline-none px-5 text-[#464646] rounded-[10px] border-[1px] border-[#BABABA]'
              type='text'
              placeholder='Search for a token...'
            />
            <Search className=' ' />
          </div>

          <div className='w-11 h-11  border-[1px] border-[#BABABA] rounded-full flex justify-center place-items-center'>
            <NotifactionIcon />
          </div>
          <div>
            <Image src={user} alt='user' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
