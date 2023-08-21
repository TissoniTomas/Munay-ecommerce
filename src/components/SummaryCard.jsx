import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import Swal from 'sweetalert2';
import { useCartContext } from '../provider/CartContext.jsx';
import useOrders from '../hooks/setOrder.jsx';

const SummaryCard = () => {
  const { cartItems, clearCart, totalPrice } = useCartContext();
  const { createOrder, ordersLoading } = useOrders();

  const handleOrder = async () => {
    createOrder(cartItems);
    try {
      await createOrder(cartItems);
      const productNames = cartItems.map(item => item.title).join(' - ');

      Swal.fire({
        icon: 'success',
        title: '¡Orden creada exitosamente!',
        html: `Productos: ${productNames} `,
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        clearCart();
      });
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error al crear la orden',
        text: 'Hubo un problema al crear la orden. Por favor, inténtalo nuevamente.',
        confirmButtonText: 'Aceptar',
      });
    }
  };

  return (
    <div className=" py-8 border-t rounded-2xl bg-[#f3f3f9] border  mt-7 px-3 md:px-6 w-[90%] md:w-[60%] dark:bg-black">
      <h1 className='text-2xl font-bold dark:text-white'>Orden</h1>
      <hr className='w-full px-3 h-[1px] border-0' />
      <div className='flex justify-between mt-5'>
        <span className='font-light dark:text-white'>Subtotal</span>
        <span className='font-light dark:text-white'>${totalPrice}</span>
      </div>
      <div className='flex justify-between mt-3'>
        <span className='font-light dark:text-white'>Descuento</span>
        <span className='font-light dark:text-white'>-$0.00</span>
      </div>
      <div className='flex justify-between mt-3'>
        <span className='font-bold text-xl dark:text-white'>Total</span>
        <span className='font-bold text-xl dark:text-white'>${totalPrice}</span>
      </div>
        <button onClick={handleOrder} className="text-base rounded-xl leading-none w-full mt-5 py-5 bg-black dark:bg-[#f3f3f9ef]  border-gray-200 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white dark:text-black">
          Comprar

        </button>
        {ordersLoading && <p>Creando orden...</p>}

    </div>
  );
};

export default SummaryCard;
