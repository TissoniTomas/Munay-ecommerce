import * as React from 'react';

const CloseSVG = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 -960 960 960"
    {...props}
    className='min-w-[20px] md:mr-1'
  >
    <path
      className={props.color ? 'fill-red-600' : 'fill-black dark:fill-gray-200'}
      d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"
    />
  </svg>
);
export default CloseSVG;
