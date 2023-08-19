import { Link } from 'react-router-dom';

const linkClass = 'font-normal px-4 py-2 text-sm hover:bg-gray-100 hover:font-medium';
const Categories = () => {
  return (
    <ul className="z-10 sm:absolute sm:top-[95%] sm:left-[50%] sm:py-2 sm:rounded-xl sm:bg-white sm:shadow-2xl text-black dark:text-white sm:dark:text-black sm:text-black">
     <Link to={'categoria/productos/sublimacion'}><li className={linkClass}>Sublimación</li></Link>
     <Link to={'categoria/productos/encuadernado'}><li className={linkClass}>Cuadernos</li></Link>
     <Link to={'categoria/productos/tela'}><li className={linkClass}>Tela</li></Link>
   </ul>
  );
};

export default Categories;
