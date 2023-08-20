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
  <button className="border border-gray-300 rounded-l h-[20px] w-[20px] flex items-center justify-center" onClick={decreaseValue}>
    <span className="text-sm font-bold">-</span>
  </button>
  <input className="border-t border-b border-gray-300 w-[50px] h-[20px] px-3 py-1 text-center" type="number" value={value} readOnly />
  <button className="border border-gray-300 rounded-r h-[20px] w-[20px] flex items-center justify-center" onClick={increaseValue}>
    <span className="text-sm font-bold">+</span>
  </button>
</div>

  );
};

export default NumberInputsWithButtons;
