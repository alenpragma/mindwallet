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
import { usePathname } from "next/navigation";

const SidebarItems = () => {
  const pathname = usePathname();
  const formattedPath = pathname.slice(1).replace(/-/g, " ");
  console.log(formattedPath);
  return (
    <>
      <div className='flex flex-col p-1 gap-4'>
        {/* Deshbord */}
        <Link href={"/dashbord"}>
          <div
            className={` ${
              formattedPath == "Dashbord" && "bg-[#383838]"
            }  cursor-pointer rounded-[5px] p-2 w-[188px] h-[40px] flex place-items-center gap-2.5`}
          >
            <div>
              <Dashboard />
            </div>
            <span className='font-semibold '>Dashbord</span>
          </div>
        </Link>
        {/* Explore */}

        <Link href={"/explore"}>
          <div
            className={` ${
              formattedPath == "explore" && "bg-[#383838]"
            }  cursor-pointer rounded-[5px] p-2 w-[188px] h-[40px] flex place-items-center gap-2.5`}
          >
            {" "}
            <div>
              <Explore />
            </div>
            <span className='font-semibold '>Explore</span>
          </div>
        </Link>

        {/* Buy */}
        <Link href={"/buy"}>
          <div
            className={` ${
              formattedPath == "buy" && "bg-[#383838]"
            }  cursor-pointer rounded-[5px] p-2 w-[188px] h-[40px] flex place-items-center gap-2.5`}
          >
            {" "}
            <div>
              <Buy />
            </div>
            <span className='font-semibold '>Buy</span>
          </div>
        </Link>

        {/* Sell */}
        <Link href={"/sell"}>
          <div
            className={` ${
              formattedPath == "sell" && "bg-[#383838]"
            }  cursor-pointer rounded-[5px] p-2 w-[188px] h-[40px] flex place-items-center gap-2.5`}
          >
            {" "}
            <div>
              <SellIcon />
            </div>
            <span className='font-semibold '>Sell</span>
          </div>
        </Link>
        {/* Swap */}
        <Link href={"/swap"}>
          <div
            className={` ${
              formattedPath == "swap" && "bg-[#383838]"
            }  cursor-pointer rounded-[5px] p-2 w-[188px] h-[40px] flex place-items-center gap-2.5`}
          >
            {" "}
            <div>
              <SwapIcon />
            </div>
            <span className='font-semibold '>Swap</span>
          </div>
        </Link>
        {/* Bridge */}
        <Link href={"/bridge"}>
          <div
            className={` ${
              formattedPath == "bridge" && "bg-[#383838]"
            }  cursor-pointer rounded-[5px] p-2 w-[188px] h-[40px] flex place-items-center gap-2.5`}
          >
            {" "}
            <div>
              <Bridge />
            </div>
            <span className='font-semibold '>Bridge</span>
          </div>
        </Link>
        {/* Stake */}
        <Link href={"/stake"}>
          <div
            className={` ${
              formattedPath == "stake" && "bg-[#383838]"
            }  cursor-pointer rounded-[5px] p-2 w-[188px] h-[40px] flex place-items-center gap-2.5`}
          >
            {" "}
            <div>
              <Stack />
            </div>
            <span className='font-semibold '>Stake</span>
          </div>
        </Link>

        {/* Send & Receive */}
        <Link href={"/send-&-receive"}>
          <div
            className={` ${
              formattedPath == "send & receive" && "bg-[#383838]"
            }  cursor-pointer rounded-[5px] p-2 w-[188px] h-[40px] flex place-items-center gap-2.5`}
          >
            {" "}
            <div>
              <Send />
            </div>
            <span className='font-semibold '>Send & Receive</span>
          </div>
        </Link>
        {/* Import Token */}
        <Link href={"/import-Token"}>
          <div
            className={` ${
              formattedPath == "import Token" && "bg-[#383838]"
            }  cursor-pointer rounded-[5px] p-2 w-[188px] h-[40px] flex place-items-center gap-2.5`}
          >
            {" "}
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
