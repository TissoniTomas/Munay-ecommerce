import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
  return (
    <ul className="absolute top-[8%] right-[51%] py-2 rounded-xl bg-white shadow-2xl dark:text-black">
    <Link to={'categoria/productos/smartphones'}><li className="px-4 py-2 text-sm hover:bg-gray-100">Celulares</li></Link>
     <Link to={'categoria/productos/laptops'}><li className="px-4 py-2 text-sm hover:bg-gray-50">Laptops</li></Link>
     <Link to={'categoria/productos/skincare'}><li className="px-4 py-2 text-sm hover:bg-gray-50">Cremas</li></Link>
   </ul>
  );
};

export default Categories;
