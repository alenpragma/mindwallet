import React from "react";

const SellIcon = ({ color }) => {
  return (
    <>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='25'
        height='25'
        viewBox='0 0 25 25'
        fill='none'
      >
        <g clip-path='url(#clip0_1_30)'>
          <path
            d='M12.5 0C5.60729 0 0 5.60729 0 12.5C0 19.3927 5.60729 25 12.5 25C19.3927 25 25 19.3927 25 12.5C25 5.60729 19.3927 0 12.5 0ZM12.5 22.9167C6.75625 22.9167 2.08333 18.2437 2.08333 12.5C2.08333 6.75625 6.75625 2.08333 12.5 2.08333C18.2437 2.08333 22.9167 6.75625 22.9167 12.5C22.9167 18.2437 18.2437 22.9167 12.5 22.9167ZM17.7083 12.5C17.7083 13.075 17.2417 13.5417 16.6667 13.5417H8.33333C7.75833 13.5417 7.29167 13.075 7.29167 12.5C7.29167 11.925 7.75833 11.4583 8.33333 11.4583H16.6667C17.2417 11.4583 17.7083 11.925 17.7083 12.5Z'
            fill={color}
          />
        </g>
        <defs>
          <clipPath id='clip0_1_30'>
            <rect width='25' height='25' fill='white' />
          </clipPath>
        </defs>
      </svg>
    </>
  );
};

export default SellIcon;
