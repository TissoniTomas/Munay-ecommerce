import React from 'react';

const ProductsHomeCard = () => {
  return (
    <div className="relative flex items-center justify-center">
        <img src="https://i.ibb.co/kqt7S1z/img-1.png" alt="chair" />
        <div className="absolute top-0 flex flex-col w-80 md:w-80 lg:w-80 xl:w-96 h-full items-center justify-between py-10">
            <div className="flex items-center justify-center flex-col h-full">
                <h2 className="xl:px-10 md:px-2 px-7 text-2xl font-semibold sm:w-auto leading-normal text-center text-white">Cuadernos</h2>
                <p className="xl:px-10 md:px-2 px-7 text-lg leading-normal text-center text-white mt-4">Personalizalos a tu gusto!</p>
            </div>
            <div className="py-16 md:w-auto w-full">
                <button className="w-full hover:bg-gray-300 transition duration-150 text-base font-medium leading-none text-center text-gray-800 py-4 px-12 bg-white focus:outline-none">Read more</button>
            </div>
        </div>
</div>
  );
};

export default ProductsHomeCard;
