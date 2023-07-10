import React from 'react';
import { CartSVG } from '../assets/icons';

const CartWidget = ({ productsAmount }) => {
  return (
    <div>
    < CartSVG color='#fff' productsAmount={productsAmount} className='w-[20px] sm:w-[25px]'/>
    <div className='absolute  right-[-8px] top-[-6px]'>
    <span className='flex items-center justify-center rounded-full bg-[#bdcf23] w-[15px] h-[15px] p-2 text-center text-[0.7rem] font-bold'>{productsAmount}</span>
    </div>
    </div>
  );
};

export default CartWidget;
