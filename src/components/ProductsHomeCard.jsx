import React from 'react';
import ProductCatalog from './ProductCatalog.jsx';

const ProductsHomeCard = () => {
  return (
        <div className=" grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:grap-8 md:gap-6 gap-4 mt-10">
          <ProductCatalog img={'https://i.ibb.co/qF1BP8L/IMG-3543.jpg'} title={'Encuadernados'} path={'encuadernado'}/>
          <ProductCatalog img={'https://i.ibb.co/M2zTXG4/cabecera-que-es-la-sublimacion-2.jpg'} title={'Tela'} path={'tela'}/>
          <ProductCatalog img={'https://i.ibb.co/YW2nZGS/cabecera-preguntas-basicas-sobre-sublimacion-1024x581.jpg'} title={'Sublimación'} path={'sublimacion'}/>
      </div>
  );
};

export default ProductsHomeCard;
