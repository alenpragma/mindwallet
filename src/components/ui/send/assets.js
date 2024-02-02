"use client";
import React, { useState } from "react";
import Modal from "./modal";
import DownArrow from "@/components/icons/downArrow";

const Assets = () => {
  const [assets, setAssets] = useState(true);
  const [show, setShow] = useState("1");
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div className=' '>
      <div className='mt-[20px] lg:mt-[35px]'>
        <h2 className='font-semibold text-md lg:text-lg text-[#343434]'>
          Assets
        </h2>
        <div
          onClick={openModal}
          className='text-[#909090]  bg-white text-sm lg:text-lg font-semibold  flex place-items-center justify-between border-[1px] border-[#FF971D] rounded-3xl  px-4 w-full lg:w-[h-10 lg:553px] h-10 lg:h-14 focus:outline-none'
        >
          <p>Select Assets</p>
          <DownArrow />
        </div>
      </div>
      <Modal isOpen={modalOpen} onClose={closeModal} />
    </div>
  );
};

export default Assets;
