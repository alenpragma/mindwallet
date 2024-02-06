"use client";
import Header from "@/components/ui/header";
import Sidebar from "@/components/ui/sidebar";
import React, { useState } from "react";

const DashboardLayout = ({ children }) => {
  const [show, setShow] = useState(true);

  return (
    <div className='flex'>
      <div>
        <Sidebar setShow={setShow} show={show} />
      </div>

      <div className='w-full '>
        <Header setShow={setShow} show={show} />

        <div className='max-w-[1440px]'>
          <div className=' lg:px-[30] mb-10 '>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
