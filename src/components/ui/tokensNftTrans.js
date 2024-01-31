import React from "react";
import coin1 from "@/assets/coin1.png";
import coin2 from "@/assets/coin1.png";
import Image from "next/image";
import Transactions from "./transactions";
const TokensNftTrans = () => {
  return (
    <div className='bg-[#F4F4F4] rounded-3xl mt-5 pt-10 pl-7'>
      {/* tab */}
      <div className='bg-white flex p-1 rounded-full w-fit gap-2'>
        <p className='bg-[#FF971D] px-3 py-1 rounded-full text-white font-semibold'>
          Tokens
        </p>
        <p className='bg-[#FF971D] px-3 py-1 rounded-full text-white font-semibold'>
          NFTs
        </p>
        <p className='bg-[#FF971D] px-3 py-1 rounded-full text-white font-semibold'>
          Transactions
        </p>
      </div>

      <div className='mt-4'>
        <div className='flex gap-2'>
          <div>
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
          </div>

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
        {/* table */}

        <div class='overflow-x-auto mt-5'>
          <table class='min-w-full divide-y divide-[#BDBDBD]'>
            <thead>
              <tr>
                <th class='px-6 py-3  text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider'>
                  Token
                </th>
                <th class='px-6 py-3  text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider'>
                  Price(24H)
                </th>
                <th class='px-6 py-3  text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider'>
                  Balance
                </th>
              </tr>
            </thead>
            <tbody class=' divide-y divide-[#BDBDBD]'>
              {/* <!-- Table rows go here --> */}
              <tr className=' '>
                <td class='pr-6 py-4 whitespace-no-wrap'>
                  <div class='ml-4'>
                    <div class='text-sm leading-5 font-medium text-[#1B1B1B]'>
                      MindChain
                    </div>
                  </div>
                </td>
                <td class='px-6 py-4 whitespace-no-wrap'>
                  <div class='text-sm leading-5 text-[#1B1B1B]'>$2210 </div>
                </td>
                <td class='px-6 py-4 whitespace-no-wrap'>
                  <span class='px-2 inline-flex text-xs leading-5 font-semibold rounded-full '>
                    220
                  </span>
                </td>
              </tr>
              <tr className=''>
                <td class='pr-6 py-4 whitespace-no-wrap'>
                  <div class='ml-4'>
                    <div class='text-sm leading-5 font-medium text-[#1B1B1B]'>
                      MindChain
                    </div>
                  </div>
                </td>
                <td class='px-6 py-4 whitespace-no-wrap'>
                  <div class='text-sm leading-5 text-[#1B1B1B]'>$2210 </div>
                </td>
                <td class='px-6 py-4 whitespace-no-wrap'>
                  <span class='px-2 inline-flex text-xs leading-5 font-semibold rounded-full '>
                    220
                  </span>
                </td>
              </tr>
              <tr className='border-b-[1px] '>
                <td class='pr-6 py-4 whitespace-no-wrap'>
                  <div class='ml-4'>
                    <div class='text-sm leading-5 font-medium text-[#1B1B1B]'>
                      MindChain
                    </div>
                  </div>
                </td>
                <td class='px-6 py-4 whitespace-no-wrap'>
                  <div class='text-sm leading-5 text-[#1B1B1B]'>$2210 </div>
                </td>
                <td class='px-6 py-4 whitespace-no-wrap'>
                  <span class='px-2 inline-flex text-xs leading-5 font-semibold rounded-full '>
                    220
                  </span>
                </td>
              </tr>

              <tr className='border-b-[1px] '>
                <td class='pr-6 py-4 whitespace-no-wrap'>
                  <div class='ml-4'>
                    <div class='text-sm leading-5 font-medium text-[#1B1B1B]'>
                      MindChain
                    </div>
                  </div>
                </td>
                <td class='px-6 py-4 whitespace-no-wrap'>
                  <div class='text-sm leading-5 text-[#1B1B1B]'>$2210 </div>
                </td>
                <td class='px-6 py-4 whitespace-no-wrap'>
                  <span class='px-2 inline-flex text-xs leading-5 font-semibold rounded-full '>
                    220
                  </span>
                </td>
              </tr>
              {/* <!-- More table rows go here --> */}
            </tbody>
          </table>
        </div>

        <div className='mt-5'>
          <Transactions />
        </div>
      </div>
    </div>
  );
};

export default TokensNftTrans;
