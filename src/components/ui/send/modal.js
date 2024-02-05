import DownArrow from "@/components/icons/downArrow";
import Search from "@/components/icons/search";
import React, { useState } from "react";

const Modal = ({ isOpen, onClose }) => {
  const [show, setShow] = useState("1");

  return (
    <div>
      <>
        {/* Background Overlay */}
        {isOpen && (
          <div className='fixed inset-0 z-50 px-2 flex items-center justify-center bg-black bg-opacity-50'>
            {/* Modal Container */}
            <div className='bg-[#EDEDED] py-6 min-h-[60%] px-5 rounded-lg shadow-md'>
              {/* Modal Content */}
              <div className=''>
                <div
                  onClick={onClose}
                  className='text-end cursor-pointer p-3 bg-gray-300 w-10 h-10 ms-auto flex  justify-center place-items-center rounded-full'
                >
                  X
                </div>
                <div className='max-w-screen  font-semibold  lg:w-[654px]  '>
                  <div>
                    <p className=' text-md mb-[30px] text-center lg:text-2xl'>
                      Select asset to send
                    </p>
                  </div>
                  <div>
                    <div className=''>
                      <div>
                        <div className='bg-white   flex p-1 rounded-full w-fit gap-4'>
                          <p
                            onClick={() => setShow(1)}
                            className={`${
                              show == 1 && "bg-[#FF971D] text-[#fff] "
                            } px-3 py-1 rounded-full text-[#FF971D] cursor-pointer `}
                          >
                            Tokens
                          </p>
                          <p
                            onClick={() => setShow(2)}
                            className={`${
                              show == 2 && "bg-[#FF971D] text-[#fff]"
                            } px-3 py-1 rounded-full text-[#FF971D] cursor-pointer `}
                          >
                            NFTs
                          </p>
                        </div>
                        <div className='w-full  mt-[35px] h-14 px-3 rounded-2xl flex place-items-center justify-between gap-4 border-[1px] border-[#FF971D]'>
                          <div className='flex gap-1'>
                            <Search />
                            <p className='text-[#434343] text-lg '>Search</p>
                          </div>
                          <div className='flex h-full place-items-center gap-2'>
                            <hr className='border border-[#3D3D3D] h-full ' />
                            <p className=' text-[#343434]'>All Network</p>
                            <div>
                              <DownArrow />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <button
                  onClick={onClose}
                  className='mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none'
                >
                  Close
                </button> */}
              </div>
            </div>
          </div>
        )}
      </>
    </div>
  );
};

export default Modal;
{
  /* <div className={` ${assets ? "hidden" : "block"} h-screen`}>
        <div className='h-52   top-0  w-40  bg-red-500'>
          <div>
            {" "}
            <div className='bg-white mt-4   mx-3 flex p-1 rounded-full w-fit gap-4'>
              <p
                onClick={() => setShow(1)}
                className={`${
                  show == 1 && "bg-[#FF971D] text-[#fff] "
                } px-3 py-1 rounded-full text-[#FF971D] cursor-pointer `}
              >
                Tokens
              </p>
              <p
                onClick={() => setShow(2)}
                className={`${
                  show == 2 && "bg-[#FF971D] text-[#fff]"
                } px-3 py-1 rounded-full text-[#FF971D] cursor-pointer `}
              >
                NFTs
              </p>
            </div>
          </div>
        </div>
      </div> */
}
