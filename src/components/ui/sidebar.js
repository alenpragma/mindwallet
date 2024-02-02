import React from "react";
import coin from "@/assets/coin.png";
import Image from "next/image";
import Buy from "../icons/buy";
import Explore from "../icons/Explore";
import Import from "../icons/Import";
import Send from "../icons/send";
import Stack from "../icons/stack";
import Bridge from "../icons/bridge";
import Dashboard from "../icons/dashboard";
import Link from "next/link";

const Sidebar = ({ show }) => {
  return (
    <div className='relative'>
      <div
        className={`${
          show ? "hidden   lg:block" : ""
        } bg-[#232323]  absolute lg:relative h-full p-3  lg:p-[30px] pr-3 lg:pr-6 min-h-screen text-white`}
      >
        <div className='flex gap-4 mb-[26px]'>
          <Image src={coin} alt='coin' />
          <h2 className='font-bold'>MINDCHAIN</h2>
        </div>

        {/* menu items */}
        <div className='flex flex-col gap-[15px]'>
          {/* Deshbord */}
          <Link href={"/dashbord"}>
            <div className='bg-[#383838] cursor-pointer rounded-[5px] p-2 w-[188px] h-[40px] flex place-items-center gap-2.5'>
              <div>
                <Dashboard />
              </div>
              <span className='font-semibold '>Dashbord</span>
            </div>
          </Link>
          {/* Explore */}
          <Link href={"/explore"}>
            <div className='hover:bg-[#383838] cursor-pointer rounded-[5px] p-2 w-[188px] h-[40px] flex place-items-center gap-2.5'>
              <div>
                <Explore />
              </div>
              <span className='font-semibold '>Explore</span>
            </div>
          </Link>

          {/* Buy */}
          <Link href={"/buy"}>
            <div className='hover:bg-[#383838] cursor-pointer rounded-[5px] p-2 w-[188px] h-[40px] flex place-items-center gap-2.5'>
              <div>
                <Buy />
              </div>
              <span className='font-semibold '>Buy</span>
            </div>
          </Link>

          {/* Sell */}
          <Link href={"/sell"}>
            <div className='hover:bg-[#383838] cursor-pointer rounded-[5px] p-2 w-[188px] h-[40px] flex place-items-center gap-2.5'>
              <div>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='25'
                  height='25'
                  viewBox='0 0 25 25'
                  fill='none'
                >
                  <g clip-path='url(#clip0_1_30)'>
                    <path
                      d='M12.5 0C5.60729 0 0 5.60729 0 12.5C0 19.3927 5.60729 25 12.5 25C19.3927 25 25 19.3927 25 12.5C25 5.60729 19.3927 0 12.5 0ZM12.5 22.9167C6.75625 22.9167 2.08333 18.2437 2.08333 12.5C2.08333 6.75625 6.75625 2.08333 12.5 2.08333C18.2437 2.08333 22.9167 6.75625 22.9167 12.5C22.9167 18.2437 18.2437 22.9167 12.5 22.9167ZM17.7083 12.5C17.7083 13.075 17.2417 13.5417 16.6667 13.5417H8.33333C7.75833 13.5417 7.29167 13.075 7.29167 12.5C7.29167 11.925 7.75833 11.4583 8.33333 11.4583H16.6667C17.2417 11.4583 17.7083 11.925 17.7083 12.5Z'
                      fill='#B4B4B4'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_1_30'>
                      <rect width='25' height='25' fill='white' />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <span className='font-semibold '>Sell</span>
            </div>
          </Link>
          {/* Swap */}
          <Link href={"/swap"}>
            <div className='hover:bg-[#383838] cursor-pointer rounded-[5px] p-2 w-[188px] h-[40px] flex place-items-center gap-2.5'>
              <div>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='25'
                  height='25'
                  viewBox='0 0 25 25'
                  fill='none'
                >
                  <g clip-path='url(#clip0_1_34)'>
                    <path
                      d='M12.5 2.08342C13.8818 2.08796 15.249 2.36649 16.5224 2.90289C17.7958 3.43929 18.9502 4.22292 19.9188 5.20842H15.625V7.29176H20.9823C21.4952 7.29121 21.9869 7.08723 22.3495 6.72458C22.7122 6.36194 22.9161 5.87024 22.9167 5.35738V9.12275e-05H20.8333V3.20634C19.039 1.59057 16.8146 0.529941 14.4296 0.153017C12.0446 -0.223907 9.6015 0.0990568 7.39638 1.08276C5.19126 2.06647 3.31881 3.66868 2.006 5.69519C0.693186 7.7217 -0.00362934 10.0855 1.42159e-05 12.5001H2.08335C2.08638 9.73835 3.18482 7.09059 5.13767 5.13775C7.09052 3.1849 9.73827 2.08646 12.5 2.08342Z'
                      fill='#B4B4B4'
                    />
                    <path
                      d='M22.9167 12.5C22.9197 14.5681 22.3062 16.5901 21.1545 18.3078C20.0028 20.0255 18.3653 21.361 16.451 22.1436C14.5368 22.9262 12.4327 23.1204 10.4075 22.7015C8.38229 22.2826 6.52794 21.2695 5.08126 19.7917H9.37501V17.7083H4.01772C3.50486 17.7089 3.01316 17.9129 2.65052 18.2755C2.28787 18.6382 2.08389 19.1298 2.08334 19.6427V25H4.16668V21.7938C5.96098 23.4095 8.18543 24.4702 10.5704 24.8471C12.9554 25.224 15.3985 24.901 17.6036 23.9173C19.8088 22.9336 21.6812 21.3314 22.994 19.3049C24.3068 17.2784 25.0037 14.9146 25 12.5H22.9167Z'
                      fill='#B4B4B4'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_1_34'>
                      <rect width='25' height='25' fill='white' />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <span className='font-semibold '>Swap</span>
            </div>
          </Link>
          {/* Bridge */}
          <Link href={"/bridge"}>
            <div className='hover:bg-[#383838] cursor-pointer rounded-[5px] p-2 w-[188px] h-[40px] flex place-items-center gap-2.5'>
              <div>
                <Bridge />
              </div>
              <span className='font-semibold '>Bridge</span>
            </div>
          </Link>
          {/* Stake */}
          <Link href={"/stake"}>
            <div className='hover:bg-[#383838] cursor-pointer rounded-[5px] p-2 w-[188px] h-[40px] flex place-items-center gap-2.5'>
              <div>
                <Stack />
              </div>
              <span className='font-semibold '>Stake</span>
            </div>
          </Link>

          {/* Send & Receive */}
          <Link href={"/send"}>
            <div className='hover:bg-[#383838] cursor-pointer rounded-[5px] p-2 w-[188px] h-[40px] flex place-items-center gap-2.5'>
              <div>
                <Send />
              </div>
              <span className='font-semibold '>Send & Receive</span>
            </div>
          </Link>
          {/* Import Token */}
          <Link href={"/importToken"}>
            <div className='hover:bg-[#383838] cursor-pointer rounded-[5px] p-2 w-[188px] h-[40px] flex place-items-center gap-2.5'>
              <div>
                <Import />
              </div>
              <span className='font-semibold '>Import Token</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
