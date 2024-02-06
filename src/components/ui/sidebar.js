"use client";
import React from "react";
import coin from "@/assets/coin.png";
import Image from "next/image";
import SidebarItems from "./sidebar/sidebarItems";
import Link from "next/link";
import Dashboard from "../icons/dashboard";

const Sidebar = ({ show, setShow }) => {
  return (
    <div className='relative'>
      <div
        className={`${
          show ? "hidden  lg:block" : ""
        } bg-[#232323]  z-50 absolute lg:relative h-full   lg:pr-6 min-h-screen text-white`}
      >
        <div className='flex py-5 px-3  pb-0 gap-4 mb-[26px]'>
          <Image src={coin} alt='coin' />
          <h2 className='font-bold'>MINDCHAIN</h2>
        </div>

        {/* menu items */}
        <SidebarItems setShow={setShow} show={show} />
      </div>
    </div>
  );
};

export default Sidebar;
