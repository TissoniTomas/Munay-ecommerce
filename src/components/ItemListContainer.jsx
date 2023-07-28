import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch.jsx';
import EcommerceCard from './EcommerceCard.jsx';

const URL = 'https://dummyjson.com/products/';

const ItemListContainer = () => {
  const [filteredData, setfilteredData] = useState([]);
  const { id } = useParams();

  const { data, loading } = useFetch(URL);

  const getFilteredProducts = (dataProduct) => {
    return dataProduct?.filter((product) => product.category === id);
  };

  useEffect(() => {
    const filteredProducts = id
      ? getFilteredProducts(data)
      : data;

    setfilteredData(filteredProducts);
  }, [id, data]);

  if (loading) {
    return <p className='text-center text-2xl dark:text-white'>Loading...</p>;
  }
  return (
    <div className=' grid grid-cols-1fr-150px sm:grid-cols-1fr-250px gap-4 p-5'>
      {filteredData?.map((product) => (

        <EcommerceCard
          key={product.id}
          product={product}/>

      ))}
    </div>
  );
};

export default ItemListContainer;
