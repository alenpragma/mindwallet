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

const SidebarItems = ({ setShow, show }) => {
  const pathname = usePathname();
  const formattedPath = pathname.slice(1).replace(/-/g, " ");
  console.log(formattedPath);
  return (
    <>
      <div className='flex flex-col p-1 gap-4'>
        {/* Deshbord */}
        <Link href={"/dashbord"} onClick={() => setShow(!show)}>
          <div
            className={` ${
              formattedPath == "dashbord"
                ? "bg-[#383838] font-semibold"
                : "font-medium "
            }  cursor-pointer rounded-[5px]  p-2 w-[188px] h-[40px] flex place-items-center gap-2.5`}
          >
            <div>
              <Dashboard
                color={` ${formattedPath == "dashbord" ? "#fff" : "#B4B4B4"} `}
              />
            </div>
            <span className=' '>Dashbord</span>
          </div>
        </Link>
        {/* Explore */}

        <Link href={"/explore"} onClick={() => setShow(!show)}>
          <div
            className={` ${
              formattedPath == "explore"
                ? "bg-[#383838] font-semibold"
                : "font-medium "
            }  cursor-pointer rounded-[5px]  p-2 w-[188px] h-[40px] flex place-items-center gap-2.5`}
          >
            {" "}
            <div>
              <Explore
                color={` ${formattedPath == "explore" ? "#fff" : "#B4B4B4"} `}
              />
            </div>
            <span className='  '>Explore</span>
          </div>
        </Link>

        {/* Buy */}
        <Link href={"/buy"} onClick={() => setShow(!show)}>
          <div
            className={` ${
              formattedPath == "buy"
                ? "bg-[#383838] font-semibold "
                : "font-medium"
            }  cursor-pointer rounded-[5px] p-2 w-[188px] h-[40px] flex place-items-center gap-2.5`}
          >
            {" "}
            <div>
              <Buy color={` ${formattedPath == "buy" ? "#fff" : "#B4B4B4"} `} />
            </div>
            <span className=' '>Buy</span>
          </div>
        </Link>

        {/* Sell */}
        <Link href={"/sell"} onClick={() => setShow(!show)}>
          <div
            className={` ${
              formattedPath == "sell"
                ? "bg-[#383838] font-semibold"
                : "font-medium "
            }  cursor-pointer rounded-[5px] p-2 w-[188px] h-[40px] flex place-items-center gap-2.5`}
          >
            {" "}
            <div>
              <SellIcon
                color={` ${formattedPath == "sell" ? "#fff" : "#B4B4B4"} `}
              />
            </div>
            <span className=''>Sell</span>
          </div>
        </Link>
        {/* Swap */}
        <Link href={"/swap"} onClick={() => setShow(!show)}>
          <div
            className={` ${
              formattedPath == "swap"
                ? "bg-[#383838] font-semibold"
                : "font-medium "
            }  cursor-pointer rounded-[5px] p-2 w-[188px] h-[40px] flex place-items-center gap-2.5`}
          >
            {" "}
            <div>
              <SwapIcon
                color={` ${formattedPath == "swap" ? "#fff" : "#B4B4B4"} `}
              />
            </div>
            <span className=''>Swap</span>
          </div>
        </Link>
        {/* Bridge */}
        <Link href={"/bridge"} onClick={() => setShow(!show)}>
          <div
            className={` ${
              formattedPath == "bridge"
                ? "bg-[#383838] font-semibold"
                : "font-medium"
            }  cursor-pointer rounded-[5px] p-2 w-[188px] h-[40px] flex place-items-center gap-2.5`}
          >
            {" "}
            <div>
              <Bridge
                color={` ${formattedPath == "bridge" ? "#fff" : "#B4B4B4"} `}
              />
            </div>
            <span className=' '>Bridge</span>
          </div>
        </Link>
        {/* Stake */}
        <Link href={"/stake"} onClick={() => setShow(!show)}>
          <div
            className={` ${
              formattedPath == "stake"
                ? "bg-[#383838] font-semibold"
                : "font-medium"
            }  cursor-pointer rounded-[5px] p-2 w-[188px] h-[40px] flex place-items-center gap-2.5`}
          >
            {" "}
            <div>
              <Stack
                color={` ${formattedPath == "stake" ? "#fff" : "#B4B4B4"} `}
              />
            </div>
            <span className=' '>Stake</span>
          </div>
        </Link>

        {/* Send & Receive */}
        <Link href={"/send-&-receive"} onClick={() => setShow(!show)}>
          <div
            className={` ${
              formattedPath == "send & receive"
                ? "bg-[#383838] font-semibold"
                : "font-medium"
            }  cursor-pointer rounded-[5px] p-2 w-[188px] h-[40px] flex place-items-center gap-2.5`}
          >
            {" "}
            <div>
              <Send
                color={` ${
                  formattedPath == "send & receive" ? "#fff" : "#B4B4B4"
                } `}
              />
            </div>
            <span className=' '>Send & Receive</span>
          </div>
        </Link>
        {/* Import Token */}
        <Link href={"/import-Token"} onClick={() => setShow(!show)}>
          <div
            className={` ${
              formattedPath == "import Token"
                ? "bg-[#383838] font-semibold "
                : "font-medium"
            }  cursor-pointer rounded-[5px] p-2 w-[188px] h-[40px] flex place-items-center gap-2.5`}
          >
            {" "}
            <div>
              <Import
                color={` ${
                  formattedPath == "import Token" ? "#fff" : "#B4B4B4"
                } `}
              />
            </div>
            <span className=''>Import Token</span>
          </div>
        </Link>
      </div>
    </>
  );
};

export default SidebarItems;
