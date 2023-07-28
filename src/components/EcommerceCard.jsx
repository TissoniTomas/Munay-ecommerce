import { Link } from 'react-router-dom';

const EcommerceCard = ({ product }) => {
  return (
<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow h-[100%] dark:bg-black dark:border-gray-700">
    <div className="">
        <img className="rounded-t-lg w-[100%] h-[150px] " src={product?.images[0]} alt="" />
    </div>
    <div className="p-5">
        <a className="flex gap-4 justify-around align-center">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white text-center">{product.title}</h5>
            <h5 className="mb-2 text-xl tracking-tight text-green text-center ">{`$${product.price}`}</h5>
        </a>
        <p className="mb-3 text-xs font-normal text-gray-700 dark:text-gray-400">{product.description}</p>
        <Link to={`/productos/${product.id}`}>
        <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Agregar al carrito
             <svg className="w-3 h-3 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </button>
        </Link>
    </div>
</div>

  );
};

export default EcommerceCard;
