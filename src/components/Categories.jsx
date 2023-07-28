import { Link } from 'react-router-dom';

const Categories = () => {
  return (
    <ul className="sm:absolute sm:top-[95%] sm:left-[50%] sm:py-2 sm:z-2 sm:rounded-xl sm:bg-white sm:shadow-2xl text-white sm:dark:text-black sm:text-black">
     <Link to={'categoria/productos/smartphones'}><li className="px-4 py-2 text-sm hover:bg-gray-100">Celulares</li></Link>
     <Link to={'categoria/productos/laptops'}><li className="px-4 py-2 text-sm hover:bg-gray-50">Laptops</li></Link>
     <Link to={'categoria/productos/skincare'}><li className="px-4 py-2 text-sm hover:bg-gray-50">Cremas</li></Link>
   </ul>
  );
};

export default Categories;
