import React from 'react';
import CartImg from '../assets/icons/CartSVG.jsx';

const CartWidget = ({ productsAmount }) => {
  return (
    <div>
    <CartImg color='#fff' productsAmount={productsAmount} width={25}/>
    <div className='absolute  right-[-8px] top-[-6px]'>
    <span className='flex items-center justify-center rounded-full bg-[#bdcf23] w-[15px] h-[15px] p-2 text-center text-xs font-bold'>{productsAmount}</span>
    </div>
    </div>
  );
};

export default CartWidget;
