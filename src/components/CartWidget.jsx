import React from 'react';
import CartProduct from './CartProduct.jsx';
import SummaryCard from './SummaryCard.jsx';

const CartWidget = () => {
  return (
    <div>
      {
        <div className="flex flex-col lg:flex-row lg:gap-6 items-center lg:items-start" id="cart">
          <CartProduct />
          <SummaryCard />
        </div>
      }
    </div>

  );
};

export default CartWidget;
