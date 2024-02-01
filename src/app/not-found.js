import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className='flex bg-gray-200 justify-center  h-screen place-items-center '>
      <div className=' flex  flex-col justify-center place-items-center'>
        <h2 className='text-[80px] leading-tight font-bold text-center'>404</h2>
        <p className='text-md font-semibold'>Page not Found</p>
        <Link href={"/"}>
          <button className='border px-5 py-1 flex justify-center rounded-md mx-auto mt-3 bg-[#aeabab] '>
            Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default page;
