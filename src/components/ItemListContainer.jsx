import React from 'react';
import useFetch from '../hooks/useFetch.jsx';
import EcommerceCard from './EcommerceCard.jsx';

const ItemListContainer = () => {
  const { data, loading } = useFetch('https://dummyjson.com/products');
  console.log(data, loading);

  if (loading) {
    return <p className='text-center text-2xl dark:text-white'>Loading...</p>;
  }
  return (
      <div className=' grid grid-cols-1fr-150px gap-4 p-5'>
       { data?.map((product) => (
       <div key={product.id} >
         <EcommerceCard product={product} />
       </div>
       ))}
        </div>
  );
};

export default ItemListContainer;
