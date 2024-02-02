import Explore from "@/components/icons/Explore";
import Import from "@/components/icons/Import";
import Bridge from "@/components/icons/bridge";
import Buy from "@/components/icons/buy";
import Dashboard from "@/components/icons/dashboard";
import SellIcon from "@/components/icons/sellIcon";
import Send from "@/components/icons/send";
import Stack from "@/components/icons/stack";
import SwapIcon from "@/components/icons/swapIcon";
import Link from "next/link";

const SidebarItems = () => {
  return (
    <>
      <div className='flex flex-col gap-4 border border-red-600'>
        {/* Deshbord */}
        <Link href={"/dashbord"}>
          <div className='bg-[#383838] cursor-pointer rounded-[5px] p-2 w-[188px] h-[40px] flex place-items-center gap-2.5'>
            <div>
              <Dashboard />
            </div>
            <span className='font-semibold '>Dashbord</span>
          </div>
        </Link>
        {/* Explore */}
        <Link href={"/explore"}>
          <div className='hover:bg-[#383838] cursor-pointer rounded-[5px] p-2 w-[188px] h-[40px] flex place-items-center gap-2.5'>
            <div>
              <Explore />
            </div>
            <span className='font-semibold '>Explore</span>
          </div>
        </Link>

        {/* Buy */}
        <Link href={"/buy"}>
          <div className='hover:bg-[#383838] cursor-pointer rounded-[5px] p-2 w-[188px] h-[40px] flex place-items-center gap-2.5'>
            <div>
              <Buy />
            </div>
            <span className='font-semibold '>Buy</span>
          </div>
        </Link>

        {/* Sell */}
        <Link href={"/sell"}>
          <div className='hover:bg-[#383838] cursor-pointer rounded-[5px] p-2 w-[188px] h-[40px] flex place-items-center gap-2.5'>
            <div>
              <SellIcon />
            </div>
            <span className='font-semibold '>Sell</span>
          </div>
        </Link>
        {/* Swap */}
        <Link href={"/swap"}>
          <div className='hover:bg-[#383838] cursor-pointer rounded-[5px] p-2 w-[188px] h-[40px] flex place-items-center gap-2.5'>
            <div>
              <SwapIcon />
            </div>
            <span className='font-semibold '>Swap</span>
          </div>
        </Link>
        {/* Bridge */}
        <Link href={"/bridge"}>
          <div className='hover:bg-[#383838] cursor-pointer rounded-[5px] p-2 w-[188px] h-[40px] flex place-items-center gap-2.5'>
            <div>
              <Bridge />
            </div>
            <span className='font-semibold '>Bridge</span>
          </div>
        </Link>
        {/* Stake */}
        <Link href={"/stake"}>
          <div className='hover:bg-[#383838] cursor-pointer rounded-[5px] p-2 w-[188px] h-[40px] flex place-items-center gap-2.5'>
            <div>
              <Stack />
            </div>
            <span className='font-semibold '>Stake</span>
          </div>
        </Link>

        {/* Send & Receive */}
        <Link href={"/send"}>
          <div className='hover:bg-[#383838] cursor-pointer rounded-[5px] p-2 w-[188px] h-[40px] flex place-items-center gap-2.5'>
            <div>
              <Send />
            </div>
            <span className='font-semibold '>Send & Receive</span>
          </div>
        </Link>
        {/* Import Token */}
        <Link href={"/importToken"}>
          <div className='hover:bg-[#383838] cursor-pointer rounded-[5px] p-2 w-[188px] h-[40px] flex place-items-center gap-2.5'>
            <div>
              <Import />
            </div>
            <span className='font-semibold '>Import Token</span>
          </div>
        </Link>
      </div>
    </>
  );
};

export default SidebarItems;
