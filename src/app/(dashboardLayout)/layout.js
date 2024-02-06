"use client";
import Header from "@/components/ui/header";
import Sidebar from "@/components/ui/sidebar";
import React, { useState } from "react";

const DashboardLayout = ({ children }) => {
  const [show, setShow] = useState(true);
  // const width = window?.screen?.width;
  const width = typeof window !== "undefined" ? window?.screen?.width : null;
  console.log(width);

  let closeSide = () => {
    if (width < 768 && show == false) {
      console.log("size", width);
      setShow(!show);
    }
  };
  return (
    <div className='flex'>
      <div>
        <Sidebar setShow={setShow} show={show} />
      </div>

      <div className='w-full ps-1 lg:ml-[220px] xl:ml-[230px]'>
        <Header setShow={setShow} show={show} />

        <div className='max-w-full'>
          <div className=' lg:px-[30] mb-10 ' onClick={() => closeSide()}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
