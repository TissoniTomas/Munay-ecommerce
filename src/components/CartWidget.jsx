import React, { useState } from 'react';
import { useCartContext } from '../provider/CartContext.jsx';
import CartProduct from './CartProduct.jsx';
import SummaryCard from './SummaryCard.jsx';

const CartWidget = () => {
  const { cartItems } = useCartContext();
  const [show, setShow] = useState(false);

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
