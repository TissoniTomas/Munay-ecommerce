import React, { useState } from 'react';

const NumberInputsWithButtons = ({ quantity }) => {
  const [value, setValue] = useState(quantity);

  const decreaseValue = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  };

  const increaseValue = () => {
    setValue(value + 1);
  };

  return (
<div className="flex items-center">
  <button className="border border-gray-300 rounded-[100%] h-[20px] w-[20px]  items-center justify-center hidden md:flex" onClick={decreaseValue}>
    <span className="text-sm font-bold dark:text-white">-</span>
  </button>
  <div className="text-center flex items-center justify-center px-1 font-bold dark:text-white">
    <span>{value}</span>
  </div>
  <button className="border border-gray-300 rounded-[100%] h-[20px] w-[20px]  items-center justify-center hidden md:flex" onClick={increaseValue}>
    <span className="text-sm font-bold dark:text-white">+</span>
  </button>
</div>

  );
};

export default NumberInputsWithButtons;
