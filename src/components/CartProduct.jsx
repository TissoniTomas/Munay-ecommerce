import React from 'react';
import { CloseSVG } from '../assets/icons';
import NumberInputsWithButtons from './NumberInputsWithButtons.jsx';
import { useCartContext } from '../provider/CartContext.jsx';

const CartProduct = () => {
  const {
    cartItems, clearCart, removeItem, totalProducts,
  } = useCartContext();
  console.log(cartItems);
  return (
    <div className="md:flex py-8 border-t rounded-2xl border-[#e7e7ee] border  mt-7 px-3 w-[90%]">
      <div className='flex justify-between w-full '>
        <div className='flex items-center'>
          <h1 className='mr-2 font-medium text-2xl dark:text-white'>Carrito</h1>
          <p className='dark:text-white text-[12px] mt-2'>({totalProducts} productos)</p>
        </div>
        <div className='flex items-center ml-3 mt-2'>
          <CloseSVG height={15} color='true'/>
          <button onClick={clearCart} className='text-red-500 font-medium ml-1'>Clear cart</button>
        </div>
      </div>
      <div>
        {cartItems.map((item) => (
          <div key={item.id} className='flex border border-[#e7e7ee] rounded-2xl w-full py-5 px-2 mt-3 items-center break-all justify-between'>
            <img src={item.img} className='h-[50px] w-[50px]' alt="" />
            <h1 className='font-medium text-sm max-w-[80px] dark:text-white'>{item.title}</h1>
            <NumberInputsWithButtons quantity={item.quantity} />
            <p className='font-bold dark:text-white'>${item.price}</p>
            <CloseSVG height={20} color="true" onClick={() => removeItem(item.id)} />
          </div>
        ))}
      </div>
    </div>

  );
};

export default CartProduct;
