import React from "react";

const Stack = ({ color }) => {
  return (
    <>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='25'
        height='25'
        viewBox='0 0 25 25'
        fill='none'
      >
        <g clip-path='url(#clip0_1_45)'>
          <path
            d='M5.20833 4.16667C5.20833 3.59167 5.675 3.125 6.25 3.125H8.33333V1.04167C8.33333 0.466667 8.8 0 9.375 0C9.95 0 10.4167 0.466667 10.4167 1.04167V3.125H12.5C13.075 3.125 13.5417 3.59167 13.5417 4.16667C13.5417 4.74167 13.075 5.20833 12.5 5.20833H10.4167V7.29167C10.4167 7.86667 9.95 8.33333 9.375 8.33333C8.8 8.33333 8.33333 7.86667 8.33333 7.29167V5.20833H6.25C5.675 5.20833 5.20833 4.74167 5.20833 4.16667ZM24.2042 13.5573L17.1156 21.5125C15.1406 23.7292 12.3063 25 9.33854 25H4.16667C1.86875 25 0 23.1312 0 20.8333V15.625C0 13.3271 1.86875 11.4583 4.16667 11.4583H13.3938C14.5802 11.4583 15.6208 12.0927 16.1948 13.0396L19.5448 9.35833C20.1094 8.73854 20.8802 8.375 21.7177 8.33646C22.5542 8.28958 23.3563 8.58646 23.976 9.15104C25.2406 10.3042 25.3427 12.2802 24.2042 13.5562V13.5573ZM22.5729 10.6917C22.3656 10.5031 22.0948 10.4135 21.8146 10.4187C21.5333 10.4323 21.275 10.5531 21.0854 10.7615L16.475 15.8281C16.074 16.9437 15.0802 17.7979 13.8563 17.9729L8.48021 18.7406C7.9125 18.8229 7.38333 18.4271 7.30208 17.8573C7.22083 17.2875 7.61667 16.7604 8.18542 16.6792L13.5615 15.9115C14.1438 15.8281 14.5833 15.3219 14.5833 14.7333C14.5833 14.0771 14.05 13.5437 13.3938 13.5437H4.16667C3.01771 13.5437 2.08333 14.4781 2.08333 15.6271V20.8354C2.08333 21.9844 3.01771 22.9187 4.16667 22.9187H9.33854C11.7125 22.9187 13.9813 21.9021 15.5604 20.1292L22.649 12.1729C23.0313 11.7437 22.9969 11.0802 22.5729 10.6927V10.6917Z'
            fill={color}
          />
        </g>
        <defs>
          <clipPath id='clip0_1_45'>
            <rect width='25' height='25' fill='white' />
          </clipPath>
        </defs>
      </svg>
    </>
  );
};

export default Stack;
