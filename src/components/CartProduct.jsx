import React from 'react';
import { CloseSVG } from '../assets/icons';
import logo from './messi.png';
import NumberInputsWithButtons from './NumberInputsWithButtons.jsx';

const CartProduct = () => {
  return (
      <div className="md:flex py-8 border-t border rounded mt-7 px-3 w-[90%]">
        <div className='flex justify-between w-full '>
          <div className='flex items-center'>
            <h1 className='mr-2 font-medium text-2xl'>Carrito</h1>
            <p>(2 products)</p>
          </div>
          <div className='flex items-center ml-3'>
            <CloseSVG height={15} color />
            <button className='text-red-500 font-medium ml-1'>Clear cart</button>
          </div>
        </div>
        <div>
          <div className='flex border rounded w-full py-5 px-1 items-center  justify-between'>
            <img src={logo}
              className='h-[55px]'
              alt="" />
            <h1>titleeeeeeee</h1>
            <NumberInputsWithButtons />
            <p>$55.55</p>
            <CloseSVG height={20} color/>
          </div>
        </div>
      {/* <div className="w-1/4">
        <img src="https://cdn.tuk.dev/assets/templates/e-commerce-kit/bestSeller2.png" alt className="w-full h-full object-center object-cover" />
      </div>
      <div className="md:pl-3 md:w-3/4 w-full">
        <p className="text-xs leading-3 text-gray-800 md:pt-0 pt-4">RF293</p>
        <div className="flex items-center justify-between w-full pt-1">
          <p className="text-base font-black leading-none text-gray-800">Luxe Signature Ring</p>
            <div className="relative inline-block w-20">
              <input type="number" min="1" className="w-full py-2 px-3 border border-
              gray-200 rounded-md focus:outline-none focus:border-indigo-300" placeholder="Qty" />
            </div>
          </div>

        <p className="text-xs leading-3 text-gray-600 pt-2">Height: 10 inches</p>
        <p className="text-xs leading-3 text-gray-600 py-4">Color: Black</p>
        <p className="w-96 text-xs leading-3 text-gray-600">Composition: 100% calf leather</p>
        <div className="flex items-center justify-between pt-5 pr-6">
          <div className="flex itemms-center">
            <p className="text-xs leading-3 underline text-gray-800 cu
            rsor-pointer">Add to favorites</p>
            <p className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">Remove</p>
          </div>
          <p className="text-base font-black leading-none text-gray-800">$9,000</p>
        </div>
      </div> */}
    </div>

  );
};

export default CartProduct;
