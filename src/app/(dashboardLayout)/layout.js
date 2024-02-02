"use client";
import Header from "@/components/ui/header";
import Sidebar from "@/components/ui/sidebar";
import React, { useState } from "react";

const DashboardLayout = ({ children }) => {
  const [show, setShow] = useState(true);
  return (
    <div className=''>
      {/* <Sidebar show={show} /> */}
      <div className=''>
        <Header setShow={setShow} show={show} />
        <div className=' '>{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
