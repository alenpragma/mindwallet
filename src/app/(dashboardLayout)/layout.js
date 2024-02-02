"use client";
import Header from "@/components/ui/header";
import Sidebar from "@/components/ui/sidebar";
import React, { useState } from "react";

const DashboardLayout = ({ children }) => {
  const [show, setShow] = useState(true);
  return (
    <div className='flex '>
      <Sidebar show={show} />
      <div className=''>
        <Header setShow={setShow} show={show} />
        {/* <div className='px-[35px] mb-60'>{children}</div> */}
      </div>
    </div>
  );
};

export default DashboardLayout;
