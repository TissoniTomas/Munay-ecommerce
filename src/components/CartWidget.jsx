import React from 'react';
import { useCartContext } from '../provider/CartContext.jsx';
import CartProduct from './CartProduct.jsx';
import SummaryCard from './SummaryCard.jsx';

const CartWidget = () => {
  const { cartItems } = useCartContext();

  console.log(cartItems);
  return (
    <div>
      {
        <div className="flex md:flex-row flex-col items-center" id="cart">
          <CartProduct />
          <SummaryCard />
        </div>
      }
    </div>

  );
};

export default CartWidget;
