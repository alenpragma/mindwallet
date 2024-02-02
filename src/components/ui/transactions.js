import React from "react";

const Transactions = () => {
  return (
    <div className='pb-[90px]'>
      <h2 className='text-[#2D2D2D] font-medium pt-6 pb-4'>Jan 29</h2>
      <div className='bg-white rounded-[20px] px-3 lg:px-8'>
        <div className='h-[50px] lg:h-[77px] flex justify-between place-items-center'>
          <div className='flex gap-1'>
            <div className='bg-[#FFD0CA] w-[30px] h-[30px] rounded-full flex  place-items-center justify-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                viewBox='0 0 16 16'
                fill='none'
              >
                <g clip-path='url(#clip0_1_171)'>
                  <path
                    d='M14.6667 0H6.66667V1.33333H13.724L0.0286713 15.0287L0.971338 15.9713L14.6667 2.276V9.33333H16V1.33333C16 0.598 15.402 0 14.6667 0Z'
                    fill='#FF1F00'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_1_171'>
                    <rect width='16' height='16' fill='white' />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <p className=' text-[#000] ps-2.5 font-medium'>Send</p>
          </div>
          <div className='text-xs text-[#000] font-medium'>-20 Mind</div>
        </div>
        <hr className='border-b-[1px]' />
        <div className='h-[50px] lg:h-[77px] flex justify-between place-items-center'>
          <div className='flex gap-1'>
            <div className='bg-[#D8FFCA] w-[30px] h-[30px] rounded-full flex  place-items-center justify-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                viewBox='0 0 16 16'
                fill='none'
              >
                <g clip-path='url(#clip0_1_179)'>
                  <path
                    d='M1.33334 16L9.33334 16V14.6667L2.27601 14.6667L15.9713 0.971333L15.0287 0.0286657L1.33334 13.724L1.33334 6.66667H9.69654e-06L9.69654e-06 14.6667C9.69654e-06 15.402 0.59801 16 1.33334 16Z'
                    fill='#41FA00'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_1_179'>
                    <rect
                      width='16'
                      height='16'
                      fill='white'
                      transform='matrix(-1 0 0 -1 16 16)'
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <p className=' text-[#000] ps-2.5 font-medium'>Receive</p>
          </div>
          <div className='text-xs text-[#000] font-medium'>+20 Mind</div>
        </div>
      </div>

      <h2 className='text-[#2D2D2D] font-medium pt-6 pb-4'>Jan 30</h2>
      <div className='bg-white rounded-[20px] px-3 lg:px-8'>
        <div className='h-[50px] lg:h-[77px] flex justify-between place-items-center'>
          <div className='flex gap-1'>
            <div className='bg-[#FFD0CA] w-[30px] h-[30px] rounded-full flex  place-items-center justify-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                viewBox='0 0 16 16'
                fill='none'
              >
                <g clip-path='url(#clip0_1_171)'>
                  <path
                    d='M14.6667 0H6.66667V1.33333H13.724L0.0286713 15.0287L0.971338 15.9713L14.6667 2.276V9.33333H16V1.33333C16 0.598 15.402 0 14.6667 0Z'
                    fill='#FF1F00'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_1_171'>
                    <rect width='16' height='16' fill='white' />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <p className=' text-[#000] ps-2.5 font-medium'>Send</p>
          </div>
          <div className='text-xs text-[#000] font-medium'>-20 Mind</div>
        </div>
        <hr className='border-b-[1px]' />
        <div className='h-[50px] lg:h-[77px] flex justify-between place-items-center'>
          <div className='flex gap-1'>
            <div className='bg-[#D8FFCA] w-[30px] h-[30px] rounded-full flex  place-items-center justify-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                viewBox='0 0 16 16'
                fill='none'
              >
                <g clip-path='url(#clip0_1_179)'>
                  <path
                    d='M1.33334 16L9.33334 16V14.6667L2.27601 14.6667L15.9713 0.971333L15.0287 0.0286657L1.33334 13.724L1.33334 6.66667H9.69654e-06L9.69654e-06 14.6667C9.69654e-06 15.402 0.59801 16 1.33334 16Z'
                    fill='#41FA00'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_1_179'>
                    <rect
                      width='16'
                      height='16'
                      fill='white'
                      transform='matrix(-1 0 0 -1 16 16)'
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <p className=' text-[#000] ps-2.5 font-medium'>Receive</p>
          </div>
          <div className='text-xs text-[#000] font-medium'>+20 Mind</div>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
