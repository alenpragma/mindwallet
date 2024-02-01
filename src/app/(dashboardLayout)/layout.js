import Header from "@/components/ui/header";
import Sidebar from "@/components/ui/sidebar";
import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div className='flex '>
      <Sidebar />
      <div className=''>
        <Header />
        <div className='px-[35px] mb-60'>{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
