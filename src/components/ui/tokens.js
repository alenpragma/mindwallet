import React from "react";

const Tokens = () => {
  return (
    <div>
      <div class=' min-w-full  overflow-x-auto mt-5'>
        <table class=' lg:w-full xl:w-[1150px] divide divide-[#BDBDBD]'>
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
    </div>
  );
};

export default Tokens;
