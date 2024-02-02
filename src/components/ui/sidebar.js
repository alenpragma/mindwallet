"use client";
import React from "react";
import coin from "@/assets/coin.png";
import Image from "next/image";
import SidebarItems from "./sidebar/sidebarItems";
import Link from "next/link";
import Dashboard from "../icons/dashboard";

const Sidebar = ({ show }) => {
  return (
    <div className='relative'>
      <div
        className={`${
          show ? "hidden  lg:block" : ""
        } bg-[#232323]  z-50 absolute lg:relative h-full   lg:pr-6 min-h-screen text-white`}
      >
        <div className='flex gap-4 mb-[26px]'>
          <Image src={coin} alt='coin' />
          <h2 className='font-bold'>MINDCHAIN</h2>
        </div>

        {/* menu items */}
        {/* <SidebarItems /> */}
        <div className='flex flex-col gap-4 border border-red-600'>
          <Link href={"/dashbord"}>
            <div className='bg-[#383838] cursor-pointer rounded-[5px] p-2 w-[188px] h-[40px] flex place-items-center gap-2.5'>
              <div>
                <Dashboard />
              </div>
              <span className='font-semibold '>Dashbord</span>
            </div>
          </Link>
          <Link href={"/dashbord"}>
            <div className='bg-[#383838] cursor-pointer rounded-[5px] p-2 w-[188px] h-[40px] flex place-items-center gap-2.5'>
              <div>
                <Dashboard />
              </div>
              <span className='font-semibold '>Dashbord</span>
            </div>
          </Link>
          <Link href={"/dashbord"}>
            <div className='bg-[#383838] cursor-pointer rounded-[5px] p-2 w-[188px] h-[40px] flex place-items-center gap-2.5'>
              <div>
                <Dashboard />
              </div>
              <span className='font-semibold '>Dashbord</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
