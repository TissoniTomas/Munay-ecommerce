import React, { useState } from 'react';

const NumberInputsWithButtons = ({ quantity, onDecrease, onIncrease }) => {
  const [value, setValue] = useState(quantity);

  const decreaseValue = () => {
    if (value > 1) {
      setValue(value - 1);
      onDecrease();
    }
  };

  const increaseValue = () => {
    setValue(value + 1);
    onIncrease();
  };

  return (
<div className="flex items-center">
  <button className="border border-gray-300 rounded-[100%] h-[20px] w-[20px] md:h-[35px] md:w-[35px] items-center justify-center hidden md:flex" onClick={decreaseValue}>
    <span className="text-sm font-bold dark:text-white">-</span>
  </button>
  <div className="text-center flex items-center justify-center px-1 md:px-3 font-bold dark:text-white">
    <span className='md:text-lg'>{value}</span>
  </div>
  <button className="border border-gray-300 rounded-[100%] h-[20px] w-[20px] md:h-[35px] md:w-[35px]  items-center justify-center hidden md:flex" onClick={increaseValue}>
    <span className="text-sm font-bold dark:text-white">+</span>
  </button>
</div>

  );
};

export default NumberInputsWithButtons;
