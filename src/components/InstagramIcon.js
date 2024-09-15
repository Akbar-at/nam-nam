import React from 'react';

const InstagramIcon = ({ size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 50 50"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="25" cy="25" r="20" fill="#E1306C" />
      <rect x="15" y="15" width="20" height="20" fill="white" />
      <circle cx="25" cy="25" r="7" fill="#E1306C" />
    </svg>
  );
};

export default InstagramIcon;
