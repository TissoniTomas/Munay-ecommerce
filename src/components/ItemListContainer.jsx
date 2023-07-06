import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
      <div className='flex items-center justify-center mt-10'>
        <p className='font-bold text-white text-3xl'>{greeting}</p>
    </div>
  );
};

export default ItemListContainer;
