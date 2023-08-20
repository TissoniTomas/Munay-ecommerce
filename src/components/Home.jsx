import React from 'react';
import ProductsHomeCard from './ProductsHomeCard.jsx';
import Footer from './Footer.jsx';
import FollowUs from './FollowUs.jsx';
import Newsletter from './Newsletter.jsx';

const Home = () => {
  return (
    <div>
      <img src="https://img.freepik.com/foto-gratis/imprenta-moderna-produce-impresiones-multicolores-generadas-precision-ia_188544-15381.jpg"
       alt="fondo" className="max-w-full w-full h-auto max-h-[600px] p-[1.75rem] object-contain" />
      <div className="flex align-center justify-center">
        <h1 className="text-2xl sm:text-4xl font-semibold leading-9 dark:text-white ">Nuestros Productos</h1>
      </div>
      <div className="2xl:mx-auto 2xl:container lg:pb-16 lg:px-40 xl:px-20 md:pb-12 md:px-6 0 pb-9 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 lg:gap-x-8 md:gap-6 gap-4 lg:mt-12 md:mt-9 mt-6">
          <ProductsHomeCard />
          <ProductsHomeCard />
          <ProductsHomeCard />
        </div>
      </div>
      <FollowUs/>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
