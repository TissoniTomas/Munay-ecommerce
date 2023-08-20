import React from 'react';

const SummaryCard = () => {
  return (
    <div className="xl:w-1/2 md:w-1/2 w-full h-full">
    <div className="flex flex-col px-14 py-20 justify-between overflow-y-auto">
        <div>
            <p className="text-4xl font-black leading-9 text-gray-800">Summary</p>
            <div className="flex items-center justify-between pt-16">
                <p className="text-base leading-none text-gray-800">Subtotal</p>
                <p className="text-base leading-none text-gray-800">$9,000</p>
            </div>
            <div className="flex items-center justify-between pt-5">
                <p className="text-base leading-none text-gray-800">Shipping</p>
                <p className="text-base leading-none text-gray-800">$30</p>
            </div>
            <div className="flex items-center justify-between pt-5">
                <p className="text-base leading-none text-gray-800">Tax</p>
                <p className="text-base leading-none text-gray-800">$35</p>
            </div>
        </div>
        <div>
            <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                <p className="text-2xl leading-normal text-gray-800">Total</p>
                <p className="text-2xl font-bold leading-normal text-right text-gray-800">$10,240</p>
            </div>
            <button className="text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white">
                Checkout
            </button>
        </div>
    </div>
</div>
  );
};

export default SummaryCard;
