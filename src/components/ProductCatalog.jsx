import React from 'react';
import { Link } from 'react-router-dom';

const ProductCatalog = ({ img, title, path }) => {
  return (
    < Link to={`categoria/productos/${path}`}>
      <div className="relative">
        <img className=" lg:block h-[281px] w-full" src={img} alt={title} />

        <div className="p-6 flex flex-col justify-start items-start bg-green">
          <div>
            <p className="text-2xl font-semibold  text-black">{title}</p>
          </div>
          <div className="mt-2">
            <p className="text-base  text-gray-600">Explora todos los productos! </p>
          </div>
          <div className="mt-6">
            <div className="flex justify-between items-center space-x-2">
              <a className="text-base font-medium leading-none hover:underline text-black" href="/">
                Explorar
              </a>
              <svg className="fill-current" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.33337 8H12.6667" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10 10.6667L12.6667 8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10 5.33333L12.6667 8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCatalog;
