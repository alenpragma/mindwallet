import Image from "next/image";
import coin1 from "@/assets/coin1.png";
import coin2 from "@/assets/coin1.png";
const UserWalletDetails = () => {
  return (
    <div>
      <div className='flex gap-2'>
        <select
          className='custom-select  flex place-items-center border-[1px] rounded-3xl  px-4 text-sm w-[199px] h-10  bg-[#EDEDED] focus:outline-none'
          name=''
          id=''
        >
          <option className=' text-primary opacity-50' value='PMIND'>
            User Wallet Address{" "}
          </option>
          <option className=' text-primary opacity-50' value='USD'>
            USD
          </option>
          <option className=' text-primary opacity-50' value='EUR'>
            USD
          </option>
        </select>

        <div className=' relative  text-sm w-[229px] h-10 '>
          <Image
            className='absolute w-[27px]    top-1/2 left-5 transform -translate-x-1/2 -translate-y-1/2 h-[27px] flex place-items-center items-center'
            src={coin1}
            alt=''
          />
          <select
            className='custom-select ps-10 flex place-items-center border-[1px] rounded-3xl  px-4 text-sm w-full h-10  bg-[#EDEDED] focus:outline-none'
            name=''
            id=''
          >
            <option className=' text-primary p  opacity-50' value='PMIND'>
              Mind Chain Network
            </option>
            <option className=' text-primary opacity-50' value='USD'>
              USD
            </option>
            <option className=' text-primary opacity-50' value='EUR'>
              USD
            </option>
          </select>
        </div>

        <div className='relative w-[229px]'>
          <Image
            className='absolute w-[27px]    top-1/2 left-5 transform -translate-x-1/2 -translate-y-1/2 h-[27px] flex place-items-center items-center'
            src={coin2}
            alt=''
          />
          <select
            className='custom-select ps-10 flex place-items-center border-[1px] rounded-3xl  px-4 text-sm w-full h-10  bg-[#EDEDED] focus:outline-none'
            name=''
            id=''
          >
            <option className=' text-primary p  opacity-50' value='PMIND'>
              Mind Chain Network
            </option>
            <option className=' text-primary opacity-50' value='USD'>
              USD
            </option>
            <option className=' text-primary opacity-50' value='EUR'>
              USD
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default UserWalletDetails;
