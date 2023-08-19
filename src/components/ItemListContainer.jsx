import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from './ProductCard.jsx';
import useGetProducts from '../hooks/useGetsProducts.jsx';

const ItemListContainer = () => {
  const [filteredData, setfilteredData] = useState([]);

  const { id } = useParams();

  const { products } = useGetProducts();
  const getFilteredProducts = (dataProduct) => {
    return dataProduct?.filter((product) => product.category === id);
  };

  useEffect(() => {
    const filteredProducts = id
      ? getFilteredProducts(products)
      : products;

    setfilteredData(filteredProducts);
  }, [id, products]);

  // if (loading) {
  //   return <p className='text-center text-2xl dark:text-white'>Loading...</p>;
  // }
  return (
    <div className=' grid grid-cols-1fr-150px sm:grid-cols-1fr-250px gap-4 p-5 justify-center'>
  {filteredData?.map((product) => (
    <ProductCard
    key={product.id}
    product={product}
    />
  ))}
    </div>
  );
};

export default ItemListContainer;
