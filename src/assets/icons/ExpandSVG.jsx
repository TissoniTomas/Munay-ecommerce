import * as React from 'react';

const ExpandSVG = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    className='mt-2'
    viewBox="0 -960 960 960"
    {...props}
  >
    <path
     d="M480-345 240-585l43-43 197 198 197-197 43 43-240 239Z"
     className='fill-black dark:fill-white'
     />
  </svg>
);
export default ExpandSVG;
